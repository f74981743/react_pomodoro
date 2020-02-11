import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../actions";
import "./SearchBar.css";

const SearchBar = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const tasks = useSelector(state => state.tasks);
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="ADD A NEW MISSION..."
        onChange={e => {
          setValue(e.target.value);
        }}
      />
      <i
        className="material-icons"
        onClick={() => {
          if (value !== "")
            dispatch(
              addTask({
                text: value,
                isDone: false,
                index: tasks.length
              })
            );
        }}
      >
        add
      </i>
    </div>
  );
};

export default SearchBar;
