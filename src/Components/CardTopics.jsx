import React from "react";
import imgFootie from "../Pictures/football.jpeg";
import imgCoding from "../Pictures/coding.jpeg";
import imgCooking from "../Pictures/cooking.jpeg";
import { navigate } from "@reach/router";
import {
  Card,
  CardImg,
  // CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
  // CardGroup
} from "reactstrap";

const CardTopics = ({ topic }) => {
  return (
    <div>
      {" "}
      <Card>
        {topic.slug === "cooking" && <CardImg src={imgCooking} alt="" />}
        {topic.slug === "football" && <CardImg src={imgFootie} alt="" />}
        {topic.slug === "coding" && <CardImg src={imgCoding} alt="" />}

        <CardBody>
          <CardTitle>
            # <b>{topic.slug}</b>
          </CardTitle>
          <CardSubtitle>{topic.description}</CardSubtitle>
          <Button
            size="sm"
            color="info"
            onClick={() => {
              return navigate(`/topics/${topic.slug}`);
            }}
          >
            See articles
          </Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default CardTopics;
