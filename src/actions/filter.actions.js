import posts from "../data";
import { filterConstants } from "../constants";

export const handleChangeCheckbox = (key) => {
  return function (dispatch, getState) {
    const stars = getState().filterState.stars;

    stars[key] = !stars[key];

    return dispatch({
      type: filterConstants.CHANGE_CHECKBOX_ITEMS,
      payload: stars,
    });
  };
};

export const handleChangeReviews = (value) => {
  return {
    type: filterConstants.CHANGE_REVIEWS_VALUE,
    payload: value.replace(/\W+|\D+/g, ""),
  };
};

export const handleChangePrice = (type, value) => {
  return function (dispatch, getState) {
    const price = getState().filterState.price;

    if (!value) return;

    if (type === "over") {
      let newSet = "";
      if (value / 1000 < price.slider[1]) {
        newSet = [value / 1000, price.slider[1]];
      } else {
        newSet = [price.slider[1], price.slider[1]];
      }
      return dispatch({
        type: filterConstants.CHANGE_PRICE_VALUE,
        payload: { input: [value, price.input[1]], slider: newSet },
      });
    }

    if (type === "under") {
      let newSet = "";
      if (value / 1000 > price.slider[1]) {
        newSet = [price.slider[0], value / 1000];
      } else {
        newSet = [price.slider[0], price.slider[0]];
      }
      return dispatch({
        type: filterConstants.CHANGE_PRICE_VALUE,
        payload: { input: [price.input[0], value], slider: newSet },
      });
    }

    if (type === "slider") {
      return dispatch({
        type: filterConstants.CHANGE_PRICE_VALUE,
        payload: { input: [value[0] * 1000, value[1] * 1000], slider: value },
      });
    }
  };
};

export const handleClickAccept = () => {
  return function (dispatch, getState) {
    const state = getState().filterState;

    const activeStars = [];
    Object.entries(state.stars).map((item) => {
      if (item[1]) {
        activeStars.push(+item[0]);
      }
    });

    let newPosts = posts;

    if (activeStars.length !== 0) {
      newPosts = newPosts.filter(
        (item) => activeStars.indexOf(item.stars) !== -1
      );
    }

    if (state.reviews) {
      newPosts = newPosts.filter((item) => item.reviews > state.reviews);
    }

    newPosts = newPosts
      .filter(
        (item) =>
          item.price >= state.price.slider[0] * 1000 &&
          item.price <= state.price.slider[1] * 1000
      )
      .sort((a, b) => a.price - b.price);

    return dispatch({
      type: filterConstants.HANDLE_CLICK_ACCEPT,
      payload: newPosts,
    });
  };
};

export const handleClickClear = () => {
  return {
    type: filterConstants.HANDLE_CLICK_CLEAR,
  };
};
