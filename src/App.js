import "./App.css";

import { Route, Routes } from "react-router-dom";

import { Homepage } from "./pages/Homepage";
import { BlogPage } from "./pages/BlogPage";
import { Aboutpage } from "./pages/Aboutpage";
import { NotfoundPage } from "./pages/NotfoundPage";
import { Postpage } from "./pages/PostPage";
import { Layout } from "./components/Layout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="about" element={<Aboutpage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="posts/:id" element={<Postpage />} />
          <Route path="*" element={<NotfoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
