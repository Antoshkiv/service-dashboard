import React from "react";

function Loader({ text = "Loading..." }) {
  return <div className="loader">{text}</div>;
}

export default Loader;
