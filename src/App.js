import './App.css';
import NavBar from './components/NavBar';
import News from './components/News';
import About from './components/About';
import Footer from './components/Footer';
import FeaturedArticles from './components/FeaturedArticles';
import { Routes, Route } from "react-router-dom";

function App() {
  const pageSize = 9;

  return (
    <>
      {/* Navbar at top */}
      <NavBar />

      {/* Main Content Wrapper */}
      <main className="app-container">
        <Routes>
          {/* Homepage → shows featured + general news */}
          <Route
            path="/"
            element={
              <>
                <FeaturedArticles />
                <News key="home" pageSize={pageSize} category="world" />
              </>
            }
          />

          {/* About Page */}
          <Route path="/about" element={<About />} />

          {/* Categories */}
          <Route
            path="/general"
            element={<News key="general" pageSize={pageSize} category="world" />}
          />
          <Route
            path="/politics"
            element={<News key="politics" pageSize={pageSize} category="nation" />}
          />
          <Route
            path="/business"
            element={<News key="business" pageSize={pageSize} category="business" />}
          />
          <Route
            path="/entertainment"
            element={<News key="entertainment" pageSize={pageSize} category="entertainment" />}
          />
          <Route
            path="/health"
            element={<News key="health" pageSize={pageSize} category="health" />}
          />
          <Route
            path="/science"
            element={<News key="science" pageSize={pageSize} category="science" />}
          />
          <Route
            path="/sports"
            element={<News key="sports" pageSize={pageSize} category="sports" />}
          />
          <Route
            path="/technology"
            element={<News key="technology" pageSize={pageSize} category="technology" />}
          />
        </Routes>
      </main>

      {/* Footer at bottom */}
      <Footer />
    </>
  );
}

export default App;
