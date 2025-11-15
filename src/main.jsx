import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { WeatherProvider } from "../context/WeatherProvider.jsx";
import { ThemeProvider } from "../context/ThemeProvider.jsx";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<ThemeProvider>
			<WeatherProvider>
				<App />
			</WeatherProvider>
		</ThemeProvider>
	</StrictMode>
);
