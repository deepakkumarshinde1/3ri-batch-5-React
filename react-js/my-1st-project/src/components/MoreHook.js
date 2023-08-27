import { useCallback, useEffect, useMemo, useState } from "react";

function MoreHook() {
  let [count_1, setCount1] = useState(1);
  let [count_2, setCount2] = useState(1);
  let [square, setSquare] = useState(1);
  let incOne = () => {
    setCount1(count_1 + 1);
  };
  // state not change logic will use older/last result

  // useMemo
  // return  a value

  //   let checkEvenOdd = useMemo(() => {
  //     setSquare(count_1 * count_1);
  //     for (let index = 0; index < 1000; index++) {
  //       console.log("loop");
  //     }
  //     if (count_1 % 2 === 0) return true;
  //     else return false;
  //   }, [count_1]);

  // useCallback
  // don't use state to update
  let checkEvenOdd = useCallback(() => {
    for (let index = 0; index < 1000; index++) {
      console.log("loop");
    }
    if (count_1 % 2 === 0) return true;
    else return false;
  }, [count_1]);

  //   let checkEvenOdd = () => {
  //     for (let index = 0; index < 1000; index++) {
  //       console.log("loop");
  //     }
  //     if (count_1 % 2 === 0) return true;
  //     else return false;
  //   };
  let incTwo = () => {
    setCount2(count_2 + 1);
  };

  return (
    <>
      <section className="d-flex gap-3">
        <div className="text-center">
          <h1>{count_1}</h1>
          <button onClick={incOne} className="btn btn-success btn-sm">
            INC-1
          </button>
          <h1>{square}</h1>
          <h1>{checkEvenOdd() === true ? "even" : "odd"}</h1>
        </div>
        <div className="text-center">
          <h1>{count_2}</h1>
          <button onClick={incTwo} className="btn btn-primary btn-sm ">
            INC-2
          </button>
        </div>
      </section>
    </>
  );
}

export default MoreHook;
