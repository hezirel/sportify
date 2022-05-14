import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const URL = "http://192.168.0.51:3000/user/";

const useFetch = (options) => { 

	const [data, setData] = useState();
	const [error, setError] = useState(false);
	const [loading, setLoading] = useState(true);

	useEffect(() => {

		fetch(`${URL}${options}`)
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
