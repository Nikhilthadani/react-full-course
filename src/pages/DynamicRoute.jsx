import React from "react";
import { useParams } from "react-router-dom";
const DynamicRoute = () => {
  const id = useParams().userid;
  return <div>{id}</div>;
};

export default DynamicRoute;
