import { React, useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./Charts.css";
import BarChart from "./BarChart";
import fetchData from "../../js/fetchHandler";

const Charts = ({ id }) => {

	const [sessions, setSessions] = useState([]);

	useEffect(() => {
		fetchData(`${id}/activity`).then(data => setSessions(data.data.sessions));
	}, []);

	return (
		<>
			<div className="charts-bar" id="chart-bar">
				<BarChart payload={sessions} />
			</div>
			<div className="charts-line"></div>   
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
