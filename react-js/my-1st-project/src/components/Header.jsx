import { memo } from "react";
import { useUserContext } from "../context/UserContext";

const Header = ({ text }) => {
  let { name } = useUserContext();
  return (
    <>
      <h1 className="text-center h3 text-primary mt-2">
        {text} {name}
      </h1>
      {/* <h1>Hello Word</h1>
      <h1>Hello Word</h1> */}
    </>
  );
};

export default memo(Header);

// memo ==> higher order component
