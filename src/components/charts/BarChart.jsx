import { React, useEffect } from "react";
import PropTypes from "prop-types";
import * as d3 from "d3";

const BarChart = ({ payload }) => {

	const svg = d3.select("#chart-bar");
	console.log(payload);

	useEffect(() => {
		svg.selectAll("*").remove();

		svg.append("svg")
			.attr("width", "300px")
			.attr("height", "200px")
			.attr("id", "chart-bar-svg")
			.style("background-color", "grey");
		
		d3.select("svg").selectAll("rect")
			.data(payload)
			.enter()
			.append("rect")
			.attr("x", (d, i) => (i * 20))
			.attr("y", (d) => (200-d.kilogram))
			.attr("width", "5px")
			.attr("height", "30px")
			.style("fill", "blue");
	}, []);

	return (
		<></>
	);

};

BarChart.propTypes = {
	payload: PropTypes.array.isRequired
};

export default BarChart;