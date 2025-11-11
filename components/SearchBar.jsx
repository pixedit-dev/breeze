import { useContext, useState } from "react";
import "./search-bar.css";
import { WeatherContext } from "../context/WeatherContext";

const SearchBar = () => {
	const { dispatch, fetchWeatherData } = useContext(WeatherContext);
	const [city, setCity] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch({ type: "SET_CITY", payload: city });
		fetchWeatherData(city);
		setCity("");
	};
	return (
		<form className="search" onSubmit={handleSubmit}>
			<input
				type="text"
				placeholder="Enter a City..."
				value={city}
				onChange={(e) => setCity(e.target.value)}
			/>
			<button>Search</button>
		</form>
	);
};

export default SearchBar;
