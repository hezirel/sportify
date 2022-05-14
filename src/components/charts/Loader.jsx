import { React } from "react";
import PropTypes from "prop-types";

const Loader = ({ ld, err }) => {
	return (
		<div className="loader">
			{ld && <div className="loaderLoad">Retrieving data, please wait ...</div>}
			{err && <div className="loaderErr">{err}</div>}
		</div>
	);
};

Loader.propTypes = {
	ld: PropTypes.bool,
	err: PropTypes.string
};

export default Loader;