import React from "react";
import Container from "@mui/material/Container";
import { Header } from "./components1/Header";
import { createTheme, ThemeProvider, Grid } from "@mui/material";
import { FeaturedPost } from "./components1/FeaturedPost";
import { featuredPosts, sidebar } from "./data/Data";
import { PostCard } from "./components1/PostCard";
import { Main } from "./components1/Main";
import { Sidebar } from "./components1/Sidebar";
import "./App.css";

export const App = () => {
  const theme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Header />
        <FeaturedPost />
        <br />
        <Grid container spacing={4}>
          {featuredPosts.map((post) => (
            <PostCard post={post} key={post.title} />
          ))}
        </Grid>
        <Grid container spacing={2}>
          <Main title="For the Firehouse" />
          <Sidebar
            title={sidebar.title}
            description={sidebar.description}
            archives={sidebar.archives}
            social={sidebar.social}
          />
        </Grid>
      </Container>
    </ThemeProvider>
  );
};
