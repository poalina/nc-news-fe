import React from "react";
import { Link } from "@reach/router";
export default function ArticleCard(props) {
  const { article } = props;
  return (
    <div>
      {" "}
      <Link to={`/articles/${article.article_id}`}>
        {" "}
        <li>{article.title}</li>
      </Link>
    </div>
  );
}
