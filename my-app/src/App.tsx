
import './App.css'
import useCounter from './hooks/useCounter';

function App() {
  const {count,increment,decrement,reset} = useCounter();
  return (
    <>
      <h1>{count}</h1>
      <button onClick={increment}> increment </button>
      <button onClick={decrement}>➖ Decrement</button>
      <button onClick={reset}>🔄 Reset</button>
    </>
  );
}

export default App
