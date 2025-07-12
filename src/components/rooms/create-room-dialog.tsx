import { LoaderCircle } from "lucide-react";
import { useState } from "react";
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
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useCreateRoom } from "@/hooks/use-create-room";

export function CreateRoomDialog() {
	const [open, setOpen] = useState(false);
	const { form, handleCreateRoom, isCreateRoomLoading, isSuccess } =
		useCreateRoom();

	const onSubmit = form.handleSubmit(handleCreateRoom);

	if (isSuccess && open) {
		setOpen(false);
	}

	return (
		<Dialog onOpenChange={setOpen} open={open}>
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

				<Form {...form}>
					<form className="space-y-6" onSubmit={onSubmit}>
						<div className="grid gap-4">
							<FormField
								control={form.control}
								name="name"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Nome</FormLabel>
										<FormControl>
											<Input className="h-10 bg-white" {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>

							<FormField
								control={form.control}
								name="description"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Descrição</FormLabel>
										<FormControl>
											<Textarea
												className="bg-white"
												{...field}
												value={field.value || ""}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
						</div>

						<DialogFooter>
							<DialogClose asChild>
								<Button size="lg" variant="outline">
									Cancelar
								</Button>
							</DialogClose>

							<Button
								className="bg-violet-500 hover:bg-violet-600"
								disabled={isCreateRoomLoading}
								size="lg"
								type="submit"
							>
								{isCreateRoomLoading && (
									<LoaderCircle className="animate-spin" />
								)}
								Criar Sala
							</Button>
						</DialogFooter>
					</form>
				</Form>
			</DialogContent>
		</Dialog>
	);
}
