import { React, useState, useEffect} from "react";
import PropTypes from "prop-types";
import "./Dashboard.css";
import Charts from "../charts/Charts";

const Dashboard = ({ id }) => {

	const [data, setData] = useState(false);

	useEffect(() => {
		if (!data) {
			fetch(`http://192.168.0.52:3000/user/${id}`)
				.then(res => res.json())
				.then(({ data }) => setData(data), err => console.error(err));
		}
	}), [data];

	return (
		<div className="dashboard-container">
			<div className="dashboard-header">
				<h1>Bonjour <span>{data?.userInfos?.firstName || "Chargement"}</span></h1>
				<p>{"Future subtext"}</p>
			</div>
			<Charts id={id} />
		</div>
	);

};

Dashboard.propTypes = {
	id: PropTypes.number
};

export default Dashboard;