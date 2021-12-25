import React from "react";

import { useParams } from "react-router-dom";

const Postpage = () => {
    const {id} = useParams(); 
  return (
    <div>
      <h1>Posts</h1>
        <h2>{id}</h2>
    </div>
  );
};

export { Postpage };
