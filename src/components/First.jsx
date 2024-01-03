import React, { useState } from "react";

const First = () => {
  const [counter, setCounter] = useState(0);

  const removeValue = () => {
    if (counter <= 0) {
      return;
    }
    setCounter((counter) => counter - 1);
  };

  return (
    <div className="mx-auto mt-12 flex w-11/12 flex-col items-center justify-center bg-indigo-400 py-8">
      <h1 className="my-2 text-2xl font-bold text-white">Simple Counter</h1>

      <div className="flex border-2 border-black bg-lime-400 p-10">
        <button
          className="mx-4 border-2 border-black bg-cyan-500 p-2"
          onClick={() => setCounter((counter) => counter + 1)}
        >
          Add Value +
        </button>
        <h1 className="mx-4 border-2 border-black bg-cyan-500 p-4">
          Counter Value: {counter}
        </h1>
        <button
          className="mx-4 border-2 border-black bg-cyan-500 p-2"
          onClick={removeValue}
        >
          Remove Value -
        </button>
      </div>
    </div>
  );
};

export default First;
