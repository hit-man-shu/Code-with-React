import React, { useState } from "react";

const LoginForm = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [allEntery, setAllEntery] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();

    const newEntry = {
      id: Math.random().toString(),
      name,
      password,
    };

    if (name.trim().length === 0 || password.trim().length === 0) {
      alert("Invalid Id or pass");
      return;
    }
    setAllEntery((prev) => [...prev, newEntry]);

    setName("");
    setPassword("");
  };

  return (
    <div>
      <form action="" onSubmit={submitHandler}>
        <div>
          <label htmlFor="">UserName</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button>Submit</button>
      </form>

      <div>
        {allEntery.map((ele) => {
          return (
            <div
              key={ele.id}
            >{`Name is ${ele.name} and password is ${ele.password}`}</div>
          );
        })}
      </div>
    </div>
  );
};

export default LoginForm;
