import React, {useReducer} from "react";
import {GithubContext} from "./githubContext";
import {githubReducer} from "./githubReducer";
import {CLEAR_USERS, GET_REPOS, GET_USER, SEARCH_USERS, SET_LOADING} from "../types";

export const GithubState = ({children}) => {
  const initialState = {
    user: {},
    users: [],
    loading: false,
    repos: []
  }
  const [state, dispatch] = useReducer(githubReducer, initialState);

  const search = async (value) => {
    setLoading();
    // запрос на сервер

    dispatch({
      type: SEARCH_USERS,
      payload: []
    });
  };

  const getUser = async (name) => {
    setLoading();
    // запрос на сервер

    dispatch({
      type: GET_USER,
      payload: {}
    });
  }

  const getRepos = async (name) => {
    setLoading();
    // запрос на сервер

    dispatch({
      type: GET_REPOS,
      payload: []
    });
  }

  const clearUsers = async () => {
    // запрос на сервер

    dispatch({
      type: CLEAR_USERS
    });
  }

  const setLoading = async () => {
    // запрос на сервер

    dispatch({
      type: SET_LOADING
    });
  }

  const {user, users, repos, loading} = state;

  return (
    <GithubContext.Provider value={{
      search,
      getUser,
      getRepos,
      clearUsers,
      setLoading,
      user,
      users,
      repos,
      loading
    }}>
      {children}
    </GithubContext.Provider>
  );
};
