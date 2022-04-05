export const addToBasketAction =
  (product, order_qty) => (dispatch, getState) => {
    let basketItems = {
      _id: product._id,
      name: product.name,
      price: product.price,
      inOff: product.inOff,
      offPercent: product.offPercent,
      order_qty: Number(order_qty),
      category: product.category,
      description: product.description,
      finalPrice: product.finalPrice,
      total_price: product.finalPrice * Number(order_qty),
      selectedImage: product.selectedImage,
      code: product.code,
    };

    dispatch({ type: "ADD_TO_BASKET", payload: basketItems });
    const omidShopBasketItems = getState().addToBasketReducer.basketItems;
    localStorage.setItem("omidshopbasket", JSON.stringify(omidShopBasketItems));
  };

export const getUserHistoryBasketAction = (history) => (dispatch) => {
  dispatch({ type: "GET_BASKET_HISTORY", payload: history });
};

export const removeFromBasketAction = (id) => (dispatch, getState) => {
  dispatch({ type: "REMOVE_FROM_BASKET", payload: id });
  const omidShopBasketItems = getState().addToBasketReducer.basketItems;
  localStorage.setItem("omidshopbasket", JSON.stringify(omidShopBasketItems));
};
