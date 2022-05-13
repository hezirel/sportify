import { React, useEffect, useState } from "react";
import PropTypes from "prop-types";
import fetchData from "../../js/fetchHandler";

import "./Charts.css";

import BarChart from "./bar/BarChart";
import RadChart from "./radar/RadChart";

const Charts = ({ id }) => {

	const [sessions, setSessions] = useState([]);
	const [perfs, setPerfs] = useState(false);

	useEffect(() => {
		fetchData(id + "/activity").then(data => setSessions(data.data.sessions));
		fetchData(id + "/performance").then(data => setPerfs(data.data));
	}, [id]);

	return (
		<>
			<div className="charts-bar" id="chart-bar">
				<BarChart payload={sessions} />
			</div>
			<div className="charts-line">
			</div>   
			<div className="charts-radar">
				<RadChart payload={perfs ? perfs : false} />
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
