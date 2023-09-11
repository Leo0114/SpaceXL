import { useState } from "preact/hooks";

export const Counter = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div class=" mx-auto text-center pb-8">
      <span class=" text-yellow-400 text-xl mr-4">{counter}</span>
      <button
        class=" border px-4 text-xl py-2"
        onClick={() => setCounter((counter) => counter + 1)}
      >
        +
      </button>
      <button
        class=" border px-4 text-xl py-2"
        onClick={() => setCounter((counter) => counter - 1)}
      >
        -
      </button>
    </div>
  );
};
