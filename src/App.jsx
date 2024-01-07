import React from "react";
import BgChanger from "./components/BgChanger";
import Counter from "./components/Counter";
import Todo from "./components/Todo";
import PasswordGenerator from "./components/PasswordGenerator";
import Ref from "./components/Ref";
import CurrencyConverter from "./components/CurrencyProject/CurrencyConverter";
// import MyProp from "./components/MyProp";

const App = () => {
  const userName = "Himanshu";

  // const myObj = [
  //   {
  //     name: "Himanshu",
  //     age: [22],
  //   },
  //   {
  //     friendName: "Subham",
  //     age: [24],
  //   },
  // ];

  return (
    <>
      <div className="text-balck-400 bg-slate-500 text-center text-2xl font-bold">
        {userName}'s Projects
      </div>

      {/* <Counter /> */}
      {/* <Todo /> */}
      {/* <MyProp obj={myObj} /> */}

      {/* <BgChanger /> */}

      {/* <PasswordGenerator /> */}

      {/* <Ref /> */}

      <CurrencyConverter />
    </>
  );
};

export default App;
