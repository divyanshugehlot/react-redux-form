import { createSlice } from "@reduxjs/toolkit";
import { UserData } from "../logindata/loginData";
export const userSlice = createSlice({
  name: "user",
  initialState: { value: [...UserData], isAuthenticated: false, user: null },

  //lets us define reducers and it automatically generates actions
  reducers: {
    addUsers: (state, action) => {
      //state = [...state, action.payload];
      state.value.push(action.payload);
      return state;
    },
    isAuthenticated: (state, action) => {
      const foundUser = state.value.find(
        (user) =>
          user.username === action.payload.username &&
          user.password === action.payload.password
      );

      return foundUser
        ? { ...state, isAuthenticated: true, user: foundUser }
        : { ...state, isAuthenticated: false, user: null };
    },
  },
});

export const { addUsers, isAuthenticated } = userSlice.actions;

export const selectUser = (state) => state.user;

export default userSlice.reducer;
