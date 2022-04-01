import React from "react";

export default function Thirdslide({ products }) {
  return (
    <div className="homepage-third-slide">
      slied takhfifha
      {products.map((product) => (product.off ? <p>{product.name}</p> : null))}
    </div>
  );
}
