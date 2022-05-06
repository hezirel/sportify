import { React } from "react";
import PropTypes from "prop-types";
import "./Charts.css";
import BarChart from "./BarChart";

const Charts = ({ id }) => {

	//#:Create context provider
	return (
		<>
			<div className="charts-bar" id="chart-bar">
				<BarChart id={id} />
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
