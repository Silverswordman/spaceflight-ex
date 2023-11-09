import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Infos } from "../Interfaces/Infos";
import Col from "react-bootstrap/esm/Col";

const SpaceCard = (props: { Infos: Infos }) => {
  const { Infos } = props;

  return (
    <Col xs={12} sm={6} md={4} className="m-2 ">
      <Card className="h-100">
        <Card.Img variant="top" src={Infos.image_url} />
        <Card.Text className="small">{Infos.published_at}</Card.Text>
        <Card.Body className=" d-flex  flex-column  ">
          <Card.Title>{Infos.title}</Card.Title>
          <Card.Text>{Infos.summary}</Card.Text>

          <Button variant="info" className="align-self-end  " href={Infos.url}>
            More
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default SpaceCard;
