import { configureStore } from "@reduxjs/toolkit";
import threadsSlice from "./redux/threadSlice";

const store = configureStore({
  reducer: {
    threads: threadsSlice,
  },
});

export default store;
