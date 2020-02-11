import React from "react";
import { useSelector } from "react-redux";
import SearchBar from "../../Components/SearchBar";
import TaskList from "../../Components/TaskList";
import "./TodoList.css";

const TodoList = () => {
  const todo = useSelector(state =>
    state.tasks.filter(task => task.isDone === false)
  );
  const done = useSelector(state =>
    state.tasks.filter(task => task.isDone === true)
  );
  return (
    <div className="settings-content">
      <SearchBar />
      <TaskList title="Todos" tasks={todo} />
      <TaskList title="Done" tasks={done} />
    </div>
  );
};

export default TodoList;
