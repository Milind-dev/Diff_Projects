import { useState } from "react";

interface UseCounterProps {
  initialValue?: number;
  step?: number;
  min?: number;
  max?: number;
}


export default function useCounter({
  initialValue = 0,
  step = 1,
  min = -Infinity,
  max = Infinity,
}: UseCounterProps) {
  const [count, setCount] = useState<number>(initialValue);

  const increment = (): void => {
    setCount((prev) => Math.max(prev + step, max));
  };

  const decrement = (): void => {
    setCount((prev) => Math.min(prev - step, min));
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