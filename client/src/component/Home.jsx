import React, { useState } from "react";
import { SideBar } from "./SideBar";
import { Dashboard } from "./Dashboard";

export const Home = () => {
  let [selected, setSelected] = useState("dashboard");
  return (
    <div className="flex">
      <SideBar className="side-bar-component" setSelected={setSelected} />
      {selected == "dashboard" && <Dashboard />}
    </div>
  );
};
