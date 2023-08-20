// context api
import { createContext, useContext, useReducer } from "react";
import { TodoReducer, initialState } from "./reducers/ToDoReducer";

// #1 create context
let ToDoContext = createContext({});

// #2 Create Context Provider (Component)
export let ToDoContextProvider = (props) => {
  let [todo, setTodo] = useReducer(TodoReducer, { ...initialState });
  let updateInputChange = (event) => {
    setTodo({ type: "INPUT_CHANGE", payload: event.target.value });
  };

  let saveNewTodo = () => {
    let todoInput = todo.todoInput.trim();
    if (todoInput !== "") {
      let newTodo = {
        title: todoInput,
        isCompleted: false,
      };

      const _todoList1 = [...todo.todoList, newTodo];
      alert("to saved successfully");
      setTodo({
        type: "LIST_CHANGE",
        payload: {
          list: _todoList1,
          text: "",
          mode: -1,
        },
      });
    }
  };
  let updateTodoDetails = () => {
    let todoInput = todo.todoInput.trim();
    let _todoList1 = [...todo.todoList];
    if (todoInput !== "") {
      _todoList1[todo.mode].title = todoInput;
      alert("todo updated successfully");
      setTodo({
        type: "LIST_CHANGE",
        payload: {
          list: _todoList1,
          text: "",
          mode: -1,
        },
      });
    }
  };
  let markAsCompleted = (index) => {
    const _todoList1 = [...todo.todoList];
    _todoList1[index].isCompleted = true;

    setTodo({
      type: "MARK_COMPLETE",
      payload: {
        list: _todoList1,
      },
    });
  };

  let setUpdate = (index) => {
    setTodo({
      type: "LIST_CHANGE",
      payload: {
        list: [...todo.todoList],
        text: todo.todoList[index].title,
        mode: index,
      },
    });
  };
  let values = {
    updateTodoDetails,
    updateInputChange,
    todoInput: todo.todoInput,
    mode: todo.mode,
    saveNewTodo,
    todoList: todo.todoList,
    markAsCompleted,
    setUpdate,
  };
  return (
    <>
      <ToDoContext.Provider value={values}>
        {props.children}
      </ToDoContext.Provider>
    </>
  );
};

// #3 Create Custom Hook With useContext
export let useToDoContext = () => {
  return useContext(ToDoContext);
};
