import { React } from "react";
import PropTypes from "prop-types";
import "./Charts.css";

const Charts = ({ data }) => {

	if (!data) return null;
	console.log(data);

	return (
		<>
			<div className="charts-bar"></div>   
			<div className="charts-line"></div>   
			<div className="charts-radar"></div>   
			<div className="charts-radial"></div>   
			<div className="charts-keys"></div>
		</>
	);
};

Charts.propTypes = {
	data: PropTypes.oneOfType([PropTypes.object, PropTypes.bool])
};

export default Charts;
