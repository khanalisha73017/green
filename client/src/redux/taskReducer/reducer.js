import {
  DELETEFAIL,
  DELETELOADING,
  DELETESUCESS,
  ADDFAIL,
  ADDLOADING,
  ADDSUCESS,
  EDITLOADING,
  EDITFAIL,
  EDITSUCESS,
  TASKLOADING,
  TASKFAIL,
  TASKSUCESS,
} from "./actionType";

const initState = {
  isLoading: false,
  isError: false,
  Tasks: [],
};

export const reducer = (state = initState, action) => {
  switch (action.type) {
    case TASKLOADING:
      return { ...state, isLoading: true, isError: false };
    case TASKSUCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        Tasks: action.payload,
      };

    case TASKFAIL:
      return { ...state, isLoading: false, isError: true };

    case DELETELOADING:
      return { ...state, isLoading: true, isError: false };
    case DELETEFAIL:
      return { ...state, isLoading: false, isError: true };
    case DELETESUCESS:
      let TaskAfterDelete = [...state.Tasks].filter(
        (el) => el._id !== action.payload
      );
      return {
        ...state,
        isLoading: false,
        isError: false,
        Tasks: TaskAfterDelete,
      };
    case ADDLOADING:
      return { ...state, isLoading: true, isError: false };
    case ADDFAIL:
      return { ...state, isLoading: false, isError: true };
    case ADDSUCESS:
      let TaskAfterAdding = [...state.Tasks, action.payload]; //newly added Task
      return {
        ...state,
        isLoading: false,
        isError: false,
        Tasks: TaskAfterAdding,
      };

    case EDITLOADING:
      return { ...state, isLoading: true, isError: false };
    case EDITFAIL:
      return { ...state, isLoading: false, isError: true };
    case EDITSUCESS:
      let EditTask = [...state.Tasks].map((el) => {
        if (el._id === action.payload._id) {
          return action.payload;
        }
        return el;
      });
      return {
        ...state,
        isLoading: false,
        isError: false,
        Tasks: EditTask,
      };

    default:
      return { ...state };
  }
};
