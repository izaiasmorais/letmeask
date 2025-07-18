import { Calendar, ChevronRight, CircleQuestionMark } from "lucide-react";
import { Link } from "react-router-dom";
import type { Room } from "@/hooks/use-get-rooms";
import { formatDate } from "@/utils/format-date";
import { Badge } from "../ui/badge";

interface RoomCardProps {
	room: Room;
}

export function RoomCard({ room }: RoomCardProps) {
	return (
		<Link
			className="flex w-full cursor-pointer items-center justify-between rounded-md border-2 bg-white px-6 py-6 transition-colors hover:border-violet-500"
			to={`/sala/${room.id}`}
		>
			<div className="flex flex-col gap-2">
				<span className="font-medium">{room.name}</span>

				<div className="flex items-center gap-2">
					<Badge className="flex items-center gap-2" variant="secondary">
						<CircleQuestionMark />
						{room.questionsCount} pergunta(s)
					</Badge>

					<Badge className="flex items-center gap-2" variant="secondary">
						<Calendar />
						{formatDate(room.createdAt)}
					</Badge>
				</div>
			</div>

			<ChevronRight size={16} />
		</Link>
	);
}
