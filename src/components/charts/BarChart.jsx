import { React, useEffect } from "react";
import PropTypes from "prop-types";
import * as d3 from "d3";

const BarChart = ({ payload }) => {

	const parent = d3.select("#chart-bar");
	const yScale = d3.scaleLinear();
	const xScale = d3.scaleLinear();


	useEffect(() => {
		parent.selectAll("*").remove();

		yScale.domain([d3.min(payload, d => d.calories), d3.max(payload, d => d.calories)]);
		yScale.range([39, 1]);

		xScale.domain([0, payload.length]);
		xScale.range([5, 295]);

		parent.append("svg")
			.attr("viewBox", "0, 0, 300, 100")
			.attr("preserveAspectRatio", "xMidYMid meet")
			.style("background-color", "grey")
			.style("border", "2px solid red");
		
		parent.select("svg").selectAll("rect")
			.data(payload)
			.enter()
			.append("rect")
			.attr("x", (d, i) => `${xScale(i)}`)
			.attr("y", "39")
			.attr("width", `${(100 / payload.length) - 3}px`)
			.attr("height", (d) => yScale(d.calories) + "px")
			.style("fill", "blue")
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