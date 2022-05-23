import { 
	React,
} from "react";

import PropTypes from "prop-types";

import "./Dashboard.css";

import Charts from "../charts/Charts";
import useFetch from "../../js/useFetch";

/**
 * Handle Error and Loading states for name display
 * Pass id down to Charts for each chart to fetch data separately
 * 
 * @component
 * @type {React.FunctionComponent}
 * @param  {number} id - The id of the user for which to retrieve data
 * @returns {React.ReactElement}
 */
const Dashboard = ({ id }) => {

	const { data, loading, error} = useFetch({options: `${id}`, id});

	return (
		<>
			<div className="dashboard-container">
				<div className="dashboard-header">
					{loading && <h1>Loading user data ...</h1>}
					{error && <h1>Error while loading user data ...</h1>}
					{data && 
						<>
							<h1>Welcome
								<span>
									{data.userInfos.firstName}
								</span>
							</h1>
							<p>{"Future subtext"}</p>
						</>
					}
				</div>
				{<Charts id={id} />}
			</div>
		</>
	);

};

Dashboard.propTypes = {
	/**
	 * User's ID
	 */
	id: PropTypes.number.isRequired
};

export default Dashboard;