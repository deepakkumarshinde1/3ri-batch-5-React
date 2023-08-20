import { ToDoContextProvider } from "./ToDoContext";
import { UserContextProvider } from "./UserContext";
const IndexContext = (props) => {
  return (
    <>
      <UserContextProvider>
        <ToDoContextProvider>{props.children}</ToDoContextProvider>
      </UserContextProvider>
    </>
  );
};
export default IndexContext;
