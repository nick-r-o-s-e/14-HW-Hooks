import { useEffect, useState } from "react";

interface Props {
  position: "first" | "second";
}

function SecondTaskTemplate({ position }: Props) {
  const [count, setCount] = useState(0);
  const [inputVal, setInputVal] = useState("");
  const [firstRender, setFirstRender] = useState(true);
  const [countTextSize, setCountTextSize] = useState(19);

  useEffect(() => {
    if (position == "first") {
      console.log("FIRST RENDER");
      setFirstRender(false);
    } else {
      setCount(100);
    }
  }, []);

  useEffect(() => {
    if (position == "first") {
      if (!firstRender) {
        console.log("RENDER");
      }
    }
  }, [count, inputVal]);

  return (
    <div className="second-task-template">
      <div className="counter-div">
        <button
          className={`btn btn-success`}
          onClick={() => {
            if (position == "first") {
              console.log("CHANGING COUNT");
            } else {
              setCountTextSize((prevVal) => prevVal + 1);
            }

            setCount(count + 1);
          }}
        >
          +
        </button>

        <div style={{ fontSize: `${countTextSize}px` }} className="count">
          COUNT: {count}
        </div>
      </div>
      <div className="form-floating mb-3">
        <input
          type="text"
          value={inputVal}
          className="form-control"
          onChange={(e) => {
            if (position == "first") {
              console.log("INPUT CHANGE");
            } else {
              document.title = e.target.value;
            }
            setInputVal(e.target.value);
          }}
          id="firstInput"
          placeholder="Input"
        />
        <label htmlFor="firstInput">Input</label>
      </div>
      <div className="input-output">{inputVal}</div>
    </div>
  );
}

export default SecondTaskTemplate;
