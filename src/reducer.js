export const initialState = {
  basket: [],
};
export const getBasketTotalPrice = (basket) =>
  basket?.reduce((amount, item) => amount + item.price, 0);

const reducer = (state, action) => {
  console.log(action);
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
    default:
      return state;
  }
};
export default reducer;
