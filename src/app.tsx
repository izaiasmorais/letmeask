import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Dashboard } from "./pages/dashboard";
import { Room } from "./pages/room";
import { CreateRoom } from "./pages/sign-in/create-room";

export function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<CreateRoom />} index />
				<Route element={<Dashboard />} />
				<Route element={<Room />} />
			</Routes>
		</BrowserRouter>
	);
}
