// import React from "react";

// export const Pagination = (props) => {
//   const { data, pageHandler } = props;
//   // console.log(data.length);
//   const pageNumbers = [];
//   for (let i = 1; i <= data.length / 10; i++) {
//     pageNumbers.push(i);
//   }
//   console.log(pageNumbers);

//   return (
//     <div>
//       <center>
//         {pageNumbers.map((item) => (
//           <button
//             className="btn btn-primary m-1"
//             onClick={() => pageHandler(item)}
//           >
//             {item}
//           </button>
//         ))}
//       </center>
//     </div>
//   );
// };
