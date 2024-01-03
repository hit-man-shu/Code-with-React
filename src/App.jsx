import React from "react";
import First from "./components/First";
import Todo from "./components/Todo";

const App = () => {
  const userName = "Himanshu";

  return (
    <>
      <div className="bg-red-500 text-center text-2xl font-bold text-green-400">
        Hello World {userName}
      </div>

      <First />
      <Todo />
    </>
  );
};

export default App;
