import React from "react";
import "./CommonSection.scss";
const CommonSection = ({ title }) => {
  return (
    <div className="common__section text-center">
      <h1>{title}</h1>
    </div>
  );
};

export default CommonSection;
