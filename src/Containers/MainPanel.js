import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setTaskStarted,
  setTaskPause,
  setTakeBreak,
  setWorking,
  setTaskDone
} from "../actions";
import "./MainPanel.css";
import SearchBar from "../Components/SearchBar";
import TaskListItem from "../Components/TaskListItem";
import LargeButton from "../Components/LargeButton";
import NavBar from "../Components/NavBar";
import Settings from "./Settings/Settings";

const MainPanel = () => {
  const [isActive, setIsActive] = useState(false);
  const [remainingTime, setRemainingTime] = useState(25 * 1);
  const tasks = useSelector(state => state.tasks);
  const topFourTasks = tasks.filter(
    (task, index) => index < 4 && task.isDone === false
  );
  const isPaused = useSelector(state => state.appStatus.isPaused);
  const isWorkingMode = useSelector(state => state.appStatus.isWorkingMode);
  const dispatch = useDispatch();
  useEffect(() => {
    let interval = null;
    if (remainingTime > 0) {
      if (isActive) {
        interval = setInterval(() => {
          setRemainingTime(remainingTime => remainingTime - 1);
        }, 1000);
      } else {
        clearInterval(interval);
      }
    } else {
      dispatch(setTaskPause());
      dispatch(setTaskDone());
      setIsActive(false);
      changeMode();
    }
    return () => clearInterval(interval);
  }, [isActive, remainingTime]);

  const handleStart = isReset => {
    dispatch(setTaskStarted());
    if (isReset) {
      dispatch(setWorking());
      setRemainingTime(25 * 1);
    }
    setIsActive(true);
  };

  const handlePause = () => {
    dispatch(setTaskPause());
    setIsActive(false);
  };

  const secondsToMinutes = time => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };

  const changeMode = () => {
    if (isWorkingMode) {
      dispatch(setTakeBreak());
      setRemainingTime(5 * 1);
    } else {
      dispatch(setWorking());
      setRemainingTime(25 * 1);
    }
  };

  return (
    <div className="main-panel">
      <div className="left">
        <SearchBar />
        <div className="time-text">{secondsToMinutes(remainingTime)}</div>
        <div className="tasks">
          {topFourTasks.map(task => (
            <TaskListItem
              text={task.text}
              isDone={task.isDone}
              index={task.index}
              handleStart={handleStart}
            />
          ))}
        </div>
        {tasks.length > 3 && <div className="more">MORE</div>}
      </div>
      <div className="right">
        <NavBar />
      </div>
      <LargeButton
        isPaused={isPaused}
        isWorkingMode={isWorkingMode}
        taskNum={tasks.length}
        handleStart={handleStart}
        handlePause={handlePause}
      />
      <Settings />
    </div>
  );
};

export default MainPanel;
