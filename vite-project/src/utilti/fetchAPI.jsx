import axios from "axios";
const BASE_URL = "https://youtube-v31.p.rapidapi.com";
const options = {
  url: BASE_URL,
  params: { part: "snippet", videoId: "M7FIvfx5J10", maxResults: "50" },
  headers: {
    "X-RapidAPI-Key": "fb6ce27e69mshc5453ac9d7c86cap12f9edjsndaa0c1fe9973",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};
