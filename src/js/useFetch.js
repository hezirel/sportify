import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import API_URL from "./env";

const useFetch = (options) => { 

	const [data, setData] = useState();
	const [error, setError] = useState(false);
	const [loading, setLoading] = useState(true);

	useEffect(() => {

		fetch(`${API_URL}/user/${options}`)
			.then(async res => {
				//#:Refactor status check with different err throw methods
				if(!res.ok) {
					setError(res.statusText);
					setLoading(false);
				} else {
					res.json().then(data => setData(data.data))
						.then(() => setLoading(false));
				}
			})
			.catch(err => {
				setError(err);
				setLoading(false);
			});

	}, [options]);

	return { loading, data, error};
};

useFetch.propTypes = {
	options: PropTypes.string.isRequired
};

export default useFetch;
