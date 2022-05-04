import { React } from "react";
import PropTypes from "prop-types";

const Dashboard = ({ id }) => {

	return (
		<div className="dashboard-container"></div>
	);

};

Dashboard.propTypes = {
	id: PropTypes.number.isRequired
};

export default Dashboard;