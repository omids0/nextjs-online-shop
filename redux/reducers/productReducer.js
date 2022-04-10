export const productsReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case "GET_ALL_PRODUCTS":
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    default:
      return state;
  }
};
