import { QuestionsList } from "@/components/room/questions-list";
import { RoomHeader } from "@/components/room/room-header";

export function Room() {
	return (
		<div className="h-screen w-full">
			<RoomHeader />

			<QuestionsList />
		</div>
	);
}
