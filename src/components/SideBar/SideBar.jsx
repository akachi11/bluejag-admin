import React, { useContext } from "react";
import {
  SideBarLogo,
  SideBarContainer,
  SideBarLinks,
  SideBarClose,
} from "./SideBarStyles";
import logo from "../../assets/logo.png";
import cbLogo from "../../assets/cbLogo.svg";
import {
  CiGrid41,
  CiShirt,
  CiShoppingCart,
  CiUser,
  CiCircleRemove,
} from "react-icons/ci";
import { UIContext } from "../../context/UIContext";
import { useNavigate } from "react-router-dom";
import { MdEvent } from "react-icons/md";

const SideBar = () => {
  const { toggleSideBar, darkMode, page, selectPage } = useContext(UIContext);
  const navigate = useNavigate();

  return (
    <SideBarContainer darkMode={darkMode}>
      <SideBarClose darkMode={darkMode} onClick={() => toggleSideBar(false)}>
        <CiCircleRemove />
      </SideBarClose>
      <SideBarLogo src={logo} />

      <SideBarLinks darkMode={darkMode}>
        <div
          className={page === "home" ? "selected" : ""}
          onClick={() => {
            navigate("/");
            toggleSideBar(false);
          }}
        >
          <CiGrid41 />
          Dashboard
        </div>
        <div
          className={page === "products" ? "selected" : ""}
          onClick={() => {
            navigate("/products");
            toggleSideBar(false);
          }}
        >
          <CiShirt />
          Products
        </div>
        <div
          className={page === "orders" ? "selected" : ""}
          onClick={() => {
            navigate("/orders");
            toggleSideBar(false);
          }}
        >
          <CiShoppingCart />
          Orders
        </div>
        <div
          className={page === "create-event" ? "selected" : ""}
          onClick={() => {
            navigate("/create-event");
            toggleSideBar(false);
          }}
        >
          <MdEvent />
          Create Event
        </div>
        <div
          className={page === "users" ? "selected" : ""}
          onClick={() => {
            navigate("/users");
            toggleSideBar(false);
          }}
        >
          <CiUser />
          Users
        </div>
      </SideBarLinks>
    </SideBarContainer>
  );
};

export default SideBar;
