import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { addTask } from "../redux/taskReducer/action";

export const AddTaskForm = ({ closeModal }) => {
  const [formData, setFormData] = useState({
    title: "",

    Description: "",
  });
  // console.log(formData, "Added");
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(addTask(formData, token));
    closeModal();
  }

  return (
    <form class="p-8 w-96">
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2">
          Task Title
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="Task Title"
          onChange={(e) =>
            setFormData((prev) => {
              return { ...prev, title: e.target.value };
            })
          }
        />
      </div>
      <div class="mb-6">
        <label class="block text-gray-700 text-sm font-bold mb-2">
          Description
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          id="password"
          type="text-area"
          placeholder="Add a description..."
          onChange={(e) =>
            setFormData((prev) => {
              return { ...prev, Description: e.target.value };
            })
          }
        />
        <p class="text-red-500 text-xs italic">Please add a description.</p>
      </div>

      <button class="btn" type="submit" onClick={handleSubmit}>
        Add Task
      </button>
    </form>
  );
};
