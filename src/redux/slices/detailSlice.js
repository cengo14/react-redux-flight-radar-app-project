import { createSlice } from "@reduxjs/toolkit";
import { getDetail } from "../actions";
const initialState = {
  isLoading: false,
  error: null,
  info: null,
  route: [],
};
const detailSlice = createSlice({
  name: "info",
  initialState,
  reducers: {
    removeRoute: (state) => {
      state.route = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getDetail.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getDetail.rejected, (state, { error }) => {
      state.isLoading = false;
      state.error = error.message;
    });
    builder.addCase(getDetail.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.error = null;
      state.info = payload;
      state.route = payload.trail;
    });
  },
});
export const { removeRoute } = detailSlice.actions;
export default detailSlice.reducer;
