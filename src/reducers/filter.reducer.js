import { filterConstants } from "../constants";
import posts from "../data";

const initialState = {
  settings: 0,
  filtered: false,
  reviews: "",
  price: { input: ["", ""], slider: [0, 100] },
  stars: {
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
  },
  posts,
};

export function filterState(state = initialState, action) {
  switch (action.type) {
    case filterConstants.CHANGE_REVIEWS_VALUE:
      return {
        ...state,
        reviews: action.payload,
        settings: state.settings + 1,
      };
    case filterConstants.CHANGE_PRICE_VALUE:
      return {
        ...state,
        price: { ...action.payload },
        settings: state.settings + 1,
      };
    case filterConstants.HANDLE_CLICK_ACCEPT:
      return {
        ...state,
        posts: action.payload,
        filtered: true,
        settings: 0,
      };
    case filterConstants.HANDLE_CLICK_CLEAR:
      return initialState;
    case filterConstants.CHANGE_CHECKBOX_ITEMS:
      return {
        ...state,
        stars: action.payload,
        settings: state.settings + 1,
      };
    default:
      return state;
  }
}
