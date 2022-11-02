import { createSlice } from "@reduxjs/toolkit";

// Define a type for the slice state
type InitialState = {
  loading: boolean;
  error: boolean;
};

// Define the initial state using that type
const initialState: InitialState = {
  loading: false,
  error: false,
};

const slice = createSlice({
  name: "appDetails",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
  // extraReducers(builder) {},
});

export const { setLoading } = slice.actions;

export default slice.reducer;
