import React from "react";
import Fade from "react-reveal/Fade";
import Image from "next/image";

export default function Itemssection({ products }) {
  return (
    <div className="homepage-items-section">
      {products.map((product) => (
        <div key={product._id} className="each-product-item">
          <Fade bottom>
            <div className="each-product-item-inner">
              <div>
                <Image
                  src={product.selectedImage}
                  alt={product.name}
                  layout="responsive"
                  width={500}
                  height={500}
                  className="each-product-item-img"
                />
              </div>
              <div>
                <div className="each-product-item-title">
                  <p>{product.name}</p>
                </div>
                <div className="each-product-item-btns">
                <p className="product-item-price">{`${product.price} ت`}</p>
                <button className="btn"><i className="bi bi-cart-plus-fill product-plus"></i></button>
                </div>
              </div>
            </div>
          </Fade>
        </div>
      ))}
    </div>
  );
}
