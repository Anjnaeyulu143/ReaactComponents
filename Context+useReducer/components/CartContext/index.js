import React, { useState, useReducer } from "react";
import counterReducer from "../CounterReducer";
import todoReducer from "../TodoReducer";

export const Context = React.createContext();

export const CardContext = ({ children }) => {
  const [cart, setCart] = useState([]);

  const [counter, dispatch] = useReducer(counterReducer, {
    count: 0,
  });

  const [todolist, tododispatch] = useReducer(todoReducer, {
    todoList: ["Anjan"],
  });

  return (
    <>
      <Context.Provider
        value={{ cart, counter, todolist, setCart, dispatch, tododispatch }}
      >
        {children}
      </Context.Provider>
    </>
  );
};

export default CardContext;
