import React from "react";
import imgFootie from "../Pictures/football.jpeg";
import imgCoding from "../Pictures/coding.jpeg";
import imgCooking from "../Pictures/cooking.jpeg";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardDeck,
  Button
} from "reactstrap";

export default function Card2() {
  return (
    <CardDeck>
      <Card>
        <CardImg top width="100%" src={imgCoding} alt="Card image cap" />
        <CardBody>
          <CardTitle>Coding</CardTitle>
          <CardSubtitle>subtitle</CardSubtitle>
          <CardText>TEXT</CardText>
          <Button>Read more</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src={imgCooking} alt="Card image cap" />
        <CardBody>
          <CardTitle>Cooking</CardTitle>
          <CardSubtitle>subtitle</CardSubtitle>
          <CardText>TEXT</CardText>
          <Button>Read more</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src={imgFootie} alt="Card image cap" />
        <CardBody>
          <CardTitle>Football</CardTitle>
          <CardSubtitle>subtitle</CardSubtitle>
          <CardText>TEXT</CardText>
          <Button>Read more</Button>
        </CardBody>
      </Card>
    </CardDeck>
  );
}
