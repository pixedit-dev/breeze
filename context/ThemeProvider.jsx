import { useEffect, useState } from "react";
import { ThemeContext } from "./ThemeContext";

export const ThemeProvider = ({ children }) => {
	const [theme, setTheme] = useState("light");
	const toggleTheme = () => {
		setTheme((cur) => (cur === "light" ? "dark" : "light"));
	};

	useEffect(() => {
		document.documentElement.id = theme;
	}, [theme]);

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};
