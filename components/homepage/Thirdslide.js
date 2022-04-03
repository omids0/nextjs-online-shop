import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Thirdslide({ products }) {
  return (
    <div className="homepage-third-slide">
      <div className="off-header-container">
        <h1 className="off-title-percent">OFF%</h1>
        <h1 className="off-title">تخفیفی‌ها</h1>
      </div>
      <div className="off-list">
        {products.map((product) =>
          product.off ? (
            <Link key={product._id} href={`product/${product._id}`} passHref>
              <div key={product._id} className="each-off-product">
                <div>
                  <Image
                    className="each-off-product-image"
                    src={product.selectedImage}
                    alt={product.name}
                    width={500}
                    height={500}
                  />
                </div>
                <div className="off-status">
                  <p className="off-status-percent">{`${
                    product.offpercent * 100
                  } %`}</p>
                  <p className="off-status-price">{`${
                    product.price - product.price * product.offpercent
                  } تومان`}</p>
                </div>
                <p className="off-price">{product.price}</p>
              </div>
            </Link>
          ) : null
        )}
      </div>
    </div>
  );
}
