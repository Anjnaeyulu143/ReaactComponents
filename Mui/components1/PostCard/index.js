import React from "react";
import {
  CardActionArea,
  Grid,
  Card,
  makeStyles,
  CardContent,
  Typography,
  CardMedia,
  Hidden,
} from "@mui/material";

export const PostCard = ({ post }) => {
  return (
    <>
      <Grid item xs={12} md={6}>
        <CardActionArea component="a" href="#">
          <Card>
            <div>
              <CardContent>
                <Typography component="h2" variant="h5">
                  {post.title}
                </Typography>
                <Typography varaint="subtitle1" color="textSecondary">
                  {post.date}
                </Typography>
                <Typography variant="subtitle1" paragraph>
                  {post.description}
                </Typography>
                <Typography variant="subtitle1" style={{ color: "skyblue" }}>
                  Continue Reading....
                </Typography>
              </CardContent>
            </div>
            <Hidden xsDown>
              <CardMedia image={post.image} style={{ maxWidth: "40em" }} />
            </Hidden>
          </Card>
        </CardActionArea>
      </Grid>
    </>
  );
};
