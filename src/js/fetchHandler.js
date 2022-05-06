const fetchData = async (options) => { 

	const url = "http://192.168.0.51:3000/user/";
	const response = await fetch(`${url}${options}`);
	const data = await response.json();
	return data;
};

export default fetchData;
