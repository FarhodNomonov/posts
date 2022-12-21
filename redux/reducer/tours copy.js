import { createSlice } from "@reduxjs/toolkit";

export const toursSlice = createSlice({
  name: "tours",
  initialState: [],
  reducers: {
    getTours: (state, { payload }) => {
      return payload;
    },
  },
});
export const { getTours } = toursSlice.actions;
export default toursSlice.reducer;
