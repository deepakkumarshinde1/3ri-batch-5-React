import { useToDoContext } from "../context/ToDoContext";
import Input from "./Input";

const InputArea = () => {
  let { updateTodoDetails, mode, saveNewTodo } = useToDoContext();

  return (
    <>
      <section className="input-group">
        <Input />
        {mode === -1 ? (
          <button
            data-testid="submit_button"
            onClick={saveNewTodo}
            className="btn btn-success input-group-text "
          >
            <i className="fa fa-floppy-o me-2" aria-hidden="true"></i>
            Save
          </button>
        ) : (
          <button
            data-testid="submit_button"
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
