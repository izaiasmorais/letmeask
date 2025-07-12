import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { z } from "zod";
import type { HTTPErrorResponse, HTTPSuccessResponse } from "@/@types/http";
import { api } from "@/services/axios";

const createRoomSchema = z.object({
	name: z.string().min(1, "Nome é obrigatório"),
	description: z.string().nullable(),
});

export type CreateRoomData = z.infer<typeof createRoomSchema>;

const createRoomResponseSchema = z.object({
	success: z.literal(true),
	errors: z.null(),
	data: z.object({
		id: z.string(),
		name: z.string(),
		description: z.string().nullable(),
		createdAt: z.string(),
		updatedAt: z.string(),
	}),
});

type CreateRoomResponse =
	| HTTPSuccessResponse<{
			id: string;
			name: string;
			description: string | null;
			createdAt: string;
			updatedAt: string;
	  }>
	| HTTPErrorResponse;

const createRoom = async (data: CreateRoomData) => {
	const response = await api.post<CreateRoomResponse>("/rooms", data);

	const validatedResponse = createRoomResponseSchema.parse(response.data);

	return validatedResponse.data;
};

export const useCreateRoom = () => {
	const queryClient = useQueryClient();

	const form = useForm<CreateRoomData>({
		resolver: zodResolver(createRoomSchema),
		defaultValues: {
			name: "",
			description: "",
		},
	});

	const {
		mutate: createRoomMutation,
		isPending: isCreateRoomLoading,
		...rest
	} = useMutation({
		mutationFn: createRoom,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["rooms"] });
			form.reset();
		},
	});

	const handleCreateRoom = (data: CreateRoomData) => {
		const submitData = {
			...data,
			description: data.description || null,
		};

		createRoomMutation(submitData);
	};

	return {
		form,
		handleCreateRoom,
		isCreateRoomLoading,
		...rest,
	};
};
