import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function NavBar() {
  const location = useLocation();

  useEffect(() => {
    // Collapse navbar whenever route changes
    const navbarCollapse = document.getElementById("navbarSupportedContent");
    if (navbarCollapse && navbarCollapse.classList.contains("show")) {
      const bsCollapse = new window.bootstrap.Collapse(navbarCollapse, { toggle: true });
      bsCollapse.hide();
    }
  }, [location]);

  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">The Watcher</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
            <li className="nav-item dropdown">
              <button
                className="nav-link dropdown-toggle btn btn-link text-white"
                id="navbarDropdown"
                data-bs-toggle="dropdown"
              >
                Category
              </button>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><Link className="dropdown-item" to="/general">General</Link></li>
                <li><Link className="dropdown-item" to="/politics">Politics</Link></li>
                <li><hr className="dropdown-divider" /></li>
                <li><Link className="dropdown-item" to="/business">Business</Link></li>
                <li><Link className="dropdown-item" to="/entertainment">Entertainment</Link></li>
                <li><Link className="dropdown-item" to="/health">Health</Link></li>
                <li><Link className="dropdown-item" to="/science">Science</Link></li>
                <li><Link className="dropdown-item" to="/sports">Sports</Link></li>
                <li><Link className="dropdown-item" to="/technology">Technology</Link></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
