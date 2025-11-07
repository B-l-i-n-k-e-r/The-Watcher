import React, { Component } from "react";
import NewsItems from "./NewsItems"; // Make sure the file name matches
import Spinner from "./Spinner";

export default class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      searchQuery: "",
      category: "general", // default category
    };
  }

  componentDidMount() {
    this.fetchNews();
  }

  componentDidUpdate(prevProps) {
    // If the category prop changes (from navbar), fetch new news
    if (prevProps.category !== this.props.category) {
      this.setState({ category: this.props.category || "general" }, () =>
        this.fetchNews()
      );
    }
  }

  fetchNews = async (query = "") => {
    this.setState({ loading: true });
    const apiKey = process.env.REACT_APP_NEWS_API_KEY;

    if (!apiKey) {
      console.error("API key is missing! Set REACT_APP_NEWS_API_KEY in .env");
      this.setState({ loading: false });
      return;
    }

    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.state.category}&apiKey=${apiKey}`;
    if (query) {
      url = `https://newsapi.org/v2/everything?q=${encodeURIComponent(
        query
      )}&apiKey=${apiKey}`;
    }

    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.status !== "ok") {
        console.error("Error fetching news:", data);
        this.setState({ articles: [], loading: false });
        return;
      }

      this.setState({ articles: data.articles || [], loading: false });
    } catch (err) {
      console.error("Error fetching news:", err);
      this.setState({ loading: false });
    }
  };

  handleSearchChange = (e) => this.setState({ searchQuery: e.target.value });

  handleSearchSubmit = (e) => {
    e.preventDefault();
    this.fetchNews(this.state.searchQuery.trim());
  };

  render() {
    const { articles, loading, searchQuery } = this.state;

    return (
      <div className="container app-container">
        {/* Search Form */}
        <form
          onSubmit={this.handleSearchSubmit}
          className="d-flex justify-content-center mb-4"
        >
          <input
            type="text"
            className="form-control w-50"
            placeholder="Search for news..."
            value={searchQuery}
            onChange={this.handleSearchChange}
          />
          <button className="btn btn-primary ms-2" type="submit">
            Search
          </button>
        </form>

        <h2 className="text-center mb-4 text-capitalize">
          {this.state.category} News
        </h2>

        {/* Loading Spinner */}
        {loading && <Spinner />}

        {/* News Articles */}
        <div className="row">
          {!loading &&
            articles.slice(0, 12).map((article, index) => (
              <NewsItems
                key={index}
                title={article.title}
                description={article.description}
                imgUrl={article.urlToImage}
                newsUrl={article.url}
                author={article.author}
                date={new Date(article.publishedAt).toLocaleString()}
              />
            ))}
        </div>

        {/* No Articles Found */}
        {!loading && articles.length === 0 && (
          <p className="text-center text-muted mt-5">
            No news articles found. Try searching for something else.
          </p>
        )}
      </div>
    );
  }
}
