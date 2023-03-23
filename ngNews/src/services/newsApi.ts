import axios, { AxiosResponse } from "axios";
import { News } from "../types/newsTypes";

const API_KEY = import.meta.env.VITE_APP_API_URL;

interface NewsApiResponse {
  articles: News[];
}

export const getNews = async (country: string): Promise<News[]> => {
  const url = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${API_KEY}`;
  const response: AxiosResponse<NewsApiResponse> = await axios.get(url);

  return response.data.articles;
};
