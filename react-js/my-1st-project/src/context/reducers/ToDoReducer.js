export let initialState = {
  todoList: [],
  todoInput: "",
  mode: -1,
};

export let TodoReducer = (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    case "INPUT_CHANGE":
      return { ...state, todoInput: payload };

    case "LIST_CHANGE":
      return {
        ...state,
        mode: payload.mode,
        todoList: payload.list,
        todoInput: payload.text,
      };

    case "MARK_COMPLETE":
      return { ...state, todoList: payload.list };

    default:
      return { ...state };
  }
};
