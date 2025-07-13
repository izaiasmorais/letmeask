import { ArrowLeft, Mic } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { useGetRoomById } from "@/hooks/use-get-room-by-id";
import { Button } from "../ui/button";
import { CreateQuestionForm } from "./create-question-form";
import { QuestionCard } from "./questions-card";
import { QuestionEmptyList } from "./questions-empty-list";

export function QuestionsList() {
	const { id } = useParams<{ id: string }>();

	const { room, isGetRoomByIdLoading } = useGetRoomById(id || "");

	if (!id) {
		return (
			<div className="flex h-[200px] w-full items-center justify-center text-center">
				<strong className="text-muted-foreground text-xl">
					Sala não encontrada
				</strong>
			</div>
		);
	}

	return (
		<div className="mx-auto flex w-full max-w-[1200px] flex-col gap-6 px-4 py-6">
			<div className="flex items-center justify-between">
				<div className="flex items-center gap-2">
					<div className="flex h-10 w-10 cursor-pointer items-center justify-center">
						<Link to="/salas">
							<ArrowLeft />
						</Link>
					</div>

					<strong className="text-2xl">
						{room ? room.name : "Indefinida"}
					</strong>
				</div>

				<Button asChild size="lg">
					<Link to={`/sala/${id}/audio`}>
						<Mic />
						Gravar Áudio
					</Link>
				</Button>
			</div>

			<div className="flex items-center justify-center">
				{!(isGetRoomByIdLoading || room) && <QuestionEmptyList />}

				{!isGetRoomByIdLoading && room && (
					<div className="flex w-full flex-col gap-4">
						{room && <CreateQuestionForm roomId={room.id} />}

						{room.questions.map((question) => (
							<QuestionCard key={question.id} question={question} />
						))}
					</div>
				)}
			</div>
		</div>
	);
}
