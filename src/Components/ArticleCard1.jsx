import React from "react";
import { Card, Button, CardTitle, CardText, Row, Col } from "reactstrap";
import { navigate } from "@reach/router";

const ArticleCard1 = props => {
  const {
    title,
    author,
    created_at,
    votes,
    article_id,
    comment_count
  } = props.article;
  return (
    <Row>
      <Col sm="10">
        <Card body>
          <CardTitle>
            <h3>
              <b>{title}</b>
            </h3>
          </CardTitle>
          <CardText>
            <>
              Author: <i>{author}</i>
              <br />
              Created at: <i>{new Date(created_at).toDateString()}</i>
              <br />
              Comments: {comment_count}, Votes: {votes}
            </>
          </CardText>
          <Button
            size="sm"
            color="info"
            onClick={() => {
              return navigate(`/articles/${article_id}`);
            }}
          >
            Read more
          </Button>
        </Card>
      </Col>
    </Row>
  );
};

export default ArticleCard1;
