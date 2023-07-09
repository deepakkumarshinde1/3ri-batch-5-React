import { useState } from "react";

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
            <p className="text-center h3 text-primary mt-2">Todo App</p>
            <section className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Todo Name"
                onChange={updateInputChange}
                value={todoInput}
              />
              {mode === -1 ? (
                <button
                  onClick={saveNewTodo}
                  className="btn btn-success input-group-text "
                >
                  <i className="fa fa-floppy-o me-2" aria-hidden="true"></i>
                  Save
                </button>
              ) : (
                <button
                  onClick={updateTodoDetails}
                  className="btn btn-primary input-group-text "
                >
                  <i className="fa fa-floppy-o me-2" aria-hidden="true"></i>
                  Update
                </button>
              )}
            </section>
            <section>
              <ul className="list-group mt-3">
                {todoList.map((todo, index) => {
                  return (
                    <li key={index} className="list-group-item">
                      <div className="row gap-5">
                        <section className="form-check col-9">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            onChange={() => markAsCompleted(index)}
                            checked={todo.isCompleted}
                            disabled={todo.isCompleted}
                          />
                          <span
                            className={
                              todo.isCompleted ? "fst-italic text-danger" : null
                            }
                          >
                            {todo.title}
                          </span>
                        </section>
                        {todo.isCompleted === false ? (
                          <section className="col-2">
                            <button className="btn btn-sm btn-danger me-1">
                              <i className="fa fa-trash" aria-hidden="true"></i>
                            </button>
                            <button
                              className="btn btn-sm btn-info"
                              onClick={() => setUpdate(index)}
                            >
                              <i
                                className="fa fa-pencil-square-o"
                                aria-hidden="true"
                              ></i>
                            </button>
                          </section>
                        ) : null}
                      </div>
                    </li>
                  );
                })}
                {/* <li className="list-group-item">
                  <div className="row gap-5">
                    <section className="form-check col-12">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        disabled
                      />
                      <span className=" fst-italic text-danger">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Officia sit dolor consectetur repellendus sunt
                        velit,
                      </span>
                    </section>
                  </div>
                </li> */}
              </ul>
            </section>
          </section>
        </section>
      </section>
    </>
  );
};

export default App;
