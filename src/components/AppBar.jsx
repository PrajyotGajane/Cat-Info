import React from "react";
import catBg from "../assets/catBg.jpg"
import { Outlet } from "react-router-dom";

function AppBar() {
  return (

      <div style={{ width: "100%",marginBottom:"30px",  }} >
        <img style={{ width: "100%",height:"180px", }} src={catBg} alt="" />
        <Outlet/>
      </div>
   
  );
}

export default AppBar;
