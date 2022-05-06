import { React, useEffect } from "react";
import PropTypes from "prop-types";
import * as d3 from "d3";

const BarChart = ({ payload }) => {

	const svg = d3.select("#chart-bar");
	const yScale = d3.scaleLinear();
	const xScale = d3.scaleLinear();


	useEffect(() => {
		svg.selectAll("*").remove();

		yScale.domain([d3.min(payload, d => d.calories), d3.max(payload, d => d.calories)]);

		yScale.range([200, 0]);

		xScale.domain([0, payload.length]);
		xScale.range([0, 300]);

		svg.append("svg")
			.attr("width", "100%")
			.attr("height", "100%")
			.attr("id", "chart-bar-svg")
			.style("background-color", "grey");
		
		d3.select("svg").selectAll("rect")
			.data(payload)
			.enter()
			.append("rect")
			.attr("x", (d, i) => xScale(i))
			.attr("y", "200")
			.attr("width", "20px")
			.attr("height", (d) => yScale(d.calories) + "px")
			.style("fill", "blue")
			.append("text")
			.text(d => `${d.calories}`);
	}, [payload]);

	return (
		<></>
	);

};

BarChart.propTypes = {
	payload: PropTypes.array.isRequired
};

export default BarChart;