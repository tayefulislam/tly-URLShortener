import React from "react";
import { useParams } from "react-router-dom";

const UrlShortDone = () => {
  let { shortUrlId } = useParams();
  console.log(shortUrlId);
  return <div></div>;
};

export default UrlShortDone;
