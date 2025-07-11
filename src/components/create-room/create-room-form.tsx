import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function CreateRoomForm() {
	return (
		<div className="col-span-3 flex h-full items-center justify-center">
			<div className="flex flex-col items-center gap-6 text-center">
				{/** biome-ignore lint/performance/noImgElement: <I have to> */}
				<img
					alt="Let Me Ask Logo"
					className="block"
					height={69}
					src="letmeask.svg"
					width={154}
				/>

				<div className="flex flex-col justify-center gap-4 text-center">
					<strong className="block text-2xl">Criar uma nova sala</strong>

					<Input className="h-10" placeholder="Nome da sala" />

					<Button
						className="w-full bg-violet-500 hover:bg-violet-600"
						size="lg"
					>
						Criar sala
					</Button>

					<span className="flex items-center gap-1 text-slate-500">
						Quer entrar em uma sala já existente?
						<Link
							className="text-violet-700 underline hover:text-violet-800"
							to="/salas"
						>
							Clique aqui
						</Link>
					</span>
				</div>
			</div>
		</div>
	);
}
