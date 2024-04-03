import React, { useState } from "react";

export default function Counter() {
  const [number, setNumber] = useState(0);

  const increase = () => {
    setNumber((prev) => prev + 1);
  };

  const decrease = () => {
    setNumber((prev) => prev - 1);
  };

  return (
    <div>
      <h1 className="number">{number}</h1>
      <button className="increase" onClick={increase}>
        +1
      </button>
      <button className="decrease" onClick={decrease}>
        -1
      </button>
    </div>
  );
}
