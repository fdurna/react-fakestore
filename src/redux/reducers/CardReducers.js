import * as actions from "../constants/CardConstants";

const initialState = {
  cards: [],
  localStorageCard: [],
  searchResults: [],
};

export const CardReducers = (state = initialState, action) => {
    switch (action.type) {
      case actions.FETCH_CARD_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case actions.FETCH_CARD_SUCCESS:
        return {
          ...state,
          loading: false,
          cards: action.payload.data,
          searchResults: action.payload.data,
        };
      case actions.FETCH_CARD_FAILED:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
        case actions.FETCH_CARD_CATEGORYS_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case actions.FETCH_CARD_CATEGORYS_SUCCESS:
        return {
          ...state,
          loading: false,
          cards: action.payload.data,
        };
      case actions.FETCH_CARD_CATEGORYS_FAILED:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
        case actions.SEARCH_CARDS:
      return {
        ...state,
        cards: action.payload,
      };
        case actions.FETCH_CARD_ADD:
        return {
          ...state,
          loading: false,
          localStorageCard: action.payload,
        };
      default:
        return state;
    }
  };