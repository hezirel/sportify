import { React, useState, useEffect} from "react";
import PropTypes from "prop-types";
import "./Dashboard.css";

const Dashboard = ({ id }) => {

	const [data, setData] = useState(false);

	useEffect(() => {
		fetch(`http://192.168.0.52:3000/user/${id}`)
			.then(res => res.json())
			.then(({ data }) => setData(data), err => console.error(err));
	}), [id];

	return (
		<div className="dashboard-container">
			<span className="name-container">
                Bonjour <h1>{data?.userInfos?.firstName || "Default"}</h1>
			</span>
		</div>
	);

};

Dashboard.propTypes = {
	id: PropTypes.number.isRequired
};

export default Dashboard;