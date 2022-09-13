import { createStore } from "redux";

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const ADD = "ADD";

export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT });
export const add = (value) => ({ type: ADD, payload: value });

const reducer = (state = { count: 13 }, action) => {
  if (action.type === INCREMENT) {
    return { count: state.count + 1 };
  }
  if (action.type === DECREMENT) {
    return { count: state.count - 1 };
  }
  if (action.type === ADD) {
    return { count: parseInt(action.payload, 10) };
  }
  return state;
};

const enhancer =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export const store = createStore(reducer, enhancer);
