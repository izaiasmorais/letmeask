export function Banner() {
	return (
		<div className="col-span-2 flex h-full items-center justify-center bg-violet-500 text-white">
			<div className="flex w-[500px] flex-col gap-6">
				{/** biome-ignore lint/performance/noImgElement: <I have to> */}
				<img alt="Ilustração" height={403} src="/people.svg" width={313} />

				<div className="flex flex-col">
					<strong className="text-3xl leading-12">
						Toda pergunta tem uma resposta.
					</strong>

					<span className="font-normal text-slate-300 text-xl">
						Aprenda e compartilhe conhecimento com outras pessoas
					</span>
				</div>
			</div>
		</div>
	);
}
