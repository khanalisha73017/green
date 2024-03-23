import {
  GET_LOGGEDUSER_SUCCESS,
  POST_CREATEUSER_ERROR,
  POST_CREATEUSER_LOADING,
  POST_CREATEUSER_SUCCESS,
  POST_LOGIN_ERROR,
  POST_LOGIN_LOADING,
  POST_LOGIN_SUCCESS,
} from "./actionType";

const initState = {
  isLoading: false,
  isError: false,
  isAuth: false,
  token: "",
  avatar: "",
  loggedInUser: "",
};

export const reducer = (state = initState, action) => {
  switch (action.type) {
    case POST_CREATEUSER_LOADING:
      return { ...state, isLoading: true, isError: false };
    case POST_CREATEUSER_SUCCESS:
      return {
        ...state,
      };

    case POST_CREATEUSER_ERROR:
      return { ...state, isLoading: false, isError: false };
    case POST_LOGIN_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case POST_LOGIN_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case POST_LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        loggedInUser: action.payload,
        avatar: action.payload.avatar,
        isAuth: true,
      };

    case GET_LOGGEDUSER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        loggedInUser: action.payload,
      };

    default:
      return { ...state };
  }
};
