import { createContext, useState } from "react";
// import { GET_USERS, GET_USER } from "../services/api";
import ApiService from "../services/api";
const GlobalContext = createContext(0);

const GithubContext = ({ children }) => {
  const [usersRequest, setUsersRequest] = useState(null);
  const [userRequest, setUserRequest] = useState(null);
  const [repositorty, setRepository] = useState(null);
  const [load, setLoad] = useState(false);
  const [error, setErro] = useState(false);

  const api = new ApiService();

  async function get_users(user) {
    setLoad(true);
    try {
      const { items } = await api.GET_USERS(user);
      setUsersRequest(items);
      setLoad(false);
    } catch (error) {
      setErro(true);
      setLoad(false);
    }
  }

  async function get_one_user(user) {
    setLoad(true);
    setErro(false);
    try {
      const items = await api.GET_USER(user);
      setUserRequest(items);
      setLoad(false);
    } catch (error) {
      setErro(true);
      setLoad(false);
    }
  }

  async function get_repository_user(user) {
    setLoad(true);
    setErro(false);
    try {
      const repo = await api.GET_REPOS(user);
      setRepository(repo);
      setLoad(false);
    } catch (error) {
      setErro(true);
      setLoad(false);
    }
  }

  function clearData() {
    setUserRequest(null);
    setUsersRequest(null);
    setRepository(null);
    setLoad(false);
  }

  return (
    <GlobalContext.Provider
      value={{
        get_users,
        get_one_user,
        clearData,
        get_repository_user,
        usersRequest,
        userRequest,
        load,
        error,
        repositorty,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, GithubContext };
