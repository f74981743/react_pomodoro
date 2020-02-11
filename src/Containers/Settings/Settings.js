import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, Link, NavLink } from "react-router-dom";
import { hideSettings } from "../../actions";
import Analytics from "./Analytics";
import TodoList from "./TodoList";
import RingTones from "./RingTones";
import "./Settings.css";

const Settings = () => {
  const dispatch = useDispatch();
  const isSettingsHide = useSelector(state => state.appStatus.isSettingsHide);
  const settingsCls = isSettingsHide ? "settings hide" : "settings";

  return (
    <div className={settingsCls}>
      <div className="nav-bar">
        <NavLink to="/settings/todolist" activeClassName="selected">
          <div className="nav-btn">
            <i className="material-icons">menu</i>
            <span>TODO-LIST</span>
          </div>
        </NavLink>
        <NavLink to="/settings/analytics" activeClassName="selected">
          <div className="nav-btn">
            <i className="material-icons">insert_chart</i>
            <span>ANALYTICS</span>
          </div>
        </NavLink>
        <NavLink to="/settings/ringtones" activeClassName="selected">
          <div className="nav-btn">
            <i className="material-icons">library_music</i>
            <span>RING TONES</span>
          </div>
        </NavLink>
      </div>
      <Route path="/settings/todolist" component={TodoList} />
      <Route path="/settings/analytics" component={Analytics} />
      <Route path="/settings/ringtones" component={RingTones} />
      <div className="right-bar">
        <Link
          to="/"
          onClick={() => {
            dispatch(hideSettings());
          }}
        >
          <i class="material-icons">close</i>
        </Link>
      </div>
    </div>
  );
};

export default Settings;
