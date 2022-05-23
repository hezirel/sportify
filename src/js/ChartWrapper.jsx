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
 * @param {string} {id} - The id of the user to fetch data for
 */
const ChartWrapper = ({ uri, Display, id }) => {

	const { data, loading, error} = useFetch({options: uri, id});

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
	id: PropTypes.number,
	uri: PropTypes.string.isRequired,
	Display: PropTypes.func.isRequired
};

export default ChartWrapper;
