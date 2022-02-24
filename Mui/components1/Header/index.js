import React from "react";
import Toolbar from "@mui/material/Toolbar";
import { Divider, IconButton, Typography } from "@mui/material";
import Badge from "@mui/material/Badge";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import { Title } from "../Container.style";
import SideDrawer from "../SideDrawer";
// import classes from "*.module.css";

// const useStyles = makeStyles((theme) => ({
//   title: {
//     flexGrow: 1,
//   },
// }));

export const Header = () => {
  // const classes = useStyles();

  return (
    <>
      <Toolbar>
        <SideDrawer>
          <IconButton style={{ color: "black" }}>
            <MenuIcon />
          </IconButton>
        </SideDrawer>

        <Typography variant="h6">Blogging Website</Typography>
        <div className="ml-auto">
          <IconButton color="inherit">
            <Badge badgeContent={4} color="primary">
              <CircleNotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton color="inherit">
            <AccountCircleIcon />
          </IconButton>
        </div>
      </Toolbar>
      <Divider />
      <Title>Express your emotions through words</Title>
    </>
  );
};
