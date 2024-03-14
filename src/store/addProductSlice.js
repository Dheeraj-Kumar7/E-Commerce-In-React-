import { createSlice } from "@reduxjs/toolkit";
import FoodData from "../Data/Data";
const addProductSlice = createSlice({
  name: "product",
  initialState: FoodData,
  reducers: {
    addProduct: (state, action) => {
      const Mainstate = state;
      state.push(action.payload);
      return Mainstate;
    },
  },
});
export const addProductAction = addProductSlice.actions;
export default addProductSlice.reducer;
