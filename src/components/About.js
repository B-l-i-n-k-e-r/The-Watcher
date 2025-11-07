import React, { Component } from "react";
import dpImg from "../assets/dp.jpeg"; 
import a from "../assets/a.jpg";
// Make sure you have font-awesome installed: 
// npm install @fortawesome/react-fontawesome @fortawesome/free-brands-svg-icons @fortawesome/fontawesome-svg-core
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

export default class About extends Component {
  state = { email: "" };

  handleChange = (e) => this.setState({ email: e.target.value });

  handleSubscribe = () => {
    if (!this.state.email) {
      alert("Please enter your email!");
      return;
    }
    // You could connect this to your newsletter backend
    alert(`Thanks for subscribing: ${this.state.email}`);
    this.setState({ email: "" });
  };

  render() {
    return (
      <div className="container my-5">
        {/* HEADER */}
        <section className="text-center mb-5">
          <h1 className="display-5 fw-bold mb-3">About Our Portal</h1>
          <p className="lead text-muted mx-auto" style={{ maxWidth: "750px" }}>
            Welcome to <strong>NewsVerse</strong> — your trusted hybrid news and
            blog portal bringing you the latest updates, in-depth analysis, and
            inspiring stories from around the globe.
          </p>
        </section>

        {/* IMAGE + TEXT SECTION */}
        <section className="row align-items-center my-5">
          <div className="col-md-6 mb-4 mb-md-0">
            <img src={a} alt="About us" className="img-fluid rounded shadow" />
          </div>
          <div className="col-md-6">
            <h2 className="fw-semibold mb-3">Our Mission</h2>
            <p className="text-muted">
              At NewsVerse, our mission is to empower readers with knowledge,
              encourage independent thinking, and foster informed discussions.
            </p>
            <p className="text-muted">
              Our hybrid model bridges the world of journalism and personal
              storytelling, so you get professional accuracy and authentic human
              experiences all in one place.
            </p>
          </div>
        </section>

        {/* TEAM / AUTHOR SECTION */}
        <section className="text-center my-5">
          <h2 className="fw-bold mb-4">Meet the Creator</h2>
          <div className="d-flex justify-content-center">
            <div
              className="card border-0 shadow-sm p-4"
              style={{ maxWidth: "400px", borderRadius: "1rem" }}
            >
              <img
                src={dpImg}
                className="rounded-circle mx-auto mb-3"
                alt="Author"
                width="120"
                height="120"
              />
              <h5 className="fw-semibold mb-1">Mariba Vincent</h5>
              <p className="text-muted small mb-3">Full Stack Developer</p>
              <p className="text-muted" style={{ fontSize: "0.9rem" }}>
                Passionate about creating modern, responsive web experiences.
                Building a portal that informs, inspires, and connects people.
              </p>
            </div>
          </div>
        </section>

        {/* CALL TO ACTION */}
        <section className="bg-dark text-white text-center py-5 rounded shadow-sm mt-5">
          <h3 className="fw-bold mb-3">Join Our Community</h3>
          <p className="text-light mb-4" style={{ maxWidth: "600px", margin: "0 auto" }}>
            Stay informed. Stay inspired. Subscribe to get the latest updates.
          </p>

          {/* Email Input + Subscribe Button */}
          <div className="d-flex justify-content-center mb-3">
            <input
              type="email"
              placeholder="Enter your email"
              value={this.state.email}
              onChange={this.handleChange}
              className="form-control w-50 me-2"
            />
            <button
              type="button"
              className="btn btn-light px-4 py-2 fw-semibold"
              onClick={this.handleSubscribe}
            >
              Subscribe Now
            </button>
          </div>

          {/* Social Media Icons */}
          <div className="d-flex justify-content-center gap-3 mt-3">
            <a href="https://wa.me/" target="_blank" rel="noreferrer" className="text-white fs-4">
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="text-white fs-4">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noreferrer" className="text-white fs-4">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" className="text-white fs-4">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
          </div>
        </section>
      </div>
    );
  }
}
