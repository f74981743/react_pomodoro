import React from "react";
import "./TaskListItem.css";
import { useDispatch } from "react-redux";
import { moveTaskFirst } from "../actions";

const TaskListItem = props => {
  const { text, index, handleStart } = props;
  const dispatch = useDispatch();
  return (
    <div className="task-list-item">
      <a className="circle" />
      <span className="text">{text}</span>
      <i
        className="material-icons"
        onClick={() => {
          dispatch(moveTaskFirst(index));
          handleStart(true);
        }}
      >
        play_circle_outline
      </i>
    </div>
  );
};

export default TaskListItem;
