const initialState = {
    bookings: [],
  };
  
  const appointmentReducer = (state = initialState, action) => {
    switch (action.type) {
      case "ADD_APPOINTMENT":
        return { ...state, bookings: [...state.bookings, action.payload] };
      case "FETCH_APPOINTMENTS":
        return { ...state, bookings: action.payload };
      default:
        return state;
    }
  };
  
  export default appointmentReducer;