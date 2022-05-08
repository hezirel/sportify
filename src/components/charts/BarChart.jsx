import { React, useEffect } from "react";
import PropTypes from "prop-types";
import "./BarChart.css";
import * as d3 from "https://cdn.skypack.dev/d3@7";	

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
	
		parent.append("svg")
			.attr("viewBox", "0, 0, 300, 100")
			.attr("preserveAspectRatio", "xMidYMid meet")
			.style("background-color", "grey")
			.style("border", "2px solid red")
			.attr("id", "canvas");
	
		const parse = (d) => new Date(d).getDate();
	
		const cScale = d3.scaleLinear()
			.domain([d3.min(payload, d => parse(d.day)), (d3.max(payload, d => parse(d.day)) + 1)])
			.range([5, 295]);
	
		const w = 290/payload.length;
		w ? true : false;
		console.log(payload);

		console.log(d3.max(payload, d => parse(d.day)));

		//const canvas = d3.select("#canvas");
		d3.select("svg").selectAll("rect")
			.data(payload)
			.enter()
			.append("rect")
			.attr("x", (d, i) => cScale(i))
			.attr("y", d => 100 - yScale(d.calories))
			.attr("width", "5px")
			.attr("height", "30px")
			.style("fill", "blue");
	}, [payload])	;

	return (
		<></>
	);

};

BarChart.propTypes = {
	payload: PropTypes.array.isRequired
};

export default BarChart;