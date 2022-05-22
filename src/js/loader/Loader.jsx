import { 
	React
} from "react";

import PropTypes from "prop-types";

import "./Loader.css";

/**
 * Loader / error component
 * Display loading state spinner or error message
 * @component
 * @type {React.FunctionComponent}
 * @param  {boolean} ld - The loading state of the component
 * @param  {(boolean | string)} err - The error state of the component and the text if any
 * @returns {React.ReactElement}
 */
const Loader = ({ ld, err }) => {
	return (
		<>
			{ld && <div className="lds-ripple"><div></div><div></div><div></div><div></div></div>}
			{err && <div className="loaderErr">{err}</div>}
		</>
	);
};

Loader.propTypes = {
	ld: PropTypes.bool.isRequired,
	err: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]).isRequired
};

export default Loader;