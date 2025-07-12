import { useQuery } from "@tanstack/react-query";
import { z } from "zod";
import type { HTTPErrorResponse, HTTPSuccessResponse } from "@/@types/http";
import { api } from "@/services/axios";

const questionSchema = z.object({
	id: z.string(),
	question: z.string(),
	answer: z.string().nullable(),
	createdAt: z.string(),
});

const roomByIdSchema = z.object({
	id: z.string(),
	name: z.string(),
	questionsCount: z.number(),
	createdAt: z.string(),
	questions: z.array(questionSchema),
});

export type RoomById = z.infer<typeof roomByIdSchema>;

export type RoomQuestion = z.infer<typeof questionSchema>;

const getRoomByIdResponseSchema = z.object({
	success: z.literal(true),
	errors: z.null(),
	data: roomByIdSchema,
});

type GetRoomByIdResponse = HTTPSuccessResponse<RoomById> | HTTPErrorResponse;

const getRoomById = async (roomId: string): Promise<RoomById> => {
	const response = await api.get<GetRoomByIdResponse>(`/rooms/${roomId}`);

	const validatedResponse = getRoomByIdResponseSchema.parse(response.data);

	return validatedResponse.data;
};

export const useGetRoomById = (roomId: string) => {
	const { data: room, isLoading: isGetRoomByIdLoading } = useQuery({
		queryKey: ["get-room-by-id", roomId],
		queryFn: () => getRoomById(roomId),
		enabled: !!roomId,
	});

	return {
		room,
		isGetRoomByIdLoading,
	};
};
