import { React, useState, useEffect} from "react";
import PropTypes from "prop-types";
import "./Dashboard.css";
import Charts from "../charts/Charts";

const Dashboard = ({ id }) => {

	const [data, setData] = useState(false);

	useEffect(() => {
		fetch(`http://192.168.0.52:3000/user/${id}`)
			.then(res => res.json())
			.then(({ data }) => setData(data), err => console.error(err));
	}), [id];

	return (
		<div className="dashboard-container">
			<h1>Bonjour <span>{data?.userInfos?.firstName || "Erreur"}</span></h1>
			<p>{"Future subtext"}</p>
			<Charts data={data} />
		</div>
	);

};

Dashboard.propTypes = {
	id: PropTypes.number.isRequired
};

export default Dashboard;