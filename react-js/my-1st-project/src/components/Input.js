import { useToDoContext } from "../context/ToDoContext";

const Input = () => {
  let { updateInputChange, todoInput } = useToDoContext();
  return (
    <>
      <input
        type="text"
        className="form-control"
        placeholder="Enter Todo Name"
        onChange={updateInputChange}
        value={todoInput}
      />
    </>
  );
};
export default Input;
