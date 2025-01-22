const initialState = {
    list: [],
  };
  
  const lawyerReducer = (state = initialState, action) => {
    switch (action.type) {
      case "SET_LAWYERS":
        return { ...state, list: action.payload };
      default:
        return state;
    }
  };
  
  export default lawyerReducer;
  