import { React, useEffect } from "react";
import PropTypes from "prop-types";
import * as d3 from "d3";
import "./BarChart.css";

const BarChart = ({ payload }) => {

	//#:Create bar Chart object
	const parent = d3.select("#chart-bar");
	/* 	const yScale = d3.scaleLinear();
	const xScale = d3.scaleLinear(); */


	useEffect(() => {
		parent.selectAll("*").remove();

		const yScale = d3.scaleLinear();
		yScale.domain([d3.min(payload, d => d.calories), d3.max(payload, d => d.calories)]);
		yScale.range([5, 50]);
	
		/* 		const ykScale = d3.scaleLinear()
			.domain([d3.min(payload, d => d.kilogram), d3.max(payload, d => d.kilogram)])
			.range([5, 50]); */
	
		const xScale = d3.scaleLinear();
		xScale.domain([0, payload.length]);
		xScale.range([5, 295]);
	
		const canvas = parent.append("svg")
			.attr("viewBox", "0, 0, 300, 100")
			.attr("preserveAspectRatio", "xMidYMid meet")
			.style("background-color", "grey")
			.style("border", "2px solid red");
	
		const parse = d3.timeParse("%Y-%B-%d");
	
		const cScale = d3.scaleLinear()
			.domain([d3.min(payload, d => parse(d.day)), (d3.max(payload, d => parse(d.day)) + 1)])
			.range([5, 295]);
	
		const w = 290 / (payload.length - 1);
		canvas.selectAll(".day")
			.selectAll("rect")
			.data(payload)
			.join((enter) => {
	
				enter.append("rect")
					.attr("class", "day")
					.attr("height", "50")
					.attr("y", 50)
					.attr("x", (d, i) => `${cScale(i+1)}`)
					.attr("width", (w*0.9));
	
			});
	
	}, [payload]);

	return (
		<></>
	);

};

BarChart.propTypes = {
	payload: PropTypes.array.isRequired
};

export default BarChart;