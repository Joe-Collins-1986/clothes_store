import React from "react";
import DirectoryItem from "../directory-item/DirectoryItem";

import "./directory-styles.scss";

const Directory = ({ catagories }) => {
  return (
    <div className="directory-container">
      {catagories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Directory;