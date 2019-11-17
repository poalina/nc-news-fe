import React from "react";
import imgFootie from "../Pictures/football.jpeg";
import imgCoding from "../Pictures/coding.jpeg";
import imgCooking from "../Pictures/cooking.jpeg";
import { navigate } from "@reach/router";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";

export default function ArticleCard2(props) {
  const { title, author, created_at, article_id, topic } = props.article;

  return (
    <Card>
      {topic === "cooking" && (
        <CardImg top width="100%" src={imgCooking} alt="" />
      )}
      {topic === "football" && (
        <CardImg top width="100%" src={imgFootie} alt="" />
      )}
      {topic === "coding" && (
        <CardImg top width="100%" src={imgCoding} alt="" />
      )}

      <CardBody>
        <CardTitle>
          <b>{title}</b>
        </CardTitle>
        <CardSubtitle>
          Author: <i>{author}</i>
        </CardSubtitle>
        <CardText>
          Created at: <i>{new Date(created_at).toDateString()}</i>
        </CardText>
        <Button
          color="info"
          onClick={() => {
            return navigate(`/articles/${article_id}`);
          }}
        >
          Read more
        </Button>
      </CardBody>
    </Card>
  );
}
