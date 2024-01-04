import React, { useState } from "react";

const BgChanger = () => {
  const [color, setColor] = useState("black");

  return (
    <div
      className="h-screen w-full duration-200 "
      style={{ backgroundColor: color }}
    >
      <div className="fixed inset-x-0 bottom-12 flex flex-wrap justify-center px-2">
        <div className="flex flex-wrap justify-center gap-3 rounded-xl bg-white px-3 py-2 shadow-lg">
          <button
            className="rounded-full px-4 py-1 text-white shadow-lg outline-none"
            style={{ backgroundColor: "red" }}
            onClick={() => setColor((prevColor) => (prevColor = "red"))}
          >
            Red
          </button>
          <button
            className="rounded-full px-4 py-1 text-white shadow-lg outline-none"
            style={{ backgroundColor: "green" }}
            onClick={() => setColor((prevColor) => (prevColor = "green"))}
          >
            Green
          </button>
          <button
            className="rounded-full px-4 py-1 text-white shadow-lg outline-none"
            style={{ backgroundColor: "blue" }}
            onClick={() => setColor((prevColor) => (prevColor = "blue"))}
          >
            Blue
          </button>
          <button
            className="rounded-full px-4 py-1 text-white shadow-lg outline-none"
            style={{ backgroundColor: "purple" }}
            onClick={() => setColor((prevColor) => (prevColor = "purple"))}
          >
            Purple
          </button>

          <button
            className="rounded-full px-4 py-1 text-white shadow-lg outline-none"
            style={{ backgroundColor: "darkgoldenrod" }}
            onClick={() =>
              setColor((prevColor) => (prevColor = "darkgoldenrod"))
            }
          >
            Darkgoldenrod
          </button>

          <button
            className="rounded-full px-4 py-1 text-white shadow-lg outline-none"
            style={{ backgroundColor: "darkviolet" }}
            onClick={() => setColor((prevColor) => (prevColor = "darkviolet"))}
          >
            Darkviolet
          </button>
        </div>
      </div>
    </div>
  );
};

export default BgChanger;
