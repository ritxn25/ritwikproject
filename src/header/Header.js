import React from "react";
import { IconBell, IconUser,IconChevronDown } from "@tabler/icons-react";
import Cards from "../cards/cards";
import LineandBar from "../charts/LineandBar";
import Doctable from "../Document/Doctable";


const Header = () => {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ marginLeft: "16%", fontSize: "2rem", fontWeight: "bold" }}>
          Overview
        </div>
        <div style={{ display: "flex", alignItems: "center", marginRight: "12rem" }}>
          <IconBell />
          <div style={{ display: "flex", alignItems: "center", marginLeft: "3rem" }}>
            <IconUser />
            <span style={{ marginLeft: "0.5rem" }}>Administrator</span>
            <IconChevronDown color="gray"/>
            
          </div>
          
        </div>
       
      </div>
    
      <Cards />
      <LineandBar />
      <Doctable />
      
      
      </>
    
  );
};

export default Header;
