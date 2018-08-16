import {RECEIVE_REVIEW_ERRORS, RECEIVE_PRODUCT_REVIEWS, RECEIVE_PRODUCT_REVIEW, REMOVE_PRODUCT_REVIEW} from '../actions/review_actions'

const reviewErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_REVIEW_ERRORS:
      return action.errors;
    case RECEIVE_PRODUCT_REVIEW || RECEIVE_PRODUCT_REVIEWS || REMOVE_PRODUCT_REVIEW:
      return [];
    // case REMOVE_ERRORS:
    //   return [];
    default:
    return state
  }
}

export default reviewErrorsReducer;
