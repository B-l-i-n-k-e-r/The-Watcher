import React, { Component } from "react";
import NewsItems from "./NewsItems";
import Spinner from "./Spinner";

export default class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      searchQuery: "",
      category: this.props.category || "general",
    };
  }

  componentDidMount() {
    this.fetchNews();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.category !== this.props.category) {
      this.setState({ category: this.props.category || "general" }, () =>
        this.fetchNews()
      );
    }
  }

  fetchNews = async (query = "") => {
    this.setState({ loading: true });
    const apiKey = process.env.REACT_APP_GNEWS_API_KEY;

    if (!apiKey) {
      console.error("API key is missing! Set REACT_APP_GNEWS_API_KEY in .env");
      this.setState({ loading: false });
      return;
    }

    let url = query
      ? `https://gnews.io/api/v4/search?q=${encodeURIComponent(
          query
        )}&lang=en&country=us&max=12&apikey=${apiKey}`
      : `https://gnews.io/api/v4/top-headlines?category=${
          this.state.category
        }&lang=en&country=us&max=12&apikey=${apiKey}`;

    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      const data = await response.json();

      if (!data.articles || data.articles.length === 0) {
        this.setState({ articles: [], loading: false });
        return;
      }

      const formattedArticles = data.articles.map((article) => ({
        title: article.title,
        description: article.description,
        imgUrl: article.image || "https://via.placeholder.com/400x200",
        newsUrl: article.url,
        author: article.source.name || "Unknown",
        date: new Date(article.publishedAt).toLocaleString(),
      }));

      this.setState({ articles: formattedArticles, loading: false });
    } catch (err) {
      console.error("Error fetching news:", err);
      this.setState({ articles: [], loading: false });
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

        {loading && <Spinner />}

        <div className="row">
          {!loading &&
            articles.map((article, index) => (
              <NewsItems
                key={index}
                title={article.title}
                description={article.description}
                imgUrl={article.imgUrl}
                newsUrl={article.newsUrl}
                author={article.author}
                date={article.date}
              />
            ))}
        </div>

        {!loading && articles.length === 0 && (
          <p className="text-center text-muted mt-5">
            No news articles found. Try searching for something else.
          </p>
        )}
      </div>
    );
  }
};
