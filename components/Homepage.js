import React, { useEffect, useState } from "react";
import Aboutsite from "./homepage/Aboutsite";
import Category from "./homepage/Category";
import Firstslide from "./homepage/Firstslide";
import Itemssection from "./homepage/Itemssection";
import Secondslide from "./homepage/Secondslide";
import Suggestions from "./homepage/Suggestions";
import Thirdslide from "./homepage/Thirdslide";

export default function Homepage() {
  //state
  const [products, setproducts] = useState([]);
  const [loading, setloading] = useState(true);

  //useEffect
  useEffect(() => {
    getAllProducts();
  }, []);

  //functions
  const getAllProducts = async () => {
    const response = await fetch("/api/products")
      .then((response) => response.json())
      .then((data) => {
        setproducts(data);
        setloading(!loading);
      });
  };

  return (
    <div className="homepage">
      {loading && <h3>لطفا صبر کنید...</h3>}
      {products.length > 0 && (
        <div>
          <Firstslide products={products} />
          <Category />
          <Itemssection products={products} />
          <Secondslide products={products} />
          <Suggestions products={products} />
          <Thirdslide products={products} />
          <Aboutsite />
        </div>
      )}
    </div>
  );
}
