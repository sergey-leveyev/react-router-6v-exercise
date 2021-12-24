import "./App.css";

import { Route, Link, Routes } from "react-router-dom";

import { Homepage } from "./pages/Homepage";
import { BlogPage } from "./pages/BlogPage";
import { Aboutpage } from "./pages/Aboutpage";
import { NotfoundPage } from "./pages/NotfoundPage";

function App() {
  return (
    <>
      <header>
        <Link to="/">Home</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/about">About</Link>
      </header>

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="*" element={<NotfoundPage />} />
      </Routes>
    </>
  );
}

export default App;
