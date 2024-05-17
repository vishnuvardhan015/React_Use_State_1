import React, { useState } from "react";

const IndexNew = () => {
  const [count, setCount] = useState(0);

  //   const decrement = () => {
  //     setCount(count - 1);
  //   };

  const decrement = () => {
    setCount((vishnu) => vishnu - 1);
    setCount((vishnu) => vishnu - 1);
  };

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <section>
      <button className="button1" onClick={decrement}>
        -
      </button>
      <span>{count}</span>
      <button className="button2" onClick={increment}>
        +
      </button>
    </section>
  );
};

export default IndexNew;
