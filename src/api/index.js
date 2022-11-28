import axios from "axios";

const URL = "https://web-production-d810.up.railway.app/api/article"

export const getArticleById = async ({ queryKey }) => {
	const [articleId] = queryKey;
	let data = await axios.get(`${URL}/id?id=${articleId}`);
	return data.data;
}

export const getArticles = async ({ queryKey }) => {
	let data = await axios.get(`${URL}/all`);
	return data;
}
