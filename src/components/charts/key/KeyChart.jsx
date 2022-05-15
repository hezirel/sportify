import { React } from "react";

import PropTypes from "prop-types";

import useFetch from "../../../js/useFetch";

import {
	renderList,
	renderKey
} from "./utils";

import Loader from "../Loader";
import "./KeyChart.css";


const KeyChart = ({ id }) => {

	const { data, loading, error} = useFetch(`${id}`);

	return (
		<>
			{(loading || error )&& <Loader ld={loading} err={error}/>}

			{data &&
					<>
						{renderList(renderKey(data.keyData))}
					</>
			}
		</>
	);

};

KeyChart.propTypes = {
	id: PropTypes.number.isRequired
};

export default KeyChart;