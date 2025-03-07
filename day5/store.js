import { configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk"; // ✅ Correct import

import { taskReducer } from "./reducers";

const store = configureStore({
  reducer: taskReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;
