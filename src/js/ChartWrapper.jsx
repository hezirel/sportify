import { 
	React, 
} from "react";

import PropTypes from "prop-types";

import useFetch from "./useFetch";
import Loader from "./loader/Loader";

const ChartWrapper = ({ uri, Display }) => {

	const { data, loading, error} = useFetch(`${uri}`);

	return (
		<>
			{(loading || error )&& <Loader ld={loading} err={error}/>}

			{data && (
				<Display data={data} />
			)}
		</>
	);

};

ChartWrapper.propTypes = {
	uri: PropTypes.string.isRequired,
	Display: PropTypes.func.isRequired
};

export default ChartWrapper;