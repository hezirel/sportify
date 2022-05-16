import { React } from "react";
import PropTypes from "prop-types";

import "./Loader.css";

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