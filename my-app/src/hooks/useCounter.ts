import { useState } from "react";

export default function useCounter(initialValue: number = 0 ) {
    const [count, setCount] = useState<number>(initialValue);

    const increment = (): void => {
    setCount((prev) => prev + 1);
  };

  const decrement = (): void => {
    setCount((prev) => prev - 1);
  };

  const reset = (): void => {
    setCount(initialValue);
  };

  return {
    count,
    increment,
    decrement,
    reset,
  };
}