import { useState } from "react";

export function useCounter() {
  const [count, setCount] = useState<number>(0);

  function increment() {
    setCount((old) => old + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  return {
    count,
    setCount,
    increment,
    decrement,
  };
}
