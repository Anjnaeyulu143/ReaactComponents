import React from "react";

const Pagin1 = (props) => {
  const { data, pageHandler } = props;
  const numbersArray = [];
  for (let i = 1; i <= data.length / 10; i++) {
    numbersArray.push(i);
  }
  console.log(numbersArray);
  return (
    <div>
      <center>
        {numbersArray.map((num, index) => (
          <button
            className="btn btn-primary m-1"
            onClick={() => pageHandler(num)}
            key={index}
          >
            {num}
          </button>
        ))}
      </center>
    </div>
  );
};

export default Pagin1;
