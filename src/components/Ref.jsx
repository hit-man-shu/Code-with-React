import React, { useRef, useState } from "react";

const Ref = () => {
  const refName = useRef("");
  const [show, setShow] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();

    let name = refName.current.value;
    name === "" ? alert("Enter valid Name") : setShow((prev) => true);
  };
  return (
    <div>
      <h1>Luckey Name</h1>

      <form action="" onSubmit={submitHandler}>
        <input type="text" ref={refName} />
        <button>Submit</button>
      </form>

      <p>{show && `Your Luckey Name is ${refName.current.value}`}</p>
    </div>
  );
};

export default Ref;
