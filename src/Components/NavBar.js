import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { showSettings } from "../actions";

const NavBar = () => {
  const dispatch = useDispatch();
  return (
    <div className="nav-bar">
      <Link
        to="/settings/todolist"
        onClick={() => {
          dispatch(showSettings());
        }}
      >
        <i className="material-icons">menu</i>
      </Link>
      <Link
        to="/settings/analytics"
        onClick={() => {
          dispatch(showSettings());
        }}
      >
        <i className="material-icons">insert_chart</i>
      </Link>
      <Link
        to="/settings/ringtones"
        onClick={() => {
          dispatch(showSettings());
        }}
      >
        <i className="material-icons">library_music</i>
      </Link>

      <div className="logo" />
    </div>
  );
};

export default NavBar;
