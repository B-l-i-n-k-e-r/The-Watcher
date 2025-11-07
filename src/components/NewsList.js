import React from "react";
import NewsItems from "./NewsItems";

const NewsList = ({ articles }) => {
  return (
    <div className="row">
      {articles.length === 0 && (
        <p className="text-center text-muted">No articles found.</p>
      )}

      {articles.map((article, index) => (
        <div className="col-md-4 mb-4" key={index}>
          <NewsItems
            title={article.title ? article.title.slice(0, 80) : ""}
            description={
              article.description ? article.description.slice(0, 120) : ""
            }
            imgUrl={article.urlToImage}
            newsUrl={article.url}
            author={article.author}
            date={article.publishedAt}
          />
        </div>
      ))}
    </div>
  );
};

export default NewsList;
