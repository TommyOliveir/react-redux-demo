import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = "";

export const themeSlice = createSlice({
  name: "theme",
  initialState: { value: initialStateValue },
  reducers: {
    changeColor: (state, action) => {
      state.value = action.payload;
    },
  },
});
//actions to access outside
export const { changeColor } = themeSlice.actions;

//reducer
export default themeSlice.reducer;
