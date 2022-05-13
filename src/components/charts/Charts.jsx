import { React, useEffect, useState } from "react";
import PropTypes from "prop-types";
import fetchData from "../../js/fetchHandler";

import "./Charts.css";

import BarChart from "./bar/BarChart";
import RadarChart from "./radar/RadarChart";

const Charts = ({ id }) => {

	const [sessions, setSessions] = useState([]);
	const [perfs, setPerfs] = useState({});

	useEffect(() => {
		fetchData(id + "/activity").then(data => setSessions(data.data.sessions));
		fetchData(id + "/performance").then(data => setPerfs(data));
	}, [id]);

	return (
		<>
			<div className="charts-bar" id="chart-bar">
				<BarChart payload={sessions} />
			</div>
			<div className="charts-line">
				<RadarChart payload={perfs} />
			</div>   
			<div className="charts-radar"></div>   
			<div className="charts-radial"></div>   
			<div className="charts-keys"></div>
		</>
	);
};

Charts.propTypes = {
	id: PropTypes.number
};

export default Charts;
