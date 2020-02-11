import React from "react";
import TaskListItem from "./TaskListItem";
import "./TaskList.css";

const TaskList = props => {
  const { tasks, title } = props;

  return (
    <div className="task-list">
      <div className="header" />
      <div className="title-text">{title}</div>
      <div className="list">
        {tasks.map((task, index) => (
          <TaskListItem
            text={task.text}
            isDone={task.isDone}
            index={task.index}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default TaskList;
