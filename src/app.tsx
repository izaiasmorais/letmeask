import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CreateRoom } from "./pages/create-room/create-room";
import { Dashboard } from "./pages/dashboard";
import { Room } from "./pages/room/room";

export function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<CreateRoom />} index />
				<Route element={<Dashboard />} path="/salas" />
				<Route element={<Room />} path="/sala" />
				{/* <Route element={<Room />} path="/sala/:id" /> */}
			</Routes>
		</BrowserRouter>
	);
}
