/* eslint-disable react-hooks/exhaustive-deps */
import Image from "next/image";
import React, { useState, useEffect } from "react";

export default function Firstslide({ products }) {
  const [index, setindex] = useState(0);
  const [loading, setloading] = useState(true);
  const [startslide, setstartslide] = useState(true);

  useEffect(() => {
    if (startslide && index <= 4) {
      setTimeout(() => {
        setindex((index += 1));
      }, 5000);
    }
    if (index === 4) {
      setstartslide(false);
    }
  }, [index, startslide]);

  //functions
  function nextSlide(slideNum) {
    setstartslide(false);
    if (index >= 0 || index < 5) {
      setindex((index += slideNum));
    }
  }

  function selectedDot(dot) {
    setstartslide(false);
    setindex(dot);
  }

  return (
    <div className="homepage-first-slide">
      {loading && (
        <div>
          <div className="first-slide-body">
            <div className="first-slide-desktop">
              <div className="first-slide-body-right">
                <div>
                  <h3 className="first-slide-title">{products[index].name}</h3>
                  <h4 className="first-slide-price">{`${products[index].price} تومان`}</h4>
                </div>
                <p className="first-slide-description">
                  {products[index].description}
                </p>
              </div>
              <div className="first-slide-body-left">
                <Image
                  src={products[index].selectedImage}
                  width={1000}
                  height={1000}
                  alt="اسلاید جدیدترین های امیدشاپ"
                  className="first-slide-image"
                />
              </div>
            </div>
            <div className="first-slide-mobile-view">
              <div className="first-slide-body-mobile fade">
                <Image
                  src={products[index].selectedImage}
                  width={1000}
                  height={1000}
                  alt="اسلاید جدیدترین های امیدشاپ"
                  className="first-slide-image-mobile"
                />
                <div className="slide1-text">
                  <p className="first-slide-description-mobile">
                    {products[index].description}
                  </p>
                  <div>
                    <h5 className="first-slide-title-mobile">
                      {products[index].name}
                    </h5>
                    <p className="first-slide-price-mobile">{`${products[index].price} تومان`}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="slide-controler">
            <div>
              <button
                className="btn slide-arrow"
                disabled={index === 0 && "false"}
                onClick={() => nextSlide(-1)}
              >
                {"<"}
              </button>
            </div>
            <div>
              <span
                className={index === 0 ? "dotselected dot" : "dot"}
                onClick={() => selectedDot(0)}
              ></span>
              <span
                className={index === 1 ? "dotselected dot" : "dot"}
                onClick={() => selectedDot(1)}
              ></span>
              <span
                className={index === 2 ? "dotselected dot" : "dot"}
                onClick={() => selectedDot(2)}
              ></span>
              <span
                className={index === 3 ? "dotselected dot" : "dot"}
                onClick={() => selectedDot(3)}
              ></span>
              <span
                className={index === 4 ? "dotselected dot" : "dot"}
                onClick={() => selectedDot(4)}
              ></span>
              <span
                className={index === 5 ? "dotselected dot" : "dot"}
                onClick={() => selectedDot(5)}
              ></span>
            </div>
            <div>
              <button
                className="btn slide-arrow"
                disabled={index === 5 && "false"}
                onClick={() => nextSlide(+1)}
              >
                {">"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
