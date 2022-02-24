import React from "react";
import { Card } from "react-bootstrap";
import { Avatar } from "@mui/material";
import "./index.css";
export const Profile = ({ profiledata }) => {
  console.log(profiledata);
  console.log(profiledata.profileImageUrl);
  return (
    <>
      <div className="d-flex justify-content-center">
        <Card
          style={{ width: "28rem", borderRadius: "10px" }}
          className="profile__bg p-3 m-3"
        >
          <Avatar
            src={profiledata.profileImageUrl}
            sx={{
              height: 75,
              width: 75,
            }}
          />
          <h1>{profiledata.name}</h1>
          <p>{profiledata.shortBio}</p>
        </Card>
      </div>
    </>
  );
};
