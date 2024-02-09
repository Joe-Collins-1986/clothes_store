import { createSlice } from "@reduxjs/toolkit";

export const INITIAL_STATE = {
  categories: [],
};

export const categoriesSlice = createSlice({
  name: "category",
  initialState: INITIAL_STATE,
  reducers: {
    setCategories(state, action) {
      state.categories = action.payload;
    },
  },
});

export const { setCategories } = categoriesSlice.actions;
export const categoriesReducer = categoriesSlice.reducer;
