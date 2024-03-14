import { createSlice } from "@reduxjs/toolkit";

const sendSlice = createSlice({
  name: "sendslice",
  initialState: [],
  reducers: {
    sendData: (state, action) => {
      const mainSate = state;
      state.push(action.payload);
      return mainSate;
    },
    removeData: (state, action) => {},
  },
});
export const sendSliceAction = sendSlice.actions;
export default sendSlice.reducer;
