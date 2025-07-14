import type { ReactNode } from "react";

interface QuestionsCardSubjectProps {
	avatar: ReactNode;
	avatarBgClass?: string;
	name: string;
	time: string;
}

export function QuestionsCardSubject({
	avatar,
	avatarBgClass = "bg-muted",
	name,
	time,
}: QuestionsCardSubjectProps) {
	return (
		<div className="flex items-center gap-2">
			<div
				className={`flex h-8 w-8 items-center justify-center rounded-full ${avatarBgClass}`}
			>
				{avatar}
			</div>
			<div className="flex items-center gap-2">
				<span className="text-gray-600 text-sm">{name}</span>
				<div className="mt-1 h-1 w-1 rounded-full bg-gray-400" />
				<span className="mt-0.75 text-muted-foreground text-xs">{time}</span>
			</div>
		</div>
	);
}
