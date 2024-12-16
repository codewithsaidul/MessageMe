import { createSlice } from "@reduxjs/toolkit";
// import axios from "axios";

const initialState = {

  sidebar: {
    open: false,
    type: "CONTACT",
  },
};

const slice = createSlice({
  name: "app",
  initialState,
  reducers: {
    toggleSiderbar(state) {
      console.log("Sidebar state:", state.sidebar);
      state.sidebar.open = !state.sidebar.open;
    },
    updateSidebarType(state, action) {
      console.log("Sidebar type state:", state.sidebar);
      state.sidebar.type = action.payload.type;
    },
  },
});

// Reducer

export default slice.reducer;

// ----------------------------------------------------------------------


export function ToggleSiderbar() {
  return async (dispatch, getState) => {
    dispatch(slice.actions.toggleSiderbar());
  };
}

export function UpdateSidebarType(type) {
  return async (dispatch, getState) => {
    dispatch(
      slice.actions.updateSidebarType({
        type,
      })
    );
  };
}





