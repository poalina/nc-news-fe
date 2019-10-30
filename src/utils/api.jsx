import axios from "axios";
const baseURL = "https://nc-new-app.herokuapp.com/api";

export const getAllArticles = async (topic, username, sort_by) => {
  return await axios
    .get(`${baseURL}/articles`, {
      params: { topic, author: username, sort_by: sort_by }
    })
    .then(({ data }) => {
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

export const getCommentsByArticleId = async article_id => {
  return await axios
    .get(`${baseURL}/articles/${article_id}/comments`)
    .then(({ data }) => {
      return data;
    });
};

export const getAllTopics = async () => {
  return await axios.get(`${baseURL}/topics`).then(({ data }) => {
    return data;
  });
};

export const getAllUsers = async () => {
  return await axios.get(`${baseURL}/users`).then(({ data }) => {
    return data;
  });
};

export const postCommentByArticleId = async (article_id, comment) => {
  return await axios
    .post(`${baseURL}/articles/${article_id}/comments`, comment)
    .then(({ data }) => {
      return data;
    });
};

export const deleteCommentById = async comment_id => {
  return await axios.delete(`${baseURL}/comments/${comment_id}`);
};
