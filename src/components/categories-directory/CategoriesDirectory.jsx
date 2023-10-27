import React from "react";
import "./categories-directory-styles.scss";
import CatagoryItem from "../category-item/CatagoryItem";

const CategoriesDirectory = ({ catagories }) => {
  return (
    <div className="categories-directory-container">
      {catagories.map((category) => (
        <CatagoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default CategoriesDirectory;
