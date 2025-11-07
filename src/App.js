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
                <News pageSize={pageSize} country="in" category="general" />
              </>
            }
          />

          {/* About Page */}
          <Route path="/about" element={<About />} />

          {/* Categories */}
          <Route
            path="/general"
            element={<News key="general" pageSize={pageSize} country="in" category="general" />}
          />
          <Route
            path="/politics"
            element={<News key="politics" pageSize={pageSize} country="in" category="politics" />}
          />
          <Route
            path="/business"
            element={<News key="business" pageSize={pageSize} country="in" category="business" />}
          />
          <Route
            path="/entertainment"
            element={<News key="entertainment" pageSize={pageSize} country="in" category="entertainment" />}
          />
          <Route
            path="/health"
            element={<News key="health" pageSize={pageSize} country="in" category="health" />}
          />
          <Route
            path="/science"
            element={<News key="science" pageSize={pageSize} country="in" category="science" />}
          />
          <Route
            path="/sports"
            element={<News key="sports" pageSize={pageSize} country="in" category="sports" />}
          />
          <Route
            path="/technology"
            element={<News key="technology" pageSize={pageSize} country="in" category="technology" />}
          />
        </Routes>
      </main>

      {/* Footer at bottom */}
      <Footer />
    </>
  );
}

export default App;
