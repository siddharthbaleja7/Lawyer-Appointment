import { configureStore } from "@reduxjs/toolkit";
import lawyerReducer from "./reducers/lawyerReducer";
import appointmentReducer from "./reducers/appointmentReducer";
import { setLawyers } from "./actions";
import { mockLawyers } from "../services/mockData";

const store = configureStore({
  reducer: {
    lawyers: lawyerReducer,
    appointments: appointmentReducer,
  },
});

// Initialize lawyers with mock data
store.dispatch(setLawyers(mockLawyers));

export default store;
