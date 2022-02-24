import React from "react";
import { Card, Grid, Paper, Typography, Link } from "@mui/material";

export const Sidebar = (props) => {
  const { title, description, archives, social } = props;

  return (
    <Grid items xs={12} md={4}>
      <div style={{ paddingTop: "32px", paddingLeft: "32px" }}>
        <Card style={{ padding: "16px" }}>
          <Typography variant="h6" gutterBottom>
            {title}
          </Typography>
          <Typography>{description}</Typography>
        </Card>
      </div>
    </Grid>
  );
};
