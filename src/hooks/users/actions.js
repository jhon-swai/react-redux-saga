import { GET_USERS, GET_USERS_FAILED, GET_USERS_SUCCESS } from './actionTypes';

export const getUsers = () => ({
  type: GET_USERS,
});

export const getUsersSuccess = (users) => ({
  type: GET_USERS_SUCCESS,
  payload: users,
});

export const getUsersFailed = (error) => ({
  type: GET_USERS_FAILED,
  payload: error,
});
