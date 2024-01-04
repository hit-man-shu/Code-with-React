import React, { useState } from "react";

const Todo = () => {
  const [data, setData] = useState("");
  const [item, setItem] = useState([]);
  const [toogleSubmit, setToogleSubmit] = useState(true);
  const [ediistItem, setEdiistItem] = useState(null);

  const addItem = () => {
    if (!data) {
      return;
    } else if (data && !toogleSubmit) {
      setItem(
        item.map((ele) => {
          if (ele.id === ediistItem) {
            return { ...ele, name: data };
          }
          return ele;
        }),
      );

      setData("");
      setToogleSubmit(true);
      setEdiistItem(null);
    } else {
      const allInputData = { id: Math.random().toString(), name: data };
      setItem((newData) => [...newData, allInputData]);
      setData("");
      setToogleSubmit(true);
    }
  };

  const deleteItem = (i) => {
    const newItem = item.filter((dltItem) => {
      return i !== dltItem.id;
    });

    setItem(newItem);
  };

  const editItem = (id) => {
    let newEditItem = item.find((ele) => {
      return ele.id === id;
    });

    setData(newEditItem.name);
    setToogleSubmit(false);

    setEdiistItem(id);
    // console.log(ediistItem);
  };

  let addBtn = "+ Add Item";

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
          className="mx-4 rounded-xl border-2 border-black bg-cyan-500 px-2"
          onClick={addItem}
        >
          {toogleSubmit ? addBtn : "Edit Item"}
        </button>
      </form>

      <ul className="my-2">
        {item.map((itemData) => {
          return (
            <>
              <div className="relative flex items-center justify-between border border-white bg-teal-900 px-[155px]">
                <li
                  key={itemData.id}
                  className="  relative left-[-129px] place-items-start bg-teal-900 py-4 text-white"
                >
                  {itemData.name}
                </li>

                <button
                  className="absolute right-[85px] mx-4 rounded-xl border-2 border-black bg-cyan-500 px-4 
                "
                  onClick={() => editItem(itemData.id)}
                >
                  Edit
                </button>

                <button
                  className="absolute right-0 mx-4 rounded-xl border-2 border-black bg-cyan-500 px-4 "
                  onClick={() => deleteItem(itemData.id)}
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
