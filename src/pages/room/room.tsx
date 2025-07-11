import { RoomHeader } from "./header";
import { QuestionsList } from "./questions-list";

export function Room() {
	return (
		<div className="h-screen w-full">
			<RoomHeader />

			<QuestionsList />
		</div>
	);
}
