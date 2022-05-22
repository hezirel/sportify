import { 
	React, 
} from "react";

import PropTypes from "prop-types";

import useFetch from "./useFetch";
import Loader from "./loader/Loader";
/**
 * Handle Error and Loading states for chart component passed as Display
 * Display loader while fetching data
 * Display error message if any
 * Display charts if data is ok
 * @component
 * @type {React.FunctionComponent}
 * @param  {string} {uri} - The uri of the API endpoint to fetch
 * @param  {React.Component} {Display} - The chart component used for displaying data
 */
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
