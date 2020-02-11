const initialState = {
  isPaused: true,
  isWorkingMode: true,
  isSettingsHide: true
};

export default function tasks(state = initialState, action) {
  switch (action.type) {
    case "SET_TASK_STARTED":
      return Object.assign({}, state, {
        isPaused: false
      });
    case "SET_TASK_PAUSE":
      return Object.assign({}, state, {
        isPaused: true
      });
    case "SET_WORKING":
      return Object.assign({}, state, {
        isWorkingMode: true
      });
    case "SET_TAKE_BREAK":
      return Object.assign({}, state, {
        isWorkingMode: false
      });
    case "SHOW_SETTINGS":
      return Object.assign({}, state, {
        isSettingsHide: false
      });
    case "HIDE_SETTINGS":
      return Object.assign({}, state, {
        isSettingsHide: true
      });
    case "SET_SETTINGS_CUR":
      return Object.assign({}, state, {
        curSettingsIndex: action.index
      });
    default:
      return state;
  }
}
