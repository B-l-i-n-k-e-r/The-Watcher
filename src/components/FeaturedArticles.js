import React, { useEffect, useState } from "react";
import Spinner from "./Spinner";

export default function FeaturedArticles() {
  const [generalNews, setGeneralNews] = useState([]);
  const [trendingNews, setTrendingNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const apiKey = process.env.REACT_APP_GNEWS_API_KEY;

  useEffect(() => {
    const fetchArticles = async () => {
      setLoading(true);
      if (!apiKey) {
        console.error("API key missing! Set REACT_APP_GNEWS_API_KEY in .env");
        setLoading(false);
        return;
      }

      try {
        // General news from Kenya
        const generalRes = await fetch(
          `https://gnews.io/api/v4/top-headlines?country=ke&max=5&lang=en&apikey=${apiKey}`
        );
        const generalData = await generalRes.json();
        setGeneralNews(
          (generalData.articles || []).map((article) => ({
            title: article.title,
            description: article.description,
            imgUrl: article.image || "https://via.placeholder.com/400x200",
            newsUrl: article.url,
            author: article.source.name || "Unknown",
            date: new Date(article.publishedAt).toLocaleString(),
          }))
        );

        // Trending topics (searching for latest buzz)
        const trendingRes = await fetch(
          `https://gnews.io/api/v4/search?q=trending&country=ke&max=5&lang=en&apikey=${apiKey}`
        );
        const trendingData = await trendingRes.json();
        setTrendingNews(
          (trendingData.articles || []).map((article) => ({
            title: article.title,
            description: article.description,
            imgUrl: article.image || "https://via.placeholder.com/400x200",
            newsUrl: article.url,
            author: article.source.name || "Unknown",
            date: new Date(article.publishedAt).toLocaleString(),
          }))
        );
      } catch (err) {
        console.error("Error fetching featured news:", err);
      }

      setLoading(false);
    };

    fetchArticles();
  }, [apiKey]);

  return (
    <div className="container mb-5">
      <h2 className="section-title text-center mb-4">Featured Kenyan News</h2>
      {loading && <Spinner />}

      {/* General News */}
      <h4 className="section-subtitle">General News</h4>
      <div className="row mb-4">
        {generalNews.length > 0 ? (
          generalNews.map((article, index) => (
            <div key={index} className="col-md-4 mb-3">
              <div className="news-card">
                <img src={article.imgUrl} alt={article.title} className="news-image" />
                <div className="news-content">
                  <h5 className="news-title">{article.title}</h5>
                  <p className="news-description">{article.description}</p>
                  <a href={article.newsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-primary">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-muted">No general news found.</p>
        )}
      </div>

      {/* Trending News */}
      <h4 className="section-subtitle">Trending Now</h4>
      <div className="row">
        {trendingNews.length > 0 ? (
          trendingNews.map((article, index) => (
            <div key={index} className="col-md-4 mb-3">
              <div className="news-card">
                <img src={article.imgUrl} alt={article.title} className="news-image" />
                <div className="news-content">
                  <h5 className="news-title">{article.title}</h5>
                  <p className="news-description">{article.description}</p>
                  <a href={article.newsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-primary">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-muted">No trending news found.</p>
        )}
      </div>
    </div>
  );
}
