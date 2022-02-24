import React from "react";

export const Login = () => {
  return (
    <div className="d-flex align-items-center justify-content-center">
      <form style={{ width: "20em", height: "20em" }} className="p-3">
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
            onClick={(e) => {
              e.preventDefault();
              window.confirm("you want to conformly login to this account");
            }}
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};
