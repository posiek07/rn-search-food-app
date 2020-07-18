import { MEALS } from "../../data/dummy-data";

const initialState = {
  meals: MEALS,
  fliteredMeals: MEALS,
  favMeals: [],
};

const mealsReducer = (state = initialState, action) => {
  return state;
};

export default mealsReducer;
