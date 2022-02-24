import React from "react";
import { Divider, Grid, Typography } from "@mui/material";
import Markdown from "markdown-to-jsx";
import { posts } from "../../data/Data";

export const Main = ({ title }) => {
  return (
    <Grid item xs={12} md={8}>
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <Divider />
      {posts.map((post) => (
        <Markdown key={post.body}>{post.body}</Markdown>
      ))}
    </Grid>
  );
};
