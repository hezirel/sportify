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
			{err && <div className="loaderErr">
				<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
					<path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
				</svg>
				<span className="loaderErrText">Error: {err}</span>
			</div>}
		</>
	);
};

Loader.propTypes = {
	ld: PropTypes.bool.isRequired,
	err: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]).isRequired
};

export default Loader;