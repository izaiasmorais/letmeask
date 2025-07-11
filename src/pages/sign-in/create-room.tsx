import { Banner } from "./banner";
import { CreateRoomForm } from "./create-room-form";

export function CreateRoom() {
	return (
		<div className="grid h-screen w-full grid-cols-5">
			<Banner />

			<CreateRoomForm />
		</div>
	);
}
