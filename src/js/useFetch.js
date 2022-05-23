import { 
	useEffect,
	useState
} from "react";

import PropTypes from "prop-types";

import API_URL from "./env";

import {
	USER_ACTIVITY,
	USER_MAIN_DATA,
	USER_AVERAGE_SESSIONS,
	USER_PERFORMANCE
} from "./mock";

const search = new URLSearchParams(window.location.search);
const mock = search.has("mock");


/**
 * Fetch service for useFetch hook
 * @function
 * @param  {string} options - The endpoint of the API to fetch
 * @return {boolean, object, ?string} - The status of the fetch, the data fetched, or the error status text if any
 */
const useFetch = ({options, id}) => { 

	//€:Match param /?source=mock || api
	const [data, setData] = useState();
	const [error, setError] = useState(false);
	const [loading, setLoading] = useState(true);

	useEffect(() => {

		if (!mock) {
			fetch(`${API_URL}/user/${options}`)
				.then(async res => {
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
		} else {

			let match = options.match(/\b([a-z/-]+)\b/gi) || "/";

			let res = {
				"/": USER_MAIN_DATA.find(item => item.id === id),
				"/activity": USER_ACTIVITY.find(item => item.userId === id),
				"/performance": USER_PERFORMANCE.find(item => item.userId === id),
				"/average-sessions": USER_AVERAGE_SESSIONS.find(item => item.userId === id)
			}[match];

			setData(res);
			setLoading(false);

		}

	}, [options]);

	return { loading, data, error};
};

useFetch.propTypes = {
	options: PropTypes.string.isRequired,
	id: PropTypes.number
};

export default useFetch;
