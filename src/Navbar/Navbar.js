import React from "react";
import "../Navbar/Navbar.css";
import {
  IconLayoutDashboard,
  IconFolders,
  IconLayoutSidebarInactive,
  IconPresentationAnalytics,
  IconRefresh,
  IconBrandHipchat,
  IconBriefcase,
  IconMail,
  IconTransfer,
  IconSettings,
} from "@tabler/icons-react";
import Productsidebar from "../ProductSide/Productsidebar";

const Navbar = () => {
  return (
    <div>
      <ul className="sidenav" style={{textAlign:"left", display:"flex",flexDirection:"column"}}>
        <li style={{fontSize:"1.8rem",marginBottom:"1rem",marginTop:"0.5rem",marginLeft:"1rem",color:"orange", fontWeight:"bold" , fontStyle:"italic"}}>
          CRM.io
        </li>
        <li>
          <a className="active" href="#dashboard" style={{ display: 'flex', alignItems: 'center' }}>
            <IconLayoutDashboard style={{ marginRight: '8px' }}/>
            Dashboard
          </a>
        </li>
        <li>
          <a href="#" style={{marginTop:"1rem",marginBottom:"1rem"}}>Management</a>
        </li>
        <li>
          <a href="#" style={{ display: 'flex', alignItems: 'center' }}>
            <IconFolders  style={{ marginRight: '8px' }}  />
            Document
          </a>
        </li>
        <li>
          <a href="# " style={{ display: 'flex', alignItems: 'center' }}>
            <IconLayoutSidebarInactive  style={{ marginRight: '8px' }}/>
            Contact
          </a>
        </li>
        <li>
          <a href="#" style={{ display: 'flex', alignItems: 'center' }}>
            <IconPresentationAnalytics  style={{ marginRight: '8px' }}/>
            Prospect
          </a>
        </li>
        <li>
          <a href="#" style={{ display: 'flex', alignItems: 'center' }}>
            <IconRefresh  />
            Workflow
          </a>
        </li>
        <li>
          <a href="#" style={{marginTop:"1rem",marginBottom:"1rem"}}>
            Connection
          </a>
        </li>
        <li>
          <a href="#" style={{ display: 'flex', alignItems: 'center' }}>
            <IconBrandHipchat  style={{ marginRight: '8px' }}/> Chat Intigration
          </a>
        </li>
        <li>
          <a href="#" style={{ display: 'flex', alignItems: 'center' }}>
            <IconBriefcase  style={{ marginRight: '8px' }}/>
            Marketing Automation
          </a>
        </li>
        <li>
          <a href="#"style={{ display: 'flex', alignItems: 'center' }}>
            <IconMail  style={{ marginRight: '8px' }} />
            Email Intigration
          </a>
        </li>
        <li>
          <a href="#" style={{marginTop:"1rem",marginBottom:"1rem"}}>Customer</a>
        </li>
        <li>
          <a href="#" style={{ display: 'flex', alignItems: 'center' }}>
            <IconTransfer  style={{ marginRight: '8px' }} />
            Transaction
          </a>
        </li>
        <li>
          <a href="#" style={{ display: 'flex', alignItems: 'center' }}>
            <IconSettings style={{ marginRight: '8px' }} />
            Maintenance
          </a>
        </li>
      </ul>
      <div style={{position:"absolute",  right:"0"}}>
      <Productsidebar />
      </div>
    </div>
  );
};

export default Navbar;
