export function addTask(task) {
  return {
    type: "ADD_TASK",
    task
  };
}

export function setTaskStarted() {
  return {
    type: "SET_TASK_STARTED"
  };
}

export function setTaskPause() {
  return {
    type: "SET_TASK_PAUSE"
  };
}

export function setWorking() {
  return {
    type: "SET_WORKING"
  };
}

export function setTakeBreak() {
  return {
    type: "SET_TAKE_BREAK"
  };
}

export function showSettings() {
  return {
    type: "SHOW_SETTINGS"
  };
}

export function hideSettings() {
  return {
    type: "HIDE_SETTINGS"
  };
}

export function setTaskDone() {
  return {
    type: "SET_TASK_DONE"
  };
}

export function moveTaskFirst(index) {
  return {
    type: "MOVE_TASK_FIRST",
    index
  };
}
