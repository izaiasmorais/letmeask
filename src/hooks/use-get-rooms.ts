import { useQuery } from "@tanstack/react-query";
import { z } from "zod";
import type { HTTPErrorResponse, HTTPSuccessResponse } from "@/@types/http";
import { api } from "@/services/axios";

const roomSchema = z.object({
	id: z.string(),
	name: z.string(),
	questionsCount: z.number(),
	createdAt: z.string(),
	updatedAt: z.string(),
});

export type Room = z.infer<typeof roomSchema>;

const getRoomsResponseSchema = z.object({
	success: z.literal(true),
	errors: z.null(),
	data: z.array(roomSchema),
});

export type GetRoomsResponse = HTTPSuccessResponse<Room[]> | HTTPErrorResponse;

const getRooms = async (): Promise<Room[]> => {
	const response = await api.get<GetRoomsResponse>("/rooms");

	const validatedResponse = getRoomsResponseSchema.parse(response.data);

	return validatedResponse.data;
};

export const useGetRooms = () => {
	const { data: rooms = [], isLoading: isGetRoomsLoading } = useQuery({
		queryKey: ["rooms"],
		queryFn: getRooms,
	});

	return {
		rooms,
		isGetRoomsLoading,
	};
};
