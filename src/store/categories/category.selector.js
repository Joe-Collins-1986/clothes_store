import { createSelector } from "reselect";

const getCategories = (state) => state.categories.categories;

export const selectCategoryMap = createSelector([getCategories], (categories) =>
  categories.reduce((acc, category) => {
    const { title, items } = category;
    acc[title.toLowerCase()] = items;
    return acc;
  }, {})
);
