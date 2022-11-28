import axios from "axios";

const URL = "https://web-production-6e32.up.railway.app"

export const getArticleById = async ({ queryKey }) => {
	const [articleId] = queryKey;
	let data = await axios.get(`${URL}/id?id=${articleId}`);
	return data.data;
}

export const getArticles = async ({ queryKey }) => {
	let data = await axios.get(`${URL}/all`);
	return data;
}
