import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import CategoriesPreview from "../catagories-preview/CategoriesPreview";
import Category from "../category/Category";

import { getCatagoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import { setCategories } from "../../store/categories/category.action";

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getCatagoriesMap = async () => {
      const categoriesArray = await getCatagoriesAndDocuments();
      dispatch(setCategories(categoriesArray));
    };

    getCatagoriesMap();
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
