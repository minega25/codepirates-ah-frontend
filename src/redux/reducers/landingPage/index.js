import initialState from '../../store/initialState';
import * as actionTypes from '../../actions/actionTypes';

const landingPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_ARTICLES_ON_LANDING_PAGE_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };
    case actionTypes.FETCH_ARTICLES_ON_LANDING_PAGE_ERROR:
      return {
        ...state,
        ...action.payload,
      };
    case actionTypes.FETCH_POPULAR_ARTICLES_ON_LANDING_PAGE_SUCCESS:
      return {
        ...state,
        popular: {
          ...action.payload,
        },
      };
    case actionTypes.FETCH_POPULAR_ARTICLES_ON_LANDING_PAGE_ERROR:
      return {
        ...state,
        popular: {
          ...action.payload,
        },
      };
    default:
      return state;
  }
};

export default landingPageReducer;
