import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomePage from "./pages/Homepage";
import About from "./pages/About";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="app">
      <div className="container">
        <Header />
        <main>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/blog" element={<Blog />} />
            <Route exact path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
