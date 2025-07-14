import { Bot, LoaderCircle } from "lucide-react";
import type { RoomQuestion } from "@/hooks/use-get-room-by-id";
import { timeAgo } from "@/utils/time-ago";
import { QuestionsCardSubject } from "./questions-card-subject";

interface QuestionCardProps {
	question: RoomQuestion;
}

export function QuestionCard({ question }: QuestionCardProps) {
	// const isGenerating = !question.answer;

	return (
		<div className="flex flex-col gap-2 rounded-lg border-2 bg-white p-6">
			<div className="flex flex-col gap-4">
				<p className="text-base leading-relaxed">{question.question}</p>

				<div className="flex items-center gap-2">
					<QuestionsCardSubject
						avatar={<span className="font-medium text-sm text-white">A</span>}
						avatarBgClass="bg-violet-500"
						name="Anônimo"
						time={timeAgo(question.createdAt)}
					/>
				</div>
			</div>

			<div className="mt-2 flex flex-col gap-4 rounded-md p-2">
				{question.isGeneratingAnswer && (
					<span className="flex items-center gap-2 text-muted-foreground text-sm">
						<LoaderCircle className="animate-spin" size={16} /> Carregando
						Resposta...
					</span>
				)}

				{!(question.answer || question.isGeneratingAnswer) && (
					<>
						<p>Não foi possível gerar uma resposta para essa pergunta.</p>
						<div className="flex items-center gap-2">
							<QuestionsCardSubject
								avatar={<Bot size={18} />}
								name="Inteligência Artificial"
								time={timeAgo(question.createdAt)}
							/>
						</div>
					</>
				)}

				{question.answer && !question.isGeneratingAnswer && (
					<>
						{question.answer && <p>{question.answer}</p>}

						<div className="flex items-center gap-2">
							<QuestionsCardSubject
								avatar={<Bot size={18} />}
								name="Inteligência Artificial"
								time={timeAgo(question.createdAt)}
							/>
						</div>
					</>
				)}
			</div>
		</div>
	);
}
