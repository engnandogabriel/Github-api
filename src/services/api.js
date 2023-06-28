import axios from "axios";
const URL_All_USERS = "https://api.github.com/search/users?q=";
const URL_REPOS = "https://api.github.com/users/";
// const TOKEN = "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";

export default class GithubService {
  GET_USERS = async (user) => {
    const request = await axios.get(
      `${URL_All_USERS}${user}&client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_TOKEN}`
    );
    return request.data;
  };

  GET_USER = async (user) => {
    const { data } = await axios.get(
      `https://api.github.com/users/${user}?client_id=
      ${process.env.CLIENT_ID}&client_secret=
      ${process.env.CLIENT_TOKEN}`
    );
    return data;
  };

  GET_REPOS = async (user) => {
    const request = await axios.get(
      `${URL_REPOS}${user}/repos?&client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_TOKEN}`
    );
    return request.data;
  };
}
