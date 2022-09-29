import { GET_USERS, GET_USERS_SUCCESS, GET_USERS_FAILED } from './actionTypes';

const initialState = {
  loading: false,
  data: [],
  error: '',
};

// eslint-disable-next-line default-param-last
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return { ...state, loading: true };
    case GET_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: '',
      };
    case GET_USERS_FAILED:
      return {
        ...state,
        loading: false,
        data: [],
        error: action.payload,
      };
    default:
      return {
        ...state,
        loading: false,
        data: [],
        error: 'default',
      };
  }
};

export default userReducer;
