import React, { useContext, useState } from "react";
import { Button } from "@mui/material";
import {
  Card,
  Container,
  Typography,
  CardActionArea,
  CardContent,
} from "@mui/material";
import { Context } from "../CartContext";
import { Rating } from "../Rating";

export const SingleProduct = ({ data }) => {
  const { cart, setCart } = useContext(Context);
  const [rate, setRate] = useState(3);
  return (
    <Container>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {data.map((prod) => (
          <Card
            sx={{ maxWidth: 345, padding: "1em", margin: ".5em" }}
            data-aos="fade-down"
          >
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {`product id ${prod.id}`}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
                <Typography>
                  <Rating rate={rate} />
                </Typography>
              </CardContent>
            </CardActionArea>

            {cart.includes(prod) ? (
              <Button
                fullWidth
                onClick={() => {
                  setCart(cart.filter((c) => c.id !== prod.id));
                }}
              >
                Remove from the Cart
              </Button>
            ) : (
              <Button
                fullWidth
                variant="outlined"
                onClick={() => {
                  const hasProd = cart.find((i) => i.id === prod.id);
                  if (!hasProd) {
                    setCart([...cart, prod]);
                  }
                }}
              >
                Add to the Cart
              </Button>
            )}
          </Card>
        ))}
      </div>
    </Container>
  );
};
