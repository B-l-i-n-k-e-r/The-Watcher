import React from "react";

const NewsItems = ({ title, description, imgUrl, newsUrl, author, date }) => {
  const defaultUrl =
    "https://i.pinimg.com/originals/d1/a6/2a/d1a62a6d8969170025f279115470e34b.jpg";

  // Shorten description without cutting mid-word
  const shortDescription = description
    ? description.length > 100
      ? description.slice(0, 100).replace(/\s+\S*$/, "") + "..."
      : description
    : "No description available.";

  return (
    <div className="col-md-4 mb-4">
      <div className="news-card card border-0 shadow-sm h-100 overflow-hidden">
        {/* 🖼️ Image */}
        <div className="news-image-wrapper position-relative">
          <img
            src={imgUrl || defaultUrl}
            alt={title || "News Thumbnail"}
            className="card-img-top"
            style={{
              height: "200px",
              objectFit: "cover",
              transition: "transform 0.4s ease-in-out",
            }}
            onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          />
        </div>

        {/* 📰 Content */}
        <div className="card-body d-flex flex-column justify-content-between">
          <div>
            <h5 className="card-title fw-semibold">{title}</h5>
            <p className="card-text text-muted small mb-2">{shortDescription}</p>
          </div>

          <div>
            <p className="text-secondary small mb-2">
              By <b>{author || "Unknown"}</b> • {date ? new Date(date).toLocaleDateString() : "Unknown Date"}
            </p>

            <a
              href={newsUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm btn-dark rounded-pill fw-semibold"
            >
              Read More →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsItems;
