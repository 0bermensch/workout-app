import axios from "axios";

export const GetExerciseList = (page) => async (dispatch) => {
  try {
    dispatch({
      type: "EXERCISE_LIST_LOADING",
    });

    const perPage = 20;
    const offset = page * perPage - perPage;

    const res = await axios.get(
      `https://wger.de/api/v2/exercise/?limit=${perPage}&offset=${offset}`
    );
    dispatch({
      type: "EXERCISE_LIST_SUCCESS",
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: "POKEMON_LIST_FAIL",
    });
  }
};

export const GetExercise = (exercise = async (dispatch) => {
  try {
    dispatch({
      type: "EXERCISE_LOADING",
    });

    dispatch({
      type: "EXERCISE_SUCCESS",
    });
  } catch (e) {
    dispatch({
      type: "EXERCISE_FAIL",
    });
  }
});
