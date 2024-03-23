import axios from "axios";
import {
  POST_CREATEUSER_ERROR,
  POST_CREATEUSER_LOADING,
  POST_CREATEUSER_SUCCESS,
  POST_LOGIN_LOADING,
} from "./actionType";

export const createUser = (newUser, navigate) => async (dispatch) => {
  dispatch({ type: POST_CREATEUSER_LOADING });
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_API_URL}/api/register`,
      newUser,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    // Handle the server response here
    console.log(response);
    dispatch({ type: POST_CREATEUSER_SUCCESS });
    alert("SignUp successfull");
    navigate("/login");
  } catch (error) {
    // console.log(error);
    dispatch({ type: POST_CREATEUSER_ERROR });
    alert("some thing wrong");
  }
};

export const loginUser = (userObj, navigate) => (dispatch) => {
  return dispatch({ type: POST_LOGIN_LOADING });
};
