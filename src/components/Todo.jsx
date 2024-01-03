import React, { useState } from "react";

const Todo = () => {
  const [data, setData] = useState("");
  const [item, setItem] = useState([]);

  const addItem = () => {
    if (!data) return;

    setItem((newData) => [...newData, data]);
    setData("");
  };

  const deleteItem = (i) => {
    const newItem = item.filter((ele, index) => {
      return i !== index;
    });

    setItem(newItem);
  };

  return (
    <div className="mx-auto mt-12 flex w-11/12 flex-col items-center justify-center bg-indigo-400 py-8">
      <h1 className="my-2 text-2xl font-bold text-white">My Todo</h1>

      <form
        action=""
        onSubmit={(e) => e.preventDefault()}
        className="flex border-2 border-black bg-lime-400 p-10"
      >
        <input
          type="text"
          placeholder="Add Item"
          onChange={(e) => setData(e.target.value)}
          value={data}
          className="p-2 outline-none"
        />
        <button
          className="mx-4 border-2 border-black bg-cyan-500 px-2"
          onClick={addItem}
        >
          + Add Item
        </button>
      </form>

      <ul className="my-2">
        {item.map((itemData, index) => {
          return (
            <>
              <div className="relative flex items-center justify-between border border-white bg-teal-900 px-[155px]">
                <li
                  key={index}
                  className="  relative left-[-129px] place-items-start bg-teal-900 py-4 text-white"
                >
                  {itemData}
                </li>
                <button
                  className="absolute right-0 mx-4 border-2 border-black bg-cyan-500 px-4 "
                  onClick={() => deleteItem(index)}
                >
                  delete
                </button>
              </div>
            </>
          );
        })}
      </ul>
    </div>
  );
};

export default Todo;
