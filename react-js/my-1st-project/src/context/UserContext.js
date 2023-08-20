import { createContext, useContext, useState } from "react";

let UserContext = createContext({});

export let UserContextProvider = (props) => {
  let [name] = useState("Deepakkumar");
  let values = { name };
  return (
    <>
      <UserContext.Provider value={values}>
        {props.children}
      </UserContext.Provider>
    </>
  );
};

export let useUserContext = () => {
  return useContext(UserContext);
};
