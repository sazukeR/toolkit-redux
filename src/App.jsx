import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  incrementBy,
} from "./store/slices/counter/counterSlice";

function App() {
  const { counter } = useSelector((state) => state.counter); // USESELECTOR PARA SELECCIONAR ALGO DEL STORE
  const dispatch = useDispatch();
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <p>count is {counter}</p>
      <div className="card">
        <button onClick={() => dispatch(decrement())}>decrement</button>
        <button onClick={() => dispatch(increment())}>increment</button>
        <button onClick={() => dispatch(incrementBy(2))}>incrementBy 2</button>
      </div>
    </>
  );
}

export default App;
