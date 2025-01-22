export const setLawyers = (lawyers) => ({
    type: "SET_LAWYERS",
    payload: lawyers,
  });
  
  export const addAppointment = (appointment) => ({
    type: "ADD_APPOINTMENT",
    payload: appointment,
  });
  
  export const fetchAppointments = (appointments) => ({
    type: "FETCH_APPOINTMENTS",
    payload: appointments,
  });