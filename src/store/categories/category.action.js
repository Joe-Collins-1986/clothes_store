import { CATEGORIES_ACTION_TYPES } from "./category.types";

import { getCatagoriesAndDocuments } from "../../utils/firebase/firebase.utils";

export const fetchCategoriesStart = () => ({
  type: CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START,
});

export const fetchCategoriesSuccess = (categoriesArray) => ({
  type: CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,
  payload: categoriesArray,
});

export const fetchCategoriesFail = (error) => ({
  type: CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAIL,
  payload: error,
});

export const fetchCategoriesAsync = () => async (dispatch) => {
  dispatch(fetchCategoriesStart());
  try {
    const categoriesArray = await getCatagoriesAndDocuments();
    dispatch(fetchCategoriesSuccess(categoriesArray));
  } catch (error) {
    console.log(error);
    dispatch(fetchCategoriesFail(error));
  }
};
