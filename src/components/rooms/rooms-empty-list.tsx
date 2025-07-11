

export function RoomsEmptyList() {
	return (
		<div className="flex items-center justify-center">
			<div className="flex w-[380px] flex-col items-center space-y-6 text-center">
				{/** biome-ignore lint/performance/noImgElement: <I have to> */}
				<img
					alt="Ilustração de Lista de Questões Vazias"
					height={150}
					src="/empty-questions.svg"
					width={150}
				/>

				<div className="flex flex-col gap-2">
					<strong className="text-lg">Nenhuma sala por aqui...</strong>

					<span className="text-muted-foreground">
						Crie uma sala agora mesmo para criar um ambiente de perguntas e
						respostas com auxílio de IA.
					</span>
				</div>
			</div>
		</div>
	);
}
