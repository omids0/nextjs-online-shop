import React from "react";
import Fade from "react-reveal/Fade";
import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { addToBasketAction } from "../../redux/actions/basketActions";

export default function Itemssection({ products }) {
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
      code: product.code
    };
    dispatch(addToBasketAction(selectedProduct, 1));
  };

  return (
    <div className="homepage-items-section">
      {products.map((product) => (
        <div key={product._id} className="each-product-item">
          <Fade bottom>
            <div className="each-product-item-inner">
              <div>
                <Link
                  className="link"
                  href={`/product/${product._id}`}
                  passHref
                >
                  <Image
                    src={product.selectedImage}
                    alt={product.name}
                    layout="responsive"
                    width={500}
                    height={500}
                    className="each-product-item-img"
                  />
                </Link>
              </div>
              <div>
                <div className="each-product-item-title">
                  <p>{product.name}</p>
                </div>
                <div className="each-product-item-btns">
                  <p className="product-item-price">{`${product.price} ت`}</p>
                  <button
                    className="btn"
                    disabled={product.qty <= 0 && "false"}
                    onClick={() => addToBasket(product)}
                  >
                    <i className="bi bi-cart-plus-fill product-plus"></i>
                  </button>
                </div>
              </div>
            </div>
          </Fade>
        </div>
      ))}
    </div>
  );
}
