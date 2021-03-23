import { combineReducers } from "redux";
import ExerciseListReducer from "./ExerciseListReducer";
import ExerciseReducer from "./ExerciseReducer";

const rootReducer = combineReducers({
  ExerciseList: ExerciseListReducer,
  Exercise: ExerciseReducer,
});

export default rootReducer;
