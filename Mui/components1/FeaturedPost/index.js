import React from "react";
import {
  CardContent,
  Card,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import { Discription } from "../Container.style";

export const FeaturedPost = () => {
  return (
    <>
      <Card>
        <CardContent>
          <Typography variant="h4" gutterBottom>
            Title of a long featured blog post
          </Typography>
          <Typography variant="h6">
            <Discription className="mt-4">
              Mulitiple lines of text that form that lede, informing new readers
              quickly and effeciently about what's most intresting in this
              post's contents
            </Discription>
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="contained" color="primary">
            Read More ....
          </Button>
        </CardActions>
      </Card>
    </>
  );
};
