import React, { useState } from "react";
import styles from "./index.module.css";

export default function InputForm() {
  const [userInput, setUserInput] = useState("");
  const [data, setData] = useState(["anjna", "vinay"]);
  const [search, setSearch] = useState("");
  console.log(userInput);
  console.log(data);
  const addData = () => {
    setData([...data, userInput]);
    setUserInput("");
  };

  const filterData = data.filter((item) => item.includes(search));
  return (
    <div className={styles.inputform}>
      <h2>Anjaneyulu</h2>
      <input
        type="text"
        placeholder="add or search"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />
      <button onClick={addData}>addTo</button>

      <input
        type="search"
        value={search}
        placeholder="search"
        onChange={(e) => setSearch(e.target.value)}
      />
      {filterData.map((eachItem) => (
        <p>{eachItem}</p>
      ))}
    </div>
  );
}
