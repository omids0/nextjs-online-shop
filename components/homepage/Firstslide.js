import Image from "next/image";
import React, { useState } from "react";

export default function Firstslide({ products }) {
  const [index, setindex] = useState(0);
  let interval = null;

  //functions

  return (
    <div className="homepage-first-slide">
      <div className="first-slide-body">
        <div className="first-slide-body-right">
          <h1 className="first-slide-title">نام کیف</h1>
          <p className="first-slide-description">توضیحات کیف</p>
          <h3 className="first-slide-price">1000 تومان</h3>
        </div>
        <div className="first-slide-body-left">
          <Image
            src="/images/275876663_3068808890049026_5903621737662120503_n.jpg"
            width={1000}
            height={1000}
            alt="اسلاید جدیدترین های امیدشاپ"
            className="first-slide-image"
          />
        </div>
        <div className="first-slide-mobile-view">
          <div className="first-slide-body-mobile fade">
            <Image
              src="/images/275876663_3068808890049026_5903621737662120503_n.jpg"
              width={1000}
              height={1000}
              alt="اسلاید جدیدترین های امیدشاپ"
              className="first-slide-image"
            />
            <div className="slide1-text">
              <h3 className="first-slide-title">نام کیفففففففففففف</h3>
              <p className="first-slide-description">توضیحات کیف</p>
              <p className="first-slide-price">1000 تومان</p>
            </div>
          </div>
        </div>
      </div>
      <div className="slide-controler">
        <div>
          <button className="btn slide-arrow">{"<"}</button>
        </div>
        <div>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
        <div>
          <button className="btn slide-arrow">{">"}</button>
        </div>
      </div>
    </div>
  );
}
