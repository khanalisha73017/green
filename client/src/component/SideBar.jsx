import React from "react";
import { useNavigate } from "react-router-dom";

export const SideBar = ({ setSelected }) => {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const handleLogOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("avatar");

    navigate("/login");
  };
  return (
    <div className="w-56 h-1184vh bg-primary-200 shrink-0 main-sidebar">
      <p className="text-[#013CC6] text-2xl not-italic font-medium sideP">
        Tasks Dashboard
      </p>

      <div className="sidebarBottom">
        <div className="">
          <div
            className="flex gap-4 my-6 items-center justify-between cursor-pointer"
            onClick={() => setSelected("dashboard")}
          >
            <img src="dashbordTask-1.svg" alt="logo" className="logo" />
            <span className="logoP">Dashboard</span>
          </div>

          <div
            className="flex gap-4 my-6 items-center justify-between cursor-pointer"
            onClick={handleLogOut}
          >
            <img src="setting-2.svg" alt="settings" className="logo" />
            <span className="logoP2">Logout</span>
          </div>
        </div>
      </div>
    </div>
  );
};
