export function QuestionEmptyList() {
	return (
		<div className="flex w-[350px] flex-col items-center space-y-6 text-center">
			{/** biome-ignore lint/performance/noImgElement: <I have to> */}
			<img
				alt="Ilustração de Lista de Questões Vazias"
				height={150}
				src="/empty-questions.svg"
				width={150}
			/>

			<div className="flex flex-col gap-2">
				<strong className="text-lg">Nenhuma pergunta por aqui...</strong>
				<span className="text-muted-foreground">
					Envie o código desta sala para seus amigos e comece a responder
					perguntas!
				</span>
			</div>
		</div>
	);
}
