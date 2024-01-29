import React, { useState } from "react";
import useCurrencyInfo from "../hooks/useCurrencyinfo";
import InputBox from "./InputBox";

const CurrencyConverter = () => {
  const [amount, setAmount] = useState();
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);

  const options = Object.keys(currencyInfo);

  const swapHandler = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <div className="flex h-screen w-full flex-wrap items-center justify-center bg-[#023047]">
      <div className="w-full">
        <div className="border-gray-60 bg- rop-blur-sm mx-auto w-full max-w-md rounded-lg border bg-[#415a77] p-5">
          <form onSubmit={submitHandler}>
            <div className="mb-1 w-full">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currenty) => setAmount(amount)}
                selectCurrency={from}
                onAmountChange={(amount) => setAmount(amount)}
              />
            </div>
            <div className="relative h-0.5 w-full">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-md border-2 border-white bg-[#5a189a] px-2 py-0.5 text-white"
                onClick={swapHandler}
              >
                swap
              </button>
            </div>
            <div className="mb-4 mt-1 w-full">
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChhange={(currency) => setTo(currency)}
                selectCurrency={to}
                amountDisable
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-lg bg-[#5a189a] px-4 py-3 font-bold text-white duration-200 hover:bg-[#380d63]"
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CurrencyConverter;
