import { NavLink } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import "./navbar.css";
import UnitSelectorBtn from "./UnitSelectorBtn";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
const Navbar = () => {
	const { theme, toggleTheme } = useContext(ThemeContext);

	return (
		<nav className="navbar">
			<NavLink to="/">
				<IoHome className="home-button" />
			</NavLink>
			<NavLink
				to="/daily"
				className={({ isActive }) => (isActive ? "active" : null)}>
				Daily Forecast
			</NavLink>
			<UnitSelectorBtn />
			<button
				className="toggle-btn"
				onClick={toggleTheme}
				title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}>
				<div className="icon-track">
					<span className="icon sun">🌞</span>
					<span className="icon moon">🌙</span>
				</div>
			</button>
		</nav>
	);
};

export default Navbar;
