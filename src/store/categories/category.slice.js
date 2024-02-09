import { createSlice } from "@reduxjs/toolkit";

export const INITIAL_STATE = {
  categories: [],
};

export const userSlice = createSlice({
  name: "category",
  initialState: INITIAL_STATE,
  reducers: {
    setCategories(state, action) {
      state.categories = action.payload;
    },
  },
});

export const { setCategories } = userSlice.actions;
export const categoriesReducer = userSlice.reducer;
