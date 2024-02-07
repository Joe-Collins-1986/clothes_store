import { useSelector } from "react-redux";

import {
  selectCategoryMap,
  selectCategoriesIsLoading,
} from "../../store/categories/category.selector";

import CategoryPreview from "../../components/catagory-preview/CatagoryPreview";
import Spinner from "../../components/spinner/Spinner";

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoryMap);
  const isLoading = useSelector(selectCategoriesIsLoading);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        Object.keys(categoriesMap).map((title) => {
          const products = categoriesMap[title];
          return (
            <CategoryPreview key={title} title={title} products={products} />
          );
        })
      )}
    </>
  );
};

export default CategoriesPreview;
