import { useParams } from "react-router-dom";

let hoc = (Component) => {
  let HandelProps = (props) => {
    let params = useParams();
    return (
      <>
        <Component params={params} {...props} />
      </>
    );
  };
  return HandelProps;
};

export default hoc;
