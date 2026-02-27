import useCounter from '../hooks/useCounter';
export default function Counters() {
      const { count, increment, decrement, reset } = useCounter({
        initialValue: 0,
        step: 2,
        max: 0,
        min: 10,
      });
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}> increment </button>
      <button onClick={decrement}>➖ Decrement</button>
      <button onClick={reset}>🔄 Reset</button>
    </div>
  );
}
