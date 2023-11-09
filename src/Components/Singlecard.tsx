import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Infos } from "../Interfaces/Infos";
import Col from "react-bootstrap/esm/Col";

const SpaceCard = (props: { Infos: Infos }) => {
  const { Infos } = props;

  return (
    <Col>
      <Card>
        <Card.Img variant="top" src={Infos.image_url} />
        <Card.Body>
          <Card.Title>{Infos.title}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default SpaceCard;
