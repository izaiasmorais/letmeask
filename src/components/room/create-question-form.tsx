import { LoaderCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { useCreateQuestion } from "@/hooks/use-create-question";

interface CreateQuestionFormProps {
	roomId: string;
}

export const CreateQuestionForm = ({ roomId }: CreateQuestionFormProps) => {
	const { form, handleCreateQuestion, isCreateQuestionLoading } =
		useCreateQuestion(roomId);

	const onSubmit = form.handleSubmit(handleCreateQuestion);

	return (
		<Form {...form}>
			<form className="space-y-6" onSubmit={onSubmit}>
				<div className="space-y-4">
					<FormField
						control={form.control}
						name="question"
						render={({ field }) => (
							<FormItem>
								<FormLabel className="text-base text-gray-700">
									O que você quer perguntar?
								</FormLabel>

								<FormControl>
									<Textarea
										className="min-h-[100px] resize-none border-gray-300 bg-white"
										placeholder="Digite sua pergunta aqui..."
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
				</div>

				<div className="flex justify-end">
					<Button
						className="bg-violet-500 px-6 hover:bg-violet-600"
						disabled={isCreateQuestionLoading}
						size="lg"
						type="submit"
					>
						{isCreateQuestionLoading && (
							<LoaderCircle className="mr-2 h-4 w-4 animate-spin" />
						)}
						Enviar pergunta
					</Button>
				</div>
			</form>
		</Form>
	);
};
