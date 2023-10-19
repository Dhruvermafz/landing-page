import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  userData: [],
  dialogPopup: false,
};

export const registerSlice = createSlice({
  name: "register",
  initialState: initialState,
  reducers: {
    register: (state, action) => {
      console.log("state", action.payload);
      state.userData.push(action.payload);
    },
    updateUser: (state, action) => {
      console.log("values------------------", action.payload);
      const { id } = action.payload;
      const index = state.userData.findIndex((user) => user.id === id);
      state.userData.splice(index, 1, action.payload);
    },
    removeUser: (state, action) => {
      state.userData = state.userData.filter(
        (user) => user.id !== action.payload
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const { register, updateUser, removeUser } = registerSlice.actions;

export default registerSlice.reducer;
