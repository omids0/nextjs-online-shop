export const getAllProductsAction = (products) => (dispatch) => {
  dispatch({ type: "GET_ALL_PRODUCTS", payload: products });
};
