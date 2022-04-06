/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react";
import AppLayout from "../../components/AppLayout";
import Image from "next/image";
import db from "../../utils/db/mongoose";
import Products from "../../models/Products";
import { useDispatch } from "react-redux";
import { addToBasketAction } from "../../redux/actions/basketActions";

export default function EachProduct({ product }) {
  const dispatch = useDispatch();

  const addToBasket = (product) => {
    const selectedProduct = {
      _id: product._id,
      name: product.name,
      price: parseInt(product.price),
      inOff: product.off,
      offPercent: product.offpercent,
      order_qty: 1,
      category: product.category,
      description: product.description,
      finalPrice: product.price - product.price * product.offpercent,
      selectedImage: product.selectedImage,
      code: product.code,
    };
    dispatch(addToBasketAction(selectedProduct, 1));
  };

  return (
    <AppLayout>
      <div className="product-detail-desktop-container">
        <div className="product-detail-desktop-image">
          <Image
            src={product.selectedImage}
            alt={product.name}
            width={500}
            height={500}
            className="product-detail-image"
          />
        </div>
        <div className="product-detail-desktop-descriptions">
          <div>
            <h1>{product.name}</h1>
            <p className="product-detail-code">{`کد: ${product.code}`}</p>
          </div>
          <div>
            <p className="product-detail-description">توضیحات:</p>
            <p>{product.description}</p>
          </div>
          <div className="product-detail-last-part">
            {!product.off && (
              <div className="product-detail-without-off">
                <h3>{`${product.price} تومان`}</h3>
                <button className="btn product-detail-addtolist">
                  افزودن به سبد
                </button>
              </div>
            )}
            {product.off && (
              <div className="product-detail-off">
                <div className="product-detail-off-1">
                  <h3>{`${product.offpercent * 100}%`}</h3>
                  <h2>{product.price} تومان</h2>
                </div>
                <div className="product-detail-off-2">
                  <h3 className="product-detail-off-price">
                    {product.price - product.price * product.offpercent} تومان
                  </h3>
                </div>
                <button
                  className="btn product-detail-addtolist"
                  onClick={() => addToBasket(product)}
                >
                  افزودن به سبد
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </AppLayout>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;
  const { uid } = params;

  await db.connect();
  const product = await Products.findById(uid);
  await db.disconnect();

  return {
    props: {
      uid,
      product: JSON.parse(JSON.stringify(product)),
    },
  };
}
