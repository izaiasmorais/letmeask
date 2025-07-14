import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import { z } from "zod";
import type { HTTPErrorResponse, HTTPSuccessResponse } from "@/@types/http";
import { api } from "@/services/axios";
import type { RoomById } from "./use-get-room-by-id";

const createQuestionSchema = z.object({
	question: z.string().min(1, "Pergunta é obrigatória"),
});

export type CreateQuestionData = z.infer<typeof createQuestionSchema>;

const createQuestionResponseSchema = z.object({
	success: z.literal(true),
	errors: z.null(),
	data: z.object({
		id: z.string(),
		question: z.string(),
		answer: z.string().nullable(),
		createdAt: z.string(),
		updatedAt: z.string(),
	}),
});

type CreateQuestionResponse =
	| HTTPSuccessResponse<{
			id: string;
			question: string;
			answer: string | null;
			createdAt: string;
	  }>
	| HTTPErrorResponse;

const createQuestion = async (roomId: string, data: CreateQuestionData) => {
	const response = await api.post<CreateQuestionResponse>(
		`/rooms/${roomId}/questions`,
		data
	);

	const validatedResponse = createQuestionResponseSchema.parse(response.data);

	return validatedResponse.data;
};

export const useCreateQuestion = (roomId: string) => {
	const queryClient = useQueryClient();

	const form = useForm<CreateQuestionData>({
		resolver: zodResolver(createQuestionSchema),
		defaultValues: {
			question: "",
		},
	});

	const {
		mutate: createQuestionMutation,
		isPending: isCreateQuestionLoading,
		...rest
	} = useMutation({
		mutationFn: (data: CreateQuestionData) => createQuestion(roomId, data),
		onMutate(variables) {
			const newQuestion = {
				id: uuidv4(),
				question: variables.question,
				answer: null,
				createdAt: new Date().toISOString(),
				isGeneratingAnswer: true,
			};

			queryClient.setQueryData<RoomById>(["get-room-by-id", roomId], (old) => {
				if (!old) {
					return old;
				}

				return {
					...old,
					questions: [newQuestion, ...old.questions],
				};
			});

			return { optimisticId: newQuestion.id };
		},
		onSuccess(data, _variables, context) {
			// Substitui a pergunta otimista pela resposta real do backend
			queryClient.setQueryData<RoomById>(["get-room-by-id", roomId], (old) => {
				if (!old) {
					return old;
				}

				return {
					...old,
					questions: old.questions.map((q) =>
						// Substitui a pergunta otimista (pelo id) pela resposta real
						q.id === context?.optimisticId
							? { ...data, isGeneratingAnswer: false }
							: q
					),
				};
			});

			form.reset();
		},
		onError(_error, _variables, context) {
			// Remove a pergunta otimista do cache
			queryClient.setQueryData<RoomById>(["get-room-by-id", roomId], (old) => {
				if (!old) {
					return old;
				}

				return {
					...old,
					questions: old.questions.filter(
						(q) => q.id !== context?.optimisticId
					),
				};
			});
		},
	});

	const handleCreateQuestion = (data: CreateQuestionData) => {
		createQuestionMutation(data);
	};

	return {
		form,
		handleCreateQuestion,
		isCreateQuestionLoading,
		...rest,
	};
};
