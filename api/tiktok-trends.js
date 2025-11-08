import fetch from "node-fetch";

export default async function handler(req, res) {
  const apiKey = process.env.REACT_APP_TIKTOK_API_KEY;

  try {
    const response = await fetch("https://tiktok-trending-data.p.rapidapi.com/t", {
      method: "GET",
      headers: {
        "x-rapidapi-host": "tiktok-trending-data.p.rapidapi.com",
        "x-rapidapi-key": apiKey,
      },
    });

    const data = await response.json();

    // Map TikTok data to your article structure
    const articles = (data?.results || []).map((item) => ({
      title: item.title || `TikTok by ${item.author?.uniqueId}`,
      description: item.desc || "",
      imgUrl: item.cover || "https://via.placeholder.com/400x200",
      newsUrl: `https://www.tiktok.com/@${item.author?.uniqueId}/video/${item.id}`,
      author: item.author?.uniqueId || "Unknown",
      date: new Date(item.createTime * 1000).toLocaleString(),
    }));

    res.status(200).json({ articles });
  } catch (err) {
    console.error("Error fetching TikTok trends:", err);
    res.status(500).json({ articles: [] });
  }
}
