import React, { Component } from "react";

export default class FeaturedArticles extends Component {
  // Optional: static sample data for now (replace with API data later)
  state = {
    featured: [
      {
        title: "At daybreak of the fifteenth day of my search",
        image:
          "https://images.unsplash.com/photo-1508057198894-247b23fe5ade?auto=format&fit=crop&w=800&q=80",
        date: "February 1, 2025",
        category: "Featured",
        description:
          "When the amphitheater had cleared, I crept stealthily to the top and as the great excavation lay beneath me...",
      },
      {
        title: "The sunset faded to twilight",
        image:
          "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
        date: "April 18, 2025",
        category: "Travel",
        description:
          "I began walking, therefore, in a big curve, seeking some point of vantage and continually looking ahead...",
      },
      {
        title: "Then going through some small strange motions",
        image:
          "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
        date: "April 18, 2025",
        category: "Lifestyle",
        description:
          "A moderate incline runs towards the foot of Maybury Hill, and down this we clattered once the lightning had begun...",
      },
    ],
  };

  render() {
    return (
      <div className="container my-5">
        {/* SECTION HEADER */}
        <div className="text-center mb-5">
          <h2 className="fw-bold">Featured Articles</h2>
          <p className="text-muted">
            Explore our editor’s top picks and trending stories of the week.
          </p>
        </div>

        {/* FEATURED GRID */}
        <div className="row">
          {this.state.featured.map((article, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card border-0 shadow-sm h-100">
                <div className="position-relative">
                  <img
                    src={article.image}
                    className="card-img-top rounded-top"
                    alt={article.title}
                    style={{ height: "220px", objectFit: "cover" }}
                  />
                  <span
                    className="badge bg-dark position-absolute top-0 start-0 m-3 px-3 py-2"
                    style={{ fontSize: "0.8rem" }}
                  >
                    {article.category}
                  </span>
                </div>

                <div className="card-body">
                  <h5 className="card-title fw-semibold">{article.title}</h5>
                  <p className="text-muted small mb-2">{article.date}</p>
                  <p className="card-text text-muted" style={{ fontSize: "0.9rem" }}>
                    {article.description}
                  </p>
                  <button className="btn btn-link text-primary p-0 border-0 bg-transparent">
  Read More
</button>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
