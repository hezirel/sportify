import { 
	React, 
} from "react";

import PropTypes from "prop-types";

import "./BarChart.css";

import { 
	BarChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer
} from "recharts";


/**
 * Bar chart component
 * Transform api Data to display them in chart
 * @param  {object} {data} - Data received from API
 * @returns {React.ReactElement}
 */
const BChart = ({ data }) => {

	const parseDay = (day) => new Date(day).getDate();

	return (
		<>
			<div className="barChartHeader">
				<h3>Daily Activity</h3>
				<div className="barChartLegend">
					<span>
						<span className="dot"></span>
						{"Poids (kg)"}
					</span>
					<span>
						<span className="dotRed"></span>
						{"Calories brulées (kCal)"}
					</span>
				</div>
			</div>
			<ResponsiveContainer
			>
				<BarChart data={

					data.sessions.map((item) => 
						({
							day: parseDay(item.day),
							kg: item.kilogram,
							cal: item.calories
						}))}
				barGap={8}
				barCategoryGap="30%"
				style={{ 
					display: "flex",
					justifyItems: "end",
					alignItems: "bottom",

				}}
				>
					<CartesianGrid
						strokeDasharray="2"
						vertical={false}

					/>
					<XAxis
						dataKey="day"
						tickLine={false}
						axisLine={false}
					/>
					<YAxis dataKey="kg"
						orientation="right"
						domain={["dataMin", "dataMax"]}
						tickCount={4}
						axisLine={false}

					/>
					<YAxis dataKey="cal"
						orientation="left"
						yAxisId="calAxis"
						domain={[0, "auto"]} 
						hide={true}
					/>

					<Bar dataKey="kg"
						radius={[30, 30, 0, 0]}
						fill="black"
						minPointSize={15}
					/>
					<Bar dataKey="cal"
						fill="var(--clr-primary)"
						yAxisId="calAxis"
						radius={[30, 30, 0, 0]}
						minPointSize={15}
					/>
					<Tooltip
						cursor={{
							fill: "grey",
							fillOpacity: 0.4,
						}}
						content={({ payload, active }) => {
							if (active && payload ) {
								return (
									<div style={{
										background: "var(--clr-primary)",
										padding: "0.8rem 0.3rem 0.8rem 0.3rem",
										display: "flex",
										justifyContent: "space-evenly",
										alignItems: "center",
										flexDirection: "column",
										gap: "1.3rem",
										fontSize: "0.8em",
									
									}}>
										<p style={{
											margin: 0,
											padding: 0,
											fontWeight: "bolder",
											color: "white",
											paddingLeft: "0.4rem",
											paddingRight: "0.4rem",
											paddingTop: "0.6rem",
										}}>{`${payload[0].value}`}kg</p>
										<p style={{
											margin: 0,
											padding: 0,
											fontWeight: "bolder",
											color: "white",
											paddingLeft: "0.4rem",
											paddingRight: "0.4rem",
											paddingBottom: "0.6rem",
										}}>{`${payload[1].value}`}Kcal</p>
									</div>
								);
							}
						}}
					/>
				</BarChart>
			</ResponsiveContainer>
		</>
	);

};

BChart.propTypes = {
	data: PropTypes.object.isRequired
};

export default BChart;