import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import Navbar from "../components/Navbar";
import AppLayout from "../components/AppLayout";
import Daily from "../components/Daily";
import Footer from "../components/Footer";

const App = () => {
	return (
		<Router>
			<div className="app-wrapper">
				<div className="app">
					<div className="container">
						<div className="search-wrapper">
							<SearchBar />
						</div>
						<div className="weather-app">
							<Navbar />
							<Routes>
								<Route path="/" element={<AppLayout />} />
								<Route path="/daily" element={<Daily />} />
							</Routes>
						</div>
					</div>
				</div>
				<Footer />
			</div>
		</Router>
	);
};

export default App;
