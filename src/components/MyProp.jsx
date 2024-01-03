import React from "react";

const MyProp = ({ obj }) => {
  return (
    <>
      <h1>
        {`My name is ${obj[0]["name"]} and my age is ${obj[0]["age"][0]}`}
      </h1>

      <h1>{`And my Friend name is ${obj[1]["friendName"]} and his age is ${obj[1]["age"][0]}`}</h1>

      <h1>{`Me my self is ${obj[0]?.name || "sahoo"}`}</h1>
    </>
  );
};

export default MyProp;
