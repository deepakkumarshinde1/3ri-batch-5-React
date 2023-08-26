import { forwardRef, useImperativeHandle, useState } from "react";

let MyInput = (props, ref) => {
  let { placeholder, type } = props;
  let [input, setInput] = useState("");
  let [error, setError] = useState("");
  let [errorMessage, setErrorMessage] = useState("");

  useImperativeHandle(ref, () => {
    return {
      getData: () => {
        return input;
      },
      setError: (message = "Please Enter Value") => {
        setErrorMessage(message);
        setError("border-danger");
      },
      removeError: () => {
        setErrorMessage("");
        setError("");
      },
    };
  });
  return (
    <>
      <input
        ref={ref}
        onChange={(event) => setInput(event.target.value)}
        type={type}
        className={"form-control " + error}
        placeholder={placeholder}
        value={input}
      />
      <small className="text-danger fw-bold">{errorMessage}</small>
    </>
  );
};

export default forwardRef(MyInput);
