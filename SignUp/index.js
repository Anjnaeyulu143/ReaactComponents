import React from "react";
import "./index.css";

export const SignUp = () => {
  return (
    <div className="d-flex align-items-center justify-content-center">
      <form style={{ width: "20em", height: "20em" }} className="p-1">
        <div>
          <label htmlFor="name" style={{ fontSize: "1rem" }}>
            Name
          </label>
          <input type="text" className="form-control w-100" id="name" />
        </div>
        <div>
          <label htmlFor="password" style={{ fontSize: "1rem" }}>
            Password
          </label>
          <input type="password" className="form-control w-100" id="password" />
        </div>
        <div className="text-right mt-3">
          <button
            className="btn btn-primary"
            onClick={(e) => e.preventDefault()}
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

// this is rendering page

// import React, { useState } from "react";
// import { Login } from "./components/Login";
// import { SignUp } from "./components/SignUp";
// import "./App.css";

// export const App = () => {
//   const [bool, setBool] = useState(false);

//   return (
//     <div className="d-flex flex-column justify-content-center align-items-center">
//       <div className="mt-5">
//         <button
//           className={bool ? "btn btn-primary " : "btn btn-secondary signUp "}
//           style={{ marginRight: "0.5em" }}
//           onClick={() => setBool(true)}
//         >
//           Sign Up
//         </button>
//         <button
//           className={bool ? "btn btn-secondary signUp " : "btn btn-primary "}
//           onClick={() => setBool(false)}
//         >
//           Login
//         </button>
//       </div>
//       {bool ? <SignUp /> : <Login />}
//     </div>
//   );
// };
