import { render, screen } from "@testing-library/react";
import Header from "./Header";

// test case
// it('element must have "Hello Word" ', () => {
//   render(<Header />);
//   // let element = screen.getByText(/Hello Word/i);
//   // expect(element).toBeInTheDocument();
//   // expect(element).toContainHTML("h1");
//   let element = screen.getAllByText(/Hello Word/i);
//   expect(element.length).toBe(2);
// });

// manual  ==> unit testing , integrated testing , functional testing
let text = "123";
it("h1 element must have valid props text", () => {
  render(<Header text={text} />);
  let element = screen.getByRole("heading");
  expect(element.innerHTML).toBe("123");
});
