import React from "react";

import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <header>
        <Link to="/">Home</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/about">About</Link>
        <Link to="/posts">posts</Link>
      </header>
      <Outlet />
      <footer>2021</footer>
    </>
  );
};

export { Layout };
