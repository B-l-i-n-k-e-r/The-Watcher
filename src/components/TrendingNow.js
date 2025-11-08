import React, { useEffect, useState } from 'react';
import NewsItems from './NewsItems';
import Spinner from './Spinner';

export default function TrendingNow() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchTrending() {
      setLoading(true);
      try {
        const res = await fetch('/api/tiktok-trends');
        const data = await res.json();
        setArticles(data.articles || []);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    fetchTrending();
  }, []);

  return (
    <div className="container app-container">
      <h2 className="text-center mb-4">Trending Now</h2>
      {loading && <Spinner />}
      <div className="row">
        {!loading &&
          articles.map((article, idx) => (
            <NewsItems
              key={idx}
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
          No trending TikTok content found.
        </p>
      )}
    </div>
  );
}
