import React, { useEffect, useState } from "react";
import { BrokenCirclesLoader, GooeyCircleLoader } from "react-loaders-kit";

import { useDispatch, useSelector } from "react-redux";

import { Modal } from "./Modal";
import { Edit } from "./Edit";
import { deleteTaskFunc, getTask } from "../redux/taskReducer/action";

export const DashBoardTable = () => {
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editTask, setEditTask] = useState("");
  const { isLoading, isError, Tasks } = useSelector(
    (store) => store.taskReducer
  );
  console.log(token, "dash aa");
  console.log(Tasks, "All Task");

  const OpenModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const loaderProps = {
    loading: true,
    size: 150,
    duration: 2,
    colors: ["#0f76de", "#020f2e", "#042549"],
  };

  useEffect(() => {
    dispatch(getTask(token));
  }, []);

  //Edit function to Modal
  const EditHandler = (editTask) => {
    // e.preventDefault();
    setEditTask(() => editTask);
    OpenModal();
  };

  //Delete Function
  function handleDeleteTask(id) {
    console.log(id, "task id");
    dispatch(deleteTaskFunc(id, token));
  }

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen ">
        {/* <GooeyCircleLoader {...loaderProps} /> */}
        <BrokenCirclesLoader {...loaderProps} />
      </div>
    );
  }
  if (isError) {
    return <div>Error...</div>;
  }
  return (
    <div className=" bg-white shadow-lg rounded-lg p-8">
      <table className="w-full text-left">
        <thead className="bg-gray-200 rounded-top-2 rounded-left-2">
          <tr>
            <th className="p-4 px-6 text-gray-500">Task Title</th>

            <th className="p-4 px-6 text-gray-500">Task Description</th>
            <th className="p-4 px-6 text-gray-500">Actions</th>
          </tr>
        </thead>
        <tbody className="">
          {/* Show the Row here  */}
          {Tasks.length > 0 &&
            Tasks.map((el) => {
              return (
                <tr key={el.id} style={{ borderBottom: "1px solid #3333" }}>
                  <td className="p-4 px-6 text-gray-800 flex items-center gap-4 ">
                    {el?.title}
                  </td>

                  <td className="p-4 px-6 text-gray-800">{el?.Description}</td>

                  <td className="flex gap-2 item-center justify-around p-4 px-6 text-gray-800 cursor-pointer">
                    <img
                      src="edit-3.svg"
                      alt=""
                      onClick={(e) => EditHandler(el)}
                    />
                    <img
                      src="trash-2.svg"
                      alt=""
                      className="cursor-pointer"
                      onClick={() => handleDeleteTask(el._id)}
                    />
                    <img src="more-horizontal.svg" alt="LG" />
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <Edit closeModal={closeModal} editTask={editTask} />
      </Modal>
    </div>
  );
};
