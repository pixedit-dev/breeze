import { NavLink } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import "./navbar.css";
const Navbar = () => {
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
		</nav>
	);
};

export default Navbar;
