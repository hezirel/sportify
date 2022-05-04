import { React } from "react";
import PropTypes from "prop-types";

const Charts = ({ data }) => {

	if (!data) return null;
	console.log(data);

	return (
		<div className="charts-container">{data.keyData.caloriesCount}</div>   
	);
};

Charts.propTypes = {
	data: PropTypes.oneOfType([PropTypes.object, PropTypes.bool])
};

export default Charts;