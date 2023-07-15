const TodoList = (props) => {
  let { todoList, markAsCompleted, setUpdate } = props;
  return (
    <>
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
        </ul>
      </section>
    </>
  );
};

export default TodoList;
