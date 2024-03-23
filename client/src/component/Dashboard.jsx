import React, { useState } from "react";
import { DashBoardTable } from "./DashBoardTable";
import Toolbar from "./Toolbar";
import { useSelector } from "react-redux";
import { Modal } from "./Modal";

//w-full bg-primary-100 h-lvh
export const Dashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const avatar=localStorage.getItem("avatar")
  const { isAuth, loggedInUser } = useSelector((store) => store.authReducer);
  console.log(loggedInUser, "userLogin");
  console.log(isAuth, "userAuth");
  // localStorage.setItem("avatar", loggedInUser.avatar);
  const avatar = localStorage.getItem("avatar");
  const name = localStorage.getItem("name");
  const email = localStorage.getItem("email");

  console.log(avatar, "avatar");

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="dash-container bg-primary-100 p-4">
      <div className="flex gap-8 items-center justify-between mb-8">
        <div className="relative grow maxW-40">
          <h1 className="text-[#013CC6] text-4xl not-italic font-medium sideP">
            All Task ....
          </h1>
        </div>
        <div className="user cursor-pointer">
          <div className="bell-box cursor-pointer">
            <img src="notification-bing.svg" alt="logo" className="bell" />
          </div>
          <img
            src={avatar}
            alt="userlogo"
            className="singleUser"
            onClick={openModal}
          />
        </div>
      </div>

      <Toolbar />

      <DashBoardTable />

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        {/* <AddProductForm closeModal={closeModal} /> */}
        <div className="pl-20 pr-20 pb-10 pt-10 text-left shadow-md cursor-pointer">
          <img src={avatar} alt="" className="w-20 h-20 rounded-full" />
          <div className="pt-2 ">
            <p className="text-base font-semibold leading-none text-gray-900 dark:text-white pt-4">
              {name}
            </p>
            <p className=" mb-3 text-sm font-normal hover:underline">
              {email}
            </p>
          </div>
        </div>
      </Modal>
    </div>
  );
};
