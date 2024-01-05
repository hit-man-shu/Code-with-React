import React from "react";
import BgChanger from "./components/BgChanger";
import Counter from "./components/Counter";
import Todo from "./components/Todo";
import PasswordGenerator from "./components/PasswordGenerator";
import Ref from "./components/Ref";
import LoginForm from "./components/Form/LoginForm";
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
      <div className="bg-red-500 text-center text-2xl font-bold text-green-400">
        Hello World {userName}
      </div>

      {/* <Counter /> */}
      {/* <Todo /> */}
      {/* <MyProp obj={myObj} /> */}

      {/* <BgChanger /> */}

      {/* <PasswordGenerator /> */}

      {/* <Ref/> */}

      <LoginForm />
    </>
  );
};

export default App;
