import { Calendar, CircleCheck, MessageSquare, Trash } from "lucide-react";
import type { RoomQuestion } from "@/hooks/use-get-room-by-id";
import { formatDate } from "@/utils/format-date";

interface QuestionCardProps {
	question: RoomQuestion;
}

export function QuestionCard({ question }: QuestionCardProps) {
	return (
		<div className="flex flex-col gap-2 rounded-lg border-2 bg-white p-6">
			<p className="mb-4 text-base leading-relaxed">{question.question}</p>

			<div className="flex items-center justify-between">
				<div className="flex items-center gap-4">
					<div className="flex items-center space-x-2">
						<div className="flex h-8 w-8 items-center justify-center rounded-full bg-violet-500">
							<span className="font-medium text-sm text-white">A</span>
						</div>

						<span className="text-gray-600 text-sm">Anônimo</span>
					</div>

					<div className="flex items-center gap-2 text-gray-600 text-sm">
						<Calendar size={20} />
						<span>{formatDate(question.createdAt)}</span>
					</div>
				</div>

				<div className="flex items-center space-x-4 text-muted-foreground">
					<CircleCheck
						className="h-6 w-6 cursor-pointer hover:h-7 hover:w-7 hover:border-violet-700 hover:fill-violet-700 hover:text-white"
						fill="transparent"
					/>

					<MessageSquare
						className="cursor-pointer hover:text-violet-700"
						size={24}
					/>

					<Trash className="cursor-pointer hover:text-violet-700" size={24} />
				</div>
			</div>
		</div>
	);
}
