import React from "react";

export const Modal = (props) => {
  const { openModal } = props;
  return (
    <div
      className="modalBackground card shadow-lg mt-5 text-center"
      style={{ maxWidth: "30em", minHeight: "15em" }}
    >
      <div className="modalContainer p-3">
        <div className="text-right mb-3">
          <button
            onClick={() => openModal(false)}
            className="btn btn-secondary"
          >
            X
          </button>
        </div>

        <div className="modalTitle">
          <h1 style={{ fontSize: "1.4rem" }}>
            Are, you sure want to continue?
          </h1>
        </div>
        <div className="modalBody">
          <p>The next page is awesome....</p>
        </div>
        <div className="modalFooter text-center">
          <button
            onClick={() => openModal(false)}
            className="btn btn-danger m-1"
          >
            Cancel
          </button>
          <button className="btn btn-primary m-1">Continue</button>
        </div>
      </div>
    </div>
  );
};

// app component code okkk??

// import React, { useState } from "react";
// import "./App.css";
// import { Modal } from "./components/Modal";

// export const App = () => {
//   const [bool, setBool] = useState(false);

//   return (
//     <>
//       <div
//         className="d-flex flex-column align-items-center"
//         style={{ maxWidth: "100vw", minHeight: "100vh" }}
//       >
//         <p style={{ fontSize: "2rem" }}>
//           Hey, click on the button to open the modal
//         </p>
//         <button className="btn btn-primary " onClick={() => setBool(true)}>
//           Open
//         </button>
//         <div>{bool && <Modal openModal={setBool} />}</div>
//       </div>
//     </>
//   );
// };
