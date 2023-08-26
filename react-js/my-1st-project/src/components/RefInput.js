import { useRef } from "react";
import MyInput from "./MyInput";

let RefInput = () => {
  let userInput = useRef();
  let passwordInput = useRef();
  let emailInput = useRef();
  let submit = () => {
    // let data = userInput.current.value;
    // userInput.current.value = "";
    // console.log(data);
    let username = userInput.current.getData();
    let password = passwordInput.current.getData();
    if (valid()) {
      console.log("all is well");
    } else {
      console.log("You have a error");
    }
    //console.log(username, password);
  };
  let valid = () => {
    let isValid = true;
    isValid = checkValidation(
      userInput.current.getData(),
      userInput,
      `Username can't be empty`
    );
    isValid = checkValidation(
      passwordInput.current.getData(),
      passwordInput,
      `Password can't be empty`
    );
    isValid = checkValidation(
      emailInput.current.getData(),
      emailInput,
      `Email can't be empty`
    );
    return isValid;
  };
  let checkValidation = (
    value,
    refInstance,
    message = "Please Enter Value"
  ) => {
    if (value === "") {
      refInstance.current.setError(message);
      return false;
    } else {
      refInstance.current.removeError();
      return true;
    }
  };
  return (
    <>
      <div>
        <MyInput ref={userInput} placeholder="Enter UserName" type="text" />
        <MyInput
          ref={passwordInput}
          placeholder="Enter Password"
          type="password"
        />
        <MyInput ref={emailInput} placeholder="Enter Email" type="email" />
        <button onClick={submit} className="btn btn-success">
          Get Input
        </button>
      </div>
    </>
  );
};
export default RefInput;
