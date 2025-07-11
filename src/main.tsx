import { QueryClientProvider } from "@tanstack/react-query";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./app.tsx";
import { client } from "./services/react-query.ts";

import "./index.css";

// biome-ignore lint/style/noNonNullAssertion: <Mandatory by react>
createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<QueryClientProvider client={client}>
			<App />
		</QueryClientProvider>
	</StrictMode>
);
