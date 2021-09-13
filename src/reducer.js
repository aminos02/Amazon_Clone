export const initialState = {
  basket: [],
  user: null,
  username: "Guest",
};
export const getBasketTotalPrice = (basket) =>
  basket?.reduce((amount, item) => amount + item.price, 0);

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "REMOVE__ITEM":
      state.basket.splice(action.id, 1);

      return {
        ...state,
        basket: state.basket,
      };
    case "EMPTY_BASKET":
      return {
        ...state,
        basket: [],
      };
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_USERNAME":
      return {
        ...state,
        username: action.username,
      };
    default:
      return state;
  }
};
export default reducer;
