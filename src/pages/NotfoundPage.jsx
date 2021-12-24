import React from "react";
import { Link } from "react-router-dom";

const NotfoundPage = () => {
  return (
    <div>
      This page doesnwt exist. Go <Link to="/">Home</Link>
    </div>
  );
};

export { NotfoundPage };
