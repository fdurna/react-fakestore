import * as actions from "../constants/CardConstants";
import axios from "../../utils/axios";

export const fetchCards = () => async (dispatch) => {
  dispatch({
    type: actions.FETCH_CARD_REQUEST,
  });
  try {
    const data = await axios.get("/products");
    dispatch({
      type: actions.FETCH_CARD_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.log(3);
    dispatch({
      type: actions.FETCH_CARD_FAILED,
      payload: error.message,
    });
  }
};

export const fetchCategorys = (category) => async (dispatch) => {
  dispatch({
    type: actions.FETCH_CARD_CATEGORYS_REQUEST,
  });
  try {
    const data = await axios.get(`/products/category/${category}`);
    dispatch({
      type: actions.FETCH_CARD_CATEGORYS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actions.FETCH_CARD_FAILED,
      payload: error.message,
    });
  }
};

export const searchCards = (query) => async (dispatch, getState) => {
  const { CardReducers } = getState();
  if (query.length === 3) {
    const searchResults = CardReducers.searchResults.filter((card) =>
      card.title.toLowerCase().includes(query.toLowerCase())
    );
    dispatch({
      type: actions.SEARCH_CARDS,
      payload: searchResults,
    });
  }
};

export const fetchCardAdd = (card) => async (dispatch) => {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  localStorage.setItem("cart", JSON.stringify([...cart, card]));
  dispatch({
    type: actions.FETCH_CARD_ADD,
    payload: cart,
  });
};
