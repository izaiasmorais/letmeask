/** biome-ignore-all lint/suspicious/noConsole: <I have to log the data> */
import { Mic, StopCircle } from "lucide-react";
import { useRef, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { toast } from "sonner";
import { api } from "@/services/axios";
import { Button } from "../ui/button";
import { RoomHeader } from "./room-header";

const isRecordingSupported =
	!!navigator.mediaDevices &&
	typeof navigator.mediaDevices.getUserMedia === "function" &&
	typeof window.MediaRecorder === "function";

type RecordRoomAudioParams = {
	roomId: string;
};

export function RecordRoomAudio() {
	const [isRecording, setIsRecording] = useState(false);

	const recorder = useRef<MediaRecorder | null>(null);

	const intervalRef = useRef<NodeJS.Timeout | null>(null);

	const { roomId } = useParams<RecordRoomAudioParams>();

	if (!roomId) {
		return <Navigate replace to="/" />;
	}

	function handleStopRecording() {
		setIsRecording(false);

		if (recorder.current && recorder.current.state !== "inactive") {
			recorder.current.stop();
		}

		if (intervalRef.current) {
			clearInterval(intervalRef.current);
		}
	}

	async function uploadAudio(audio: Blob) {
		const formData = new FormData();

		formData.append("file", audio, "audio.webm");

		const response = await api.post(`/rooms/${roomId}/audio`, formData);

		console.log(response.data);
	}

	function createRecorder(audio: MediaStream) {
		recorder.current = new MediaRecorder(audio, {
			mimeType: "audio/webm",
			audioBitsPerSecond: 64_000,
		});

		recorder.current.ondataavailable = (event) => {
			if (event.data.size > 0) {
				uploadAudio(event.data);
			}
		};

		recorder.current.onstart = () => {
			console.log("Iniciando gravação");
		};

		recorder.current.onstop = () => {
			console.log("Gravação encerrada");
		};

		recorder.current.start();
	}

	async function handleStartRecording() {
		if (!isRecordingSupported) {
			toast.error("Gravação de áudio não suportada");
			return;
		}

		setIsRecording(true);

		const audio = await navigator.mediaDevices.getUserMedia({
			audio: {
				echoCancellation: true,
				noiseSuppression: true,
				sampleRate: 44_100,
			},
		});

		createRecorder(audio);

		intervalRef.current = setInterval(() => {
			recorder.current?.stop();

			createRecorder(audio);
		}, 10_000);
	}

	return (
		<div className="h-screen w-full">
			<RoomHeader />

			<div className="mx-4">
				<div className="mx-auto mt-6 flex h-[300px] w-full max-w-[1200px] items-center justify-center rounded-lg border border-slate-300 border-dashed">
					<div className="flex flex-col items-center gap-4">
						<Button
							onClick={isRecording ? handleStopRecording : handleStartRecording}
							variant={isRecording ? "destructive" : "default"}
						>
							{!isRecording && (
								<>
									<Mic />
									Iniciar Gravação
								</>
							)}

							{isRecording && (
								<>
									<StopCircle />
									Parar Gravação
								</>
							)}
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}
