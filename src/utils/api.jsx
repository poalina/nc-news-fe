import axios from "axios";
const baseURL = "https://nc-new-app.herokuapp.com/api";

export const getAllArticles = async () => {
  return await axios.get(`${baseURL}/articles`).then(({ data }) => {
    return data;
  });
};

export const getArticleById = async article_id => {
  return await axios
    .get(`${baseURL}/articles/${article_id}`)
    .then(({ data }) => {
      return data;
    });
};

export const getAllTopics = async () => {
  return await axios.get(`${baseURL}/topics`).then(({ data }) => {
    return data;
  });
};
