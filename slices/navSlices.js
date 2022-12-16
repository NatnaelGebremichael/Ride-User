import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  origin: null,
  destination: null,
  travelTimeInformation: null,
};

export const navSlice = createSlice({
  name: "nav",
  initialState,
  reducer: {
    setOrigin: (state, action) => {
      state.origin = action.payload;
    },
    setdestination: (state, action) => {
      state.destination = action.payload;
    },
    setTravelTimeInformation: (state, action) => {
      state.travelTimeInformation = action.payload;
    },
  },
});

//this is called distructuring, letting the rest of the app know about the actions
export const { setOrigin, setdestination, setTravelTimeInformation } =
  navSlice.actions;

//HAVE SOME SELECTORS, to grab data
export const selectOrigion = (state) => state.navSlice.origin;
export const selectDestination = (state) => state.navSlice.destination;
export const selectTravelTimeInformation = (state) =>
  state.navSlice.travelTimeInformation;

export default navSlice.reducer;
