import { createSlice } from "@reduxjs/toolkit";

export const catergoriesSlice = createSlice({
  name: "categories",
  initialState: [],
  reducers: {
    getCatergories: (state, { payload }) => {
      return payload;
    },
  },
});
export const { getCatergories } = catergoriesSlice.actions;
export default catergoriesSlice.reducer;
