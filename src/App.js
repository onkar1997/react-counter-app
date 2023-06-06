import React, { useState } from "react";
import Button from "./components/Button";
import "./App.css"

function App() {

  const [count, setCount] = useState(0);

  let incrementCount = () => {
    setCount(count + 1);
  };

  let decrementCount = () => {
    setCount(count <= 0 ? count : count-1);
  };

  let resetCount = () => {
    setCount(0);
  }

  return (
    <div className="app">
      <h1>Count: {count}</h1>
      <div className="buttons">
        <Button className="btn-primary" title={"Decrement"} action={decrementCount} />
        <Button className="btn-success" title={"Increment"} action={incrementCount} />
        <Button className="btn-danger" title={"Reset"} action={resetCount} />
      </div>
    </div>
  );
}

export default App;
