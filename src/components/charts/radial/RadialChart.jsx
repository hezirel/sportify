import { React } from "react";
import { 
	ResponsiveContainer,
} from "recharts";

import PropTypes from "prop-types";

import useFetch from "../../../js/useFetch";
import Loader from "../Loader";

const RadialChart = ({ id }) => {

	const { data, loading, error} = useFetch(`${id}`);

	return (
		<>
			{(loading || error )&& <Loader ld={loading} err={error}/>}

			{data &&
				<ResponsiveContainer width="100%" height="100%">
					<div>{data.todayScore}</div>
				</ResponsiveContainer>
			}
		</>
	);

};

RadialChart.propTypes = {
	id: PropTypes.number.isRequired
};

export default RadialChart;