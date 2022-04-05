/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import {
  addToBasketAction,
  getUserHistoryBasketAction,
  removeFromBasketAction,
} from "../../redux/actions/basketActions";

export default function Basket() {
  const basket = useSelector((state) => state.addToBasketReducer.basketItems);

  const dispatch = useDispatch();
  let factorFinalPrice = basket.reduce((c, x) => c + x.total_price, 0);

  const plusQty = (product) => {
    dispatch(addToBasketAction(product, product.order_qty + 1));
    factorFinalPrice = basket.reduce((c, x) => c + x.total_price, 0);
  };

  const minusQty = (product) => {
    if (product.order_qty > 1) {
      dispatch(addToBasketAction(product, product.order_qty - 1));
      factorFinalPrice = basket.reduce((c, x) => c + x.total_price, 0);
    } else {
      alert("مقدار کمتر از یک امکان پذیر نیست!");
    }
  };

  return (
    <div className="basket-container">
      <div className="basket-detailes-container">
        {basket.length > 0 ? (
          <div>
            <h2>سبد خرید شما</h2>
            <p className="basket-notempty-length">{basket.length} کالا</p>
            <div>
              {basket.map((item) => (
                <div key={item._id} className="basket-notempty-product">
                  <div className="basket-product-image-container">
                    <Image
                      src={item.selectedImage}
                      alt={item.name}
                      width={1500}
                      height={1500}
                    />
                  </div>
                  <div className="basket-product-contenets">
                    <h2 className="basket-product-title">{item.name}</h2>
                    <p className="bold-text basket-product-code">کد کالا:</p>
                    <p>{item.code}</p>
                    <p className="bold-text basket-product-description">
                      توضیحات:
                    </p>
                    <p>{item.description}</p>
                    <p className="bold-text basket-product-description">
                      قیمت:
                    </p>
                    <p>{item.price} تومان</p>
                  </div>
                  <div className="">
                    {item.inOff && (
                      <div className="basket-product-inoff">
                        <p className="basket-product-inoff-percent">
                          {item.offPercent * 100}%
                        </p>
                        <div>
                          <p className="basket-product-inoff-price">
                            {item.price} ت
                          </p>
                          <h3>{item.finalPrice}ت</h3>
                        </div>
                      </div>
                    )}
                    {item.inOff && (
                      <div className="basket-product-saving-container">
                        <p className="bold-text save-title">
                          سود شما از خرید این کالا به ازای هر واحد:
                        </p>
                        <h3>{item.price - item.finalPrice} تومان</h3>
                      </div>
                    )}
                    <div className="basket-calc-container">
                      <div>
                        <button
                          className="btn basket-plus"
                          onClick={() => plusQty(item)}
                        >
                          +
                        </button>
                        <input
                          type="text"
                          value={item.order_qty}
                          className="basket-qty-counter"
                        />
                        <button
                          className="btn basket-minus"
                          onClick={() => minusQty(item)}
                        >
                          -
                        </button>
                      </div>
                      <div className="basket-final-price">
                        <p>مبلغ قابل پرداخت:</p>
                        <p>{item.total_price} تومان</p>
                        <button
                          className="btn basket-remove-btn"
                          onClick={() =>
                            dispatch(removeFromBasketAction(item._id))
                          }
                        >
                          حذف
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="basket-factor-container">
              <p>
                مبلغ قابل پرداخت مجموعا
                <span className="basket-factor-totalprice">{factorFinalPrice} تومان </span> می باشد.
              </p>
              <button className="btn basket-continue">تایید و ادامه</button>
            </div>
          </div>
        ) : (
          <div className="empty-basket">
            <i className="bi bi-basket2"></i>
            <h2>سبد شما خالی است!</h2>
            <p>می‌توانید برای مشاهده محصولات بیشتر به صفحه نخست بروید:</p>
            <Link className="link" href="/" passHref>
              صفحه نخست
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
