import axios from "axios";


axios.defaults.baseURL = "https://api.unsplash.com";
const accessKey = "RjIsPZVdJdHA7EIX1kcSuYMG_YljaeuXcwVRHctfYpI&query";

const itemsPerPage = 15;

const fetchArticlesWithTopic = async<T>(topic:string, pageNumber = 1):Promise<T> => {
  const response = await axios.get(`/search/photos/?query=${topic}`, {
    headers: {
      Authorization: `Client-ID ${accessKey}`,
    },
    params: {
      page: pageNumber,
      per_page: itemsPerPage,
    },
  });

  return response.data;
};

export default fetchArticlesWithTopic;
