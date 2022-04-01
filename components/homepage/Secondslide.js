import React from "react";
import Image from "next/image";

export default function Secondslide({ products }) {
  const sortedArr = products.sort((a, b) =>
    parseInt(a.sales) < parseInt(b.sales) ? 1 : -1
  );
  return (
    <div className="homepage-second-slide">
      <h3>پرفروش‌های امیدشاپ</h3>
      <div className="most-sales-list">
        {sortedArr.map((product) => (
          <div key={product._id} className="most-sales-list-child">
            <Image
              className="most-sales-list-child-img"
              src={product.selectedImage}
              alt={product.name}
              layout="responsive"
              width={500}
              height={500}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
