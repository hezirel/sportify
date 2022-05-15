import { 
	React,
} from "react";

import PropTypes from "prop-types";
import "./Dashboard.css";
import "../../js/ChartWrapper";
import Charts from "../charts/Charts";

const Dashboard = ({ data }) => {

	return (
		<>
			<div className="dashboard-container">
				<div className="dashboard-header">
					{data && <h1>Welcome <span>{data.userInfos.firstName}</span></h1>}
					<p>{"Future subtext"}</p>
				</div>
				<Charts id={data.id} />
			</div>
		</>
	);

};

Dashboard.propTypes = {
	data: PropTypes.object.isRequired
};

export default Dashboard;