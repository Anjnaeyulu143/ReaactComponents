// import React from "react";
// import { choicesList } from "../../App";

// export const PlayGame = ({ setRandomId, setSelectedId }) => {
//   const random = (eachItem) => {
//     const random = Math.ceil(Math.random() * choicesList.length);
//     const randomNum = random - 1;

//     const randomObject = choicesList[randomNum];
//     setRandomId(randomObject.id);
//     setSelectedId(eachItem.id);
//   };

//   return (
//     <div
//       className="mt-4"
//       style={{
//         display: "flex",
//         flexWrap: "wrap",
//         justifyContent: "center",
//         alignItems: "center",
//       }}
//     >
//       {choicesList.map((eachItem) => (
//         <div style={{ maxWidth: "10em" }}>
//           <img
//             src={eachItem.imageUrl}
//             style={{ objectFit: "cover" }}
//             className="w-100"
//             onClick={() => random(eachItem)}
//           />
//         </div>
//       ))}
//     </div>
//   );
// };
