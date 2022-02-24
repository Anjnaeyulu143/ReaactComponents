import { CardContent } from "@mui/material";
import React, { useState, createContext } from "react";
import { v4 as uuidv4 } from "uuid";

export const CardsContext = React.createContext();

export const CardsProvider = (props) => {
  const [cards, setCards] = useState([
    {
      id: uuidv4(),
      title: "Relevel Card-1",
      disc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit amet labore eius! Quisquam nostrum pariatur soluta, placeat nisi in voluptates quidem, maiores assumenda impedit expedita modi ea a deleniti consequuntur?",
    },
    {
      id: uuidv4(),
      title: "Relevel Card-2",
      disc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit amet labore eius! Quisquam nostrum pariatur soluta, placeat nisi in voluptates quidem, maiores assumenda impedit expedita modi ea a deleniti consequuntur?",
    },
    {
      id: uuidv4(),
      title: "Relevel Card-3",
      disc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit amet labore eius! Quisquam nostrum pariatur soluta, placeat nisi in voluptates quidem, maiores assumenda impedit expedita modi ea a deleniti consequuntur?",
    },
    {
      id: uuidv4(),
      title: "Relevel Card-4",
      disc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit amet labore eius! Quisquam nostrum pariatur soluta, placeat nisi in voluptates quidem, maiores assumenda impedit expedita modi ea a deleniti consequuntur?",
    },
    {
      id: uuidv4,
      title: "Relevel Card-5",
      disc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit amet labore eius! Quisquam nostrum pariatur soluta, placeat nisi in voluptates quidem, maiores assumenda impedit expedita modi ea a deleniti consequuntur?",
    },
  ]);
  return (
    <CardsContext.Provider value={[cards, setCards]}>
      {props.children}
    </CardsContext.Provider>
  );
};
