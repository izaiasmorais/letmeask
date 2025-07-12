import { useGetRooms } from "@/hooks/use-get-rooms";
import { RoomCard } from "./room-card";
import { RoomsEmptyList } from "./rooms-empty-list";

export function RoomsList() {
	const { rooms, isGetRoomsLoading } = useGetRooms();

	return (
		<div className="mx-auto flex w-full max-w-[1200px] flex-col gap-6 px-4 py-6">
			<div className="flex items-center gap-2">
				<strong className="text-2xl">Salas</strong>
				<span>({rooms.length})</span>
			</div>

			{!isGetRoomsLoading && rooms.length === 0 && <RoomsEmptyList />}

			{!isGetRoomsLoading && rooms.length > 0 && (
				<div className="flex flex-col gap-4">
					{rooms.map((room) => (
						<RoomCard key={room.id} room={room} />
					))}
				</div>
			)}
		</div>
	);
}
