import React, { useState } from "react";

function Header() {
  const [counter, setCounter] = useState(0);

  const incrementCount = () => {
    setCounter(counter + 1);
  };
  const decrementCount = () => {
    setCounter(counter - 1);
  };

  return (
    <div>
      <h1>Header: {counter}</h1>
      <button className="btn" onClick={incrementCount}>
        Increment
      </button>
      <button className="btn" onClick={decrementCount}>
        Decrement
      </button>
      <hr />
    </div>
  );
}

export default Header;
