import { memo } from "react";

const Header = () => {
  console.log("header component");
  return (
    <>
      <p className="text-center h3 text-primary mt-2">Todo App</p>
    </>
  );
};

export default memo(Header);

// memo ==> higher order component
