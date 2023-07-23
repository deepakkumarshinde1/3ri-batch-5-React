import { useState } from "react";
import Header from "./components/Header";
import InputArea from "./components/InputArea";
import TodoList from "./components/TodoList";

const App = () => {
  const [todoList, setTodoList] = useState([]);
  let [todoInput, setTodoInput] = useState("");
  let [mode, setMode] = useState(-1);
  let updateInputChange = (event) => {
    setTodoInput(event.target.value);
  };

  let saveNewTodo = () => {
    todoInput = todoInput.trim();
    if (todoInput !== "") {
      let newTodo = {
        title: todoInput,
        isCompleted: false,
      };

      // push
      // const _todoList = [...todoList];
      // _todoList.push(newTodo)

      // by spread opr

      const _todoList1 = [...todoList, newTodo];
      setTodoList(_todoList1);
      alert("to saved successfully");
      setTodoInput("");
      setMode(-1);
    }
  };
  let updateTodoDetails = () => {
    todoInput = todoInput.trim();
    if (todoInput !== "") {
      const _todoList1 = [...todoList];
      _todoList1[mode].title = todoInput;
      alert("todo updated successfully");
      setTodoList(_todoList1);
      setTodoInput("");
      setMode(-1);
    }
  };
  let markAsCompleted = (index) => {
    const _todoList = [...todoList];
    _todoList[index].isCompleted = true;
    setTodoList(_todoList);
  };

  let setUpdate = (index) => {
    setTodoInput(todoList[index].title);
    setMode(index);
  };
  return (
    <>
      <section className="container-fluid">
        <section className="row">
          <section className="col-lg-6 col-10 m-auto">
            <Header />
            <InputArea
              todoInput={todoInput}
              updateInputChange={updateInputChange}
              mode={mode}
              saveNewTodo={saveNewTodo}
              updateTodoDetails={updateTodoDetails}
            />
            <TodoList
              todoList={todoList}
              markAsCompleted={markAsCompleted}
              setUpdate={setUpdate}
            />
          </section>
        </section>
      </section>
    </>
  );
};

export default App;
