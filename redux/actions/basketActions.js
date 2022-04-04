export const addToBasketAction =
  (product, order_qty) => (dispatch, getState) => {
        let basketItems = {
              _id: product._id,
              name: product.name,
              price: product.price,
              inOff: product.off,
              offPercent: product.offPercent,
              order_qty: Number(order_qty),
              category: product.category,
              description: product.description,
              finalPrice: product.price - product.price * product.offPercent,
              total_price: finalPrice * order_qty
        }

        dispatch({type: 'ADD_TO_BASKET', payload: basketItems})
        const omidShopBasketItems = getState().addToBasketReducer.basketItems
        localStorage.setItem('omid_shop_basket', JSON.stringify(omidShopBasketItems))
  };
