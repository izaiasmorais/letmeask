import { RoomsHeader } from "@/components/rooms/rooms-header";
import { RoomsList } from "@/components/rooms/rooms-list";

export function Rooms() {
	return (
		<div className="h-screen w-full bg-pastel">
			<RoomsHeader />

			<RoomsList />
		</div>
	);
}
