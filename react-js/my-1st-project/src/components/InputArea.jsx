const InputArea = (props) => {
  console.log("input area component");
  let { updateTodoDetails, updateInputChange, todoInput, mode, saveNewTodo } =
    props;
  return (
    <>
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
    </>
  );
};

export default InputArea;
