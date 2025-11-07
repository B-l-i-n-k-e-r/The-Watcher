import React from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();

  const categories = [
    { name: "General", path: "/general" },
    { name: "Politics", path: "/politics" },
    { name: "Business", path: "/business" },
    { name: "Entertainment", path: "/entertainment" },
    { name: "Health", path: "/health" },
    { name: "Science", path: "/science" },
    { name: "Sports", path: "/sports" },
    { name: "Technology", path: "/technology" },
  ];

  const trending = [
    "AI Revolution",
    "Global Warming",
    "SpaceX Launch",
    "Cybersecurity",
    "Stock Market Crash",
    "Electric Vehicles",
  ];

  return (
    <aside
      className="sidebar p-3 rounded shadow-sm"
      style={{
        background: "rgba(255,255,255,0.85)",
        backdropFilter: "blur(8px)",
        borderRadius: "10px",
        height: "fit-content",
        position: "sticky",
        top: "100px",
      }}
    >
      {/* 🏷️ Categories Section */}
      <div className="mb-4">
        <h5 className="fw-bold text-dark mb-3">Categories</h5>
        <ul className="list-unstyled">
          {categories.map((cat) => (
            <li key={cat.name} className="my-2">
              <Link
                to={cat.path}
                className={`text-decoration-none fw-medium ${
                  location.pathname === cat.path
                    ? "text-info"
                    : "text-dark"
                }`}
              >
                {cat.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* 🔥 Trending Topics */}
      <div className="mb-4">
        <h5 className="fw-bold text-dark mb-3">🔥 Trending</h5>
        <ul className="list-unstyled">
          {trending.map((topic, i) => (
            <li key={i} className="text-muted mb-2">
              • {topic}
            </li>
          ))}
        </ul>
      </div>

      {/* 📰 Newsletter Box */}
      <div
        className="p-3 rounded"
        style={{
          background: "#111",
          color: "#fff",
        }}
      >
        <h6 className="fw-bold mb-2">Subscribe to our Newsletter</h6>
        <p className="small text-light mb-3">
          Stay updated with the latest headlines and stories.
        </p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("Thanks for subscribing!");
          }}
        >
          <input
            type="email"
            className="form-control mb-2"
            placeholder="Enter your email"
            required
          />
          <button type="submit" className="btn btn-info w-100">
            Subscribe
          </button>
        </form>
      </div>

      {/* 🌐 Social Links */}
      <div className="mt-4 text-center">
        <a href="https://facebook.com" target="_blank" rel="noreferrer" className="mx-2 text-dark">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noreferrer" className="mx-2 text-dark">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer" className="mx-2 text-dark">
          <i className="fab fa-instagram"></i>
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;
