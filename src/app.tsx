import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecordRoomAudio } from "./components/room/record-room-audio";
import { CreateRoom } from "./pages/create-room";
import { Room } from "./pages/room";
import { Rooms } from "./pages/rooms";

export function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<CreateRoom />} index />
				<Route element={<Rooms />} path="/salas" />
				<Route element={<Room />} path="/sala/:id" />
				<Route element={<RecordRoomAudio />} path="/sala/:id/audio" />
				{/* <Route element={<Room />} path="/sala/:id" /> */}
			</Routes>
		</BrowserRouter>
	);
}
