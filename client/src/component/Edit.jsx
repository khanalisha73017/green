import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { EditTaskFunc } from "../redux/taskReducer/action";


export const Edit = ({ editTask, closeModal }) => {
  console.log(editTask, "product");
  const [formData, setFormData] = useState({
    title: editTask.title,
    Description: editTask.Description,
  });
  console.log(formData);
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData, editTask._id, token, "edit");
    dispatch(EditTaskFunc(editTask._id, formData, closeModal, token));
  };
  return (
    <div>
      <form class="p-8 w-96">
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2">
            Task Title
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Task Title"
            value={formData.title}
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
            value={formData.Description}
            onChange={(e) =>
              setFormData((prev) => {
                return { ...prev, Description: e.target.value };
              })
            }
          />
          <p class="text-red-500 text-xs italic">Please add a description.</p>
        </div>

        <button class="btn" type="submit" onClick={handleSubmit}>
          Edit Task
        </button>
      </form>
    </div>
  );
};
