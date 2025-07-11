import { Copy } from "lucide-react";
import { Button } from "@/components/ui/button";

export function RoomHeader() {
	return (
		<header className="w-full px-6">
			<div className="mx-auto flex w-full max-w-[1200px] items-center justify-between py-4">
				{/** biome-ignore lint/performance/noImgElement: <I have to> */}
				<img
					alt="Let Me Ask Logo"
					className="block"
					src="letmeask.svg"
					width={100}
				/>

				<div className="flex items-center gap-4">
					<Button className="!p-0 !pr-4 border-violet-500" variant="outline">
						<div className="flex h-full items-center justify-center rounded-l-sm bg-violet-500 px-2 text-white">
							<Copy />
						</div>
						Sala #123234
					</Button>

					<Button
						className="border-violet-500 text-violet-500 hover:border-red-500 hover:bg-red-500 hover:text-white"
						variant="outline"
					>
						Encerrar Sala
					</Button>
				</div>
			</div>
		</header>
	);
}
