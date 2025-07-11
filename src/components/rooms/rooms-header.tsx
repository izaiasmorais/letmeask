import { CreateRoomDialog } from "./create-room-dialog";

export function RoomsHeader() {
	return (
		<header className="w-full border-zinc-200 border-b">
			<div className="mx-auto flex w-full max-w-[1200px] items-center justify-between p-4">
				{/** biome-ignore lint/performance/noImgElement: <I have to> */}
				<img
					alt="Let Me Ask Logo"
					className="block"
					src="letmeask.svg"
					width={100}
				/>

				<CreateRoomDialog />
			</div>
		</header>
	);
}
