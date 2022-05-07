import { React, useEffect } from "react";
import PropTypes from "prop-types";
import * as d3 from "d3";
import "./BarChart.css";

const BarChart = ({ payload }) => {

	//#:Create bar Chart object
	const parent = d3.select("#chart-bar");
	const yScale = d3.scaleLinear();
	const xScale = d3.scaleLinear();


	useEffect(() => {
		parent.selectAll("*").remove();

		yScale.domain([d3.min(payload, d => d.calories), d3.max(payload, d => d.calories)]);
		yScale.range([5, 50]);

		const ykScale = d3.scaleLinear()
			.domain([d3.min(payload, d => d.kilogram), d3.max(payload, d => d.kilogram)])
			.range([5, 50]);

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
			.attr("x", (d, i) => `${(xScale(i) + (100 / payload.length) / 2)}`)
			.attr("y", d => `${100 - yScale(d.calories)}`)
			.attr("width", `${(100 / payload.length)/2}`)
			.attr("height", (d) => yScale(d.calories))
			.attr("class", "clr-primary")
			.text(d => `${d.calories}`)
			.exit()
			.data(payload)
			.enter()
			.append("rect")
			.attr("x", (d, i) => `${xScale(i)}`)
			.attr("y", d => `${100 - ykScale(d.kilogram)}`)
			.attr("width", `${(100 / payload.length)/2}`)
			.attr("height", (d) => ykScale(d.kilogram))
			.attr("fill", "black")
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