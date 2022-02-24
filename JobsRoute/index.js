import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { Profile } from "../Profile";
import { Spinner, Form } from "react-bootstrap";
import JobbyHeader from "../JobbyHeader";
import SearchIcon from "@mui/icons-material/Search";

export const JobsRoute = () => {
  const [profiledata, setProfileData] = useState("");
  const [showSpinner, setShowSpinner] = useState(false);
  const [searchVal, setSearchVal] = useState("");

  const hideSpinner = (val) => {
    setShowSpinner(val);
  };

  useEffect(() => {
    getDetails(true);
  }, []);

  const inputVal = (e) => {
    e.preventDefault();
    console.log(e.target.value);
  };

  const getDetails = async () => {
    setShowSpinner(true);
    const jwtToken = Cookies.get("jwt_token");

    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: "GET",
    };

    const url = "https://apis.ccbp.in/profile";

    const response = await fetch(url, options);
    const data = await response.json();
    const profileDetails = data.profile_details;
    const updatedProfileDetails = {
      name: profileDetails.name,
      profileImageUrl: profileDetails.profile_image_url,
      shortBio: profileDetails.short_bio,
    };
    setShowSpinner(false);

    setProfileData(updatedProfileDetails);
  };
  return (
    <div>
      <>
        {showSpinner ? (
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ minHeight: "100vh" }}
          >
            <Spinner animation="border" variant="primary" />
          </div>
        ) : (
          <>
            <div style={{ backgroundColor: "black" }}>
              <JobbyHeader hideSpinner={hideSpinner} />
              <div>
                <Form
                  className="form-control"
                  onSubmit={inputVal}
                  className="p-2 m-3 mb-1 d-flex align-items-center shadow-lg"
                  style={{
                    backgroundColor: "black",
                    border: "1px solid white",
                    borderRadius: "5px",
                  }}
                >
                  <input
                    className="w-100"
                    type="text"
                    style={{
                      outline: "none",
                      borderWidth: "0px",
                      backgroundColor: "black",
                      color: "white",
                    }}
                    placeholder="Search"
                  />
                  <SearchIcon
                    className="bg-dark text-light"
                    size="md"
                    type="submit"
                  />
                </Form>
              </div>
              <Profile profiledata={profiledata} />
            </div>
          </>
        )}
      </>
    </div>
  );
};
