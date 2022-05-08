import { React, useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./Dashboard.css";
import Charts from "../charts/Charts";
import fetchData from "../../js/fetchHandler";

const Dashboard = ({ id }) => {

	const [name, setName] = useState("");
	name ? true : false;

	useEffect(() => {
		fetchData(id).then(data => setName(data.data.userInfos.firstName));
	}, []);

	return (
		<Charts id={id} />
	);

};

Dashboard.propTypes = {
	id: PropTypes.number
};

export default Dashboard;

{/* 		<div className="dashboard-container">
			<div className="dashboard-header">
				<h1>Bonjour <span>{name}</span></h1>
				<p>{"Future subtext"}</p>
			</div>
		</div> */}