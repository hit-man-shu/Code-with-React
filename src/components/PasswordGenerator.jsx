import React, { useCallback, useEffect, useRef, useState } from "react";

const PasswordGenerator = () => {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [Password, setPassword] = useState("");
  const [copyclick, SetCopyclick] = useState(false);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxzy";

    if (numberAllowed) {
      str += "0123456789";
    }

    if (charAllowed) {
      str += "!@#$%^&*()-_=+|{};:/?";
    }

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);

      pass += str.charAt(char);
    }

    setPassword(pass);
    console.log(Password);
  }, [length, numberAllowed, charAllowed, setPassword]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed]);

  //    Ref Hook
  const passwordRefrence = useRef(null);
  const copyPasswordToClikboard = () => {
    passwordRefrence.current?.select();
    window.navigator.clipboard.writeText(Password);
    SetCopyclick((prev) => (prev = true));
  };

  return (
    <>
      <div className="mx-auto my-8 w-full max-w-md rounded-lg bg-[#7b2cbf] px-4 py-3 text-white shadow-md">
        <h1 className="my-2 text-center text-white">Password generator</h1>
        <div className="mb-4 flex overflow-hidden rounded-lg shadow-md">
          <input
            type="text"
            value={Password}
            className="w-full bg-[#ad5fed] px-3 py-1 outline-none"
            placeholder="password"
            readOnly
            ref={passwordRefrence}
          />

          <button
            className="shrink-0 bg-[#ff477e] px-3 py-0.5 text-white outline-none"
            onClick={() => copyPasswordToClikboard()}
          >
            {copyclick ? "Copied" : "Copy"}
          </button>
        </div>

        <div className="flex gap-x-2 text-sm">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={8}
              max={20}
              value={length}
              className="cursor-pointer"
              onChange={(e) => (setLength(e.target.value), SetCopyclick(false))}
            />
            <label>Length : {length}</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => (
                setNumberAllowed((prev) => !prev), SetCopyclick(false)
              )}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => (
                setCharAllowed((prev) => !prev), SetCopyclick(false)
              )}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
};

export default PasswordGenerator;
