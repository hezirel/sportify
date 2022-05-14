import { React, useEffect, useState } from "react";
import PropTypes from "prop-types";

import "./Charts.css";

import BarChart from "./bar/BarChart";
import RadChart from "./radar/RadChart";

const URL = "http://192.168.0.51:3000/user/";
const Charts = ({ id }) => {

	//#:Move to charts components
	const [sessions, setSessions] = useState([]);
	const [perfs, setPerfs] = useState(false);
	perfs ? 1 : 0;

	useEffect(() => {
		fetch(URL + id + "/activity")
			.then(res => res.json())
			.then(data => setSessions(data.data.sessions));

		fetch(URL + id + "/performance")
			.then(res => res.json())
			.then(data => setPerfs(data.data));
	}, [id]);

	return (
		<>
			<div className="charts-bar" id="chart-bar">
				<BarChart payload={sessions} />
			</div>
			<div className="charts-line">
			</div>   
			<div className="charts-radar">
				<RadChart payload={false} />
			</div>   
			<div className="charts-radial"></div>   
			<div className="charts-keys"></div>
		</>
	);
};

Charts.propTypes = {
	id: PropTypes.number
};

export default Charts;
