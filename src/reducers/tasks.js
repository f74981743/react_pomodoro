const initialState = [
  {
    text: "First thing todo",
    isDone: false,
    index: 0
  },
  {
    text: "Second thing todo",
    isDone: false,
    index: 1
  },
  {
    text: "Third thing todo",
    isDone: false,
    index: 2
  }
];

export default function tasks(state = initialState, action) {
  switch (action.type) {
    case "ADD_TASK":
      return [...state, action.task];
    case "SET_TASK_DONE":
      return state.map((item, index) => {
        if (index !== 0) return item;
        return {
          ...item,
          isDone: true
        };
      });
    case "MOVE_TASK_FIRST":
      let tasks = [
        state[action.index],
        ...state.filter(item => item.index !== action.index)
      ];
      console.log(action.index);
      tasks = tasks.map((task, index) => {
        return {
          text: task.text,
          isDone: task.isDone,
          index: index
        };
      });
      return tasks;
    default:
      return state;
  }
}
