import React, { useContext } from "react";
import { CardsContext } from "../CardsContext";
import { Card, Container, Button } from "react-bootstrap";

export const Cards = () => {
  const [cards, setCards] = useContext(CardsContext);

  console.log(cards);

  const removeCard = (id) => {
    const filterData = cards.filter((eachCard) => eachCard.id !== id);
    setCards([...filterData]);
  };

  return (
    <div>
      <Container className="mt-5">
        {cards.map((eachCard) => (
          <Card
            border="primary"
            style={{ width: "18rem", marginBottom: "2em" }}
            key={eachCard.id}
          >
            <Card.Body>
              <Card.Title>{eachCard.title}</Card.Title>
              <Card.Text>{eachCard.disc}</Card.Text>
            </Card.Body>
            <Card.Footer className="text-right">
              <Button
                variant="outline-danger"
                onClick={() => removeCard(eachCard.id)}
              >
                Delete
              </Button>
            </Card.Footer>
          </Card>
        ))}
      </Container>
    </div>
  );
};
