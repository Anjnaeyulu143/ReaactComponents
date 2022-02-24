// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Pagination } from ".";

// export const Pagin = () => {
//   // How to use axios to get data from api.............
//   const api = axios.create({
//     baseURL: "https://jsonplaceholder.typicode.com/posts",
//   });

//   const [data, setData] = useState([]);
//   const [perpage, setPerpage] = useState([]);

//   useEffect(() => {
//     api.get("/").then((res) => {
//       setData(res.data);
//       setPerpage(res.data.slice(0, 10));
//     });
//   }, []);

//   // console.log(data);

//   // const addToDatabase = async () => {
//   //   let res = await api.post("/", {
//   //     userId: 15,
//   //     id: 101,
//   //     title: "Hey, Iam Mr Anjan",
//   //     body: "Bye dude",
//   //   });
//   //   console.log(res);
//   // };
//   const pageHandler = (pageNumbers) => {
//     setPerpage(data.slice(pageNumbers * 10 - 10, pageNumbers * 10));
//   };
//   return (
//     <div>
//       {/* <button className="btn btn-primary" onClick={addToDatabase}>
//           Add To Database
//         </button> */}
//       {perpage.map((eachItem) => (
//         <div
//           style={{ border: "1px solid red", borderRadius: "5px" }}
//           className="m-2"
//         >
//           <h1
//             style={{
//               fontSize: "1.5rem",
//               textAlign: "center",
//               padding: "0.25em",
//             }}
//           >
//             {eachItem.title}
//           </h1>
//         </div>
//       ))}
//       <Pagination data={data} pageHandler={pageHandler} />
//     </div>
//   );
// };
