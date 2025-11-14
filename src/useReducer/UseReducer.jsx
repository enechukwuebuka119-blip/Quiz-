import { useReducer } from "react";

export const UseReducer = () => {
  const initialState = { count: 0 };

  const reducer = (state, action) => {
    switch (action.type) {
      case "increase":
        return { ...state, count: state.count + 1 };
      case "decrease":
        return { ...state, count: state.count - 1 };
      case "reset":
        return { ...state, count: 0 };
      case "input":
        return { ...state, count: action.payload };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <h1>Count: {state.count}</h1>
      <button onClick={() => dispatch({ type: "increase" })}>Increase</button>
      <button onClick={() => dispatch({ type: "decrease" })}>Decrease</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      <br></br>
      <input
        type="number"
        value={state.count}
        onChange={(e) => dispatch({ type: "input", payload: e.target.value })}
      />
    </>
  );
};
