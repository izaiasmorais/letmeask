import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function CreateRoomDialog() {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button className="bg-violet-500 hover:bg-violet-600" size="lg">
					Criar Sala
				</Button>
			</DialogTrigger>

			<DialogContent className="bg-[#F8F8F8] p-8 sm:max-w-[425px]">
				<DialogHeader>
					<DialogTitle>Criar nova sala</DialogTitle>

					<DialogDescription>
						Preencha as informações para criar uma nova sala.
					</DialogDescription>
				</DialogHeader>

				<form  className="space-y-6">
					<div className="grid gap-4">
						<div className="grid gap-3">
							<Label htmlFor="name">Nome</Label>

							<Input className="h-10 bg-white" id="name" name="name" />
						</div>

						<div className="grid gap-3">
							<Label htmlFor="description">Descrição</Label>

							<Textarea
								className="bg-white"
								id="description"
								name="description"
							/>
						</div>
					</div>

					<DialogFooter>
						<DialogClose asChild>
							<Button size="lg" variant="outline">
								Cancelar
							</Button>
						</DialogClose>

						<Button
							className="bg-violet-500 hover:bg-violet-600"
							size="lg"
							type="submit"
						>
							Criar Sala
						</Button>
					</DialogFooter>
				</form>
			</DialogContent>
		</Dialog>
	);
}
