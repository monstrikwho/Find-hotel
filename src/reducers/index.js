import { combineReducers } from "redux";

import { filterState } from "./filter.reducer";

const rootReducer = combineReducers({
  filterState,
});

export default rootReducer;
