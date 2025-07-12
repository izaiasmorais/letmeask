import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { z } from "zod";
import type { HTTPErrorResponse, HTTPSuccessResponse } from "@/@types/http";
import { api } from "@/services/axios";

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
		createdAt: z.string(),
		updatedAt: z.string(),
	}),
});

type CreateQuestionResponse =
	| HTTPSuccessResponse<{
			id: string;
			question: string;
			createdAt: string;
			updatedAt: string;
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
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["get-room-by-id", roomId] });
			form.reset();
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
