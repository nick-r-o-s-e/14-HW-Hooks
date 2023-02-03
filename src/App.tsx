import { useState, useEffect } from "react";
import "./App.scss";
import { v4 as uuidv4 } from "uuid";
import SecondTaskTemplate from "./components/SecondTaskTemplate";


function App() {
  const [inputVal, setInputVal] = useState("");
  const [outputs, setOutputs] = useState<string[]>([]);
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("red");
  const [pickedColorsList, setColorsList] = useState<string[]>([]);

  const [disabledState, setDisabledState] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setDisabledState(false);
    }, 5000);
  }, []);
  

  
  const secondTemplateLoad = () => {
    // console.log("SECOND RENDER")
  }
  
  return (
    <div className="tasks-container">
      <div className="first-container task">
        <div className="input-div">
          <div className="input-field-div">
            <div className="form-floating mb-3">
              <input
                type="text"
                value={inputVal}
                className="form-control"
                onChange={(e) => {
                  setInputVal(e.target.value);
                }}
                autoFocus
                id="firstInput"
                placeholder="Input"
              />
              <label htmlFor="firstInput">Input</label>
            </div>
            <button
              className="btn btn-success add-output-btn"
              onClick={() => {
                if (inputVal) {
                  setOutputs([...outputs, inputVal]);
                  setInputVal("");
                }
              }}
            >
              +
            </button>
          </div>

         

          <div className="outputs">
            {outputs.map((output) => {
              return <p key={uuidv4()}>{output}</p>;
            })}
          </div>
        </div>

        <hr />

        <div className="counter-div">
          <button
            className={`btn btn-success ${disabledState && "disabled"}`}
            disabled={disabledState}
            onClick={() => {
              setCount(count + 1);
            }}
          >
            {!disabledState ? `COUNT: ${count}` : "disabled"}
          </button>

          <div className="countX2">{count * 2}</div>
        </div>

        <hr />

        <div className="colors-div">
          <div className="pick-color-field">
            <button
              className="btn btn-success pisk-color-btn"
              onClick={() => {
                color && setColorsList((prevVal) => [...prevVal, color]);
              }}
            >
              +
            </button>
            <select
              className="form-select form-select-lg mb-3 color-select"
              name="colors"
              id="colors"
              onChange={(e) => {
                setColor(e.target.value);
              }}
            >
              <option value="red">red</option>
              <option value="yellow">yellow</option>
              <option value="purple">purple</option>
              <option value="green">green</option>
            </select>
          </div>

          <div className="squares">
            {pickedColorsList.map((color) => {
              return (
                <div
                  key={uuidv4()}
                  className="color-square"
                  style={{ backgroundColor: color }}
                ></div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="second-container task">
      <SecondTaskTemplate position="first"/>
      <SecondTaskTemplate position="second" />

      </div>
    </div>
  );
}

export default App;
