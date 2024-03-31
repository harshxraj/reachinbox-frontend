import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: localStorage.getItem("reachinbox-frontend-token1234") || null,
  threads: [],
  fetchingThreadsLoading: false,
  selectedThread: [],
};

const threadsSlice = createSlice({
  name: "threads",
  initialState,
  reducers: {
    setThreads(state, { payload }) {
      state.threads = payload;
    },
    setSelectedThread(state, { payload }) {
      state.selectedThread = payload;
    },
    setThreadsLoading: (state, { payload }) => {
      state.fetchingThreadsLoading = payload;
    },
    setToken: (state, { payload }) => {
      state.token = payload;
      localStorage.setItem("reachinbox-frontend-token1234", payload);
    },
  },
});

export const { setThreads, setSelectedThread, setThreadsLoading, setToken } =
  threadsSlice.actions;

export default threadsSlice.reducer;
