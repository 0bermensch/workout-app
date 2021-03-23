let initialState = {
  loading: false,
  data: [],
  errorMsg: "",
  count: 0,
};

const exerciseListReducer = (state = initialState, action) => {
  switch (action.type) {
    case "EXERCISE_LIST_LOADING":
      return {
        ...state,
        loading: true,
        errorMsg: "",
      };
    case "EXERCISE_LIST_FAIL":
      return {
        ...state,
        loading: false,
        errorMsg: "Exercise list failed to load",
      };
    case "EXERCISE_LIST_SUCCESS":
      return {
        ...state,
        loading: false,
        errorMsg: "Exercise list succeed to load",
        data: action.payload.results,
        count: action.payload.count,
      };
    default:
      return state;
  }
};
