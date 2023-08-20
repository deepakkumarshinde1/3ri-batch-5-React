import { render, screen, fireEvent } from "@testing-library/react";
import InputArea from "./InputArea";

let mockUpdateInputChange = jest.fn();
let mockSaveNewTodo = jest.fn();
let mockUpdateTodoDetails = jest.fn();
it("input is present in component", () => {
  render(
    <InputArea
      todoInput={""}
      updateInputChange={mockUpdateInputChange}
      mode={-1}
      saveNewTodo={mockSaveNewTodo}
      updateTodoDetails={mockUpdateTodoDetails}
    />
  );
  //   let element = screen.getByPlaceholderText(/Enter Todo Name/i);
  let inputElement = screen.getByRole("textbox", {
    placeholder: "Enter Todo Name",
    type: "text",
  });
  let changeText = "Task-1";
  fireEvent.change(inputElement, { target: { value: changeText } });
  expect(inputElement.value).toBe("Task-1");
});

it("on submit click input is reset ", () => {
  render(
    <InputArea
      todoInput={""}
      updateInputChange={mockUpdateInputChange}
      mode={-1}
      saveNewTodo={mockSaveNewTodo}
      updateTodoDetails={mockUpdateTodoDetails}
    />
  );
  //   let element = screen.getByPlaceholderText(/Enter Todo Name/i);
  let inputElement = screen.getByRole("textbox", {
    placeholder: "Enter Todo Name",
    type: "text",
  });
  let changeText = "Task-1";
  fireEvent.change(inputElement, { target: { value: changeText } });
  expect(mockUpdateInputChange).toHaveBeenCalled();

  //   button
  let button = screen.getByTestId("submit_button");
  expect(button).toBeInTheDocument();
  fireEvent.click(button);
  //   expect(inputElement.value).toBe("");
  expect(mockSaveNewTodo).toHaveBeenCalledTimes(1);
});
