import "./app-layout.css";
import Hourly from "./Hourly";
const AppLayout = () => {
	return (
		<div className="home-page">
			<div className="cur-temp-section">
				<div className="left-section">
					<dl>
						<div className="bold">
							<p>**DISCRIPTION**</p>
						</div>
						<div>
							<dt>**FEELS LIKE**</dt>
							<dd>100</dd>
						</div>
						<div>
							<dt>**PRESURE**</dt>
							<dd>100 hPa</dd>
						</div>
						<div>
							<dt>**WIND SPEED**</dt>
							<dd>100 m/s</dd>
						</div>
						<div>
							<dt>**WIND DEG**</dt>
							<dd>100 km</dd>
						</div>

						<div>
							<dt>**WIND GUST**</dt>
							<dd>100</dd>
						</div>
						<div>
							<dt>**VISIBILITY**</dt>
							<dd>**VISIBILITY**</dd>
						</div>
					</dl>
				</div>
				<div className="main">
					<h3>
						**NAME** <span>**COUNTRY**</span>
					</h3>
					<strong>Today</strong>
					<div className="cur-weather">
						{/* icon here (image) */}
						<p>**TEMP AND UNIT**</p>
					</div>
				</div>
				<div className="right-section">
					<dl>
						<div>
							<dt>**MINIMUME**</dt>
							<dd>100</dd>
						</div>
						<div>
							<dt>** MAXIMUME**</dt>
							<dd>100</dd>
						</div>
						<div>
							<dt>**HUMIDITY**</dt>
							<dd>**HUMIDITY**</dd>
						</div>
						<div>
							<dt>**SEE LEVEL**</dt>
							<dd>**SEE LEVEL HPA**</dd>
						</div>
						<div>
							<dt>**SUNRISE**</dt>
							<dd>**SUNRISE**</dd>
						</div>
						<div>
							<dt>SUNSET</dt>
							<dd>**SUNSET**</dd>
						</div>
					</dl>
				</div>
			</div>
			<Hourly />
		</div>
	);
};

export default AppLayout;
