import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  threads: [],
  fetchingThreadsLoading: false,
  selectedThread: null,
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
  },
});

export const { setThreads, setSelectedThread, setThreadsLoading } =
  threadsSlice.actions;

export default threadsSlice.reducer;
