import { Banner } from "../components/create-room/banner";
import { CreateRoomForm } from "../components/create-room/create-room-form";

export function CreateRoom() {
	return (
		<div className="grid h-screen w-full grid-cols-5">
			<Banner />

			<CreateRoomForm />
		</div>
	);
}
