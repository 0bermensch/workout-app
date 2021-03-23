const initialState = {
  loading: false,
  errorMsg: "",
  data: {},
};

const ExerciseReducer = (state = initialState, action) => {
  switch (action.type) {
    case "EXERCISE_LOADING":
      return {
        ...state,
        loading: true,
        errorMsg: "",
      };
    case "EXERCISE_FAIL":
      return {
        ...state,
        loading: false,
        errorMsg: "",
      };
    case "EXERCISE_SUCCESS":
      return {
        ...state,
        loading: true,
        errorMsg: "",
        data: {
          ...state.data,
          [action.exerciseName]: action.payload,
        },
      };
    default:
      return state;
  }
};
