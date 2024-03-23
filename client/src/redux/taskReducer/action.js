import axios from "axios";
import {
  DELETELOADING,
  DELETEFAIL,
  DELETESUCESS,
  ADDLOADING,
  ADDSUCESS,
  ADDFAIL,
  EDITLOADING,
  EDITSUCESS,
  EDITFAIL,
  TASKLOADING,
  TASKSUCESS,
  TASKFAIL,
} from "./actionType";

export const getTask = (token) => async (dispatch) => {
  try {
    dispatch({ type: TASKLOADING });
    let res = await axios.get(`${process.env.REACT_APP_API_URL}/api/task`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch({ type: TASKSUCESS, payload: res.data.Tasks });
  } catch (error) {
    console.log(error);
    dispatch({ type: TASKFAIL });
  }
};

//Delete Task

export const deleteTaskFunc = (id, token) => async (dispatch) => {
  try {
    dispatch({ type: DELETELOADING });
    let res = await axios.delete(
      `${process.env.REACT_APP_API_URL}/api/task/${id}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    dispatch({ type: DELETESUCESS, payload: id });
  } catch (err) {
    console.log(err);
    dispatch({ type: DELETEFAIL });
  }
};

//add Task
export const addTask = (formData, token) => async (dispatch) => {
  try {
    dispatch({ type: ADDLOADING });
    let res = await axios.post(
      `${process.env.REACT_APP_API_URL}/api/task`,
      formData,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch({ type: ADDSUCESS, payload: res.data.Tasks });
  } catch (error) {
    console.log(error);
    dispatch({ type: ADDFAIL });
  }
};

//edit Task
export const EditTaskFunc =
  (id, formData, closeModal, token) => async (dispatch) => {
    try {
      dispatch({ type: EDITLOADING });
      let res = await axios.patch(
        `${process.env.REACT_APP_API_URL}/api/task/${id}`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      dispatch({ type: EDITSUCESS, payload: res.data.singleTask });
      closeModal();
    } catch (error) {
      console.log(error);
      dispatch({ type: EDITFAIL });
      closeModal();
    }
  };
