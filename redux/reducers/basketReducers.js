export const addToBasketReducer = (state = { basketItems: [] }, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      const alreadyExist = state.basketItems.find(
        (item) => item._id === action.payload._id
      );

      if (alreadyExist) {
        return {
          ...state,
          basketItems: state.basketItems.map((item) =>
            item._id === action.payload._id ? action.payload : item
          ),
        };
      } else {
        return {
          ...state,
          basketItems: [...state.basketItems, action.payload],
        };
      }
    case "GET_BASKET_HISTORY":
      return {
        ...state,
        basketItems: action.payload,
      };
    case "REMOVE_FROM_BASKET":
      return {
        ...state,
        basketItems: state.basketItems.filter(
          (item) => item._id !== action.payload
        ),
      };
    default:
      return state;
  }
};
