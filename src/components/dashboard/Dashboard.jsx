import { 
	React,
} from "react";

import PropTypes from "prop-types";
import "./Dashboard.css";
import Charts from "../charts/Charts";
import useFetch from "../../js/useFetch";

const Dashboard = ({ id }) => {

	const { loading, data, error } = useFetch(`${id}`);

	return (
		<>
			<div className="dashboard-container">
				<div className="dashboard-header">
					{data && <h1>Welcome <span>{data.userInfos.firstName}</span></h1>}
					{error && <h1>Error user not Found</h1>}
					{loading && <h1>Loading...</h1>}
					<p>{"Future subtext"}</p>
				</div>
				<Charts id={id} />
			</div>
		</>
	);

};

Dashboard.propTypes = {
	id: PropTypes.number.isRequired
};

export default Dashboard;