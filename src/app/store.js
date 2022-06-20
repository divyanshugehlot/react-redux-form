import { configureStore } from "@reduxjs/toolkit";

import userReducer from "../feature/userSlice";

//import { composeWithDevTools } from "redux-devtools-extension";

export const store = configureStore(
  {
    reducer: {
      user: userReducer,
    },
  },
  
);