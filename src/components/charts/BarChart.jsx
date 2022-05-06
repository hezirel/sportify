import { React, useEffect, useState } from "react";
import PropTypes from "prop-types";
import * as d3 from "d3";

const BarChart = ({ id }) => {

	const [cache, setCache] = useState([]);

	const svg = d3.select("#chart-bar");

	svg.append("svg")
		.attr("width", "300px")
		.attr("height", "200px")
		.attr("id", "chart-bar-svg")
		.style("background-color", "red");


	useEffect(() => {
		if (id) {
			fetch(`http://192.168.0.52:3000/user/${id}/activity`)
				.then(res => res.json())
				.then(({ data }) => setCache(data.sessions), err => console.error(err));

		}}, []);

	useEffect(() => {

		d3.select("#chart-bar-svg").selectAll("rect")
			.data(cache)
			.enter()
			.append("rect")
			.attr("x", (d, i) => (i * 20))
			.attr("y", (d) => (200-d.kilogram))
			.attr("width", "5px")
			.attr("height", "30px")
			.style("fill", "blue");
	}, [cache]);

	return (
		<></>
	);

};

BarChart.propTypes = {
	id: PropTypes.number
};

export default BarChart;