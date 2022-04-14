/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProductsAction } from "../redux/actions/productActions";
import { productsReducer } from "../redux/reducers/productReducer";
import Aboutsite from "./homepage/Aboutsite";
import Category from "./homepage/Category";
import Firstslide from "./homepage/Firstslide";
import Itemssection from "./homepage/Itemssection";
import Secondslide from "./homepage/Secondslide";
import Suggestions from "./homepage/Suggestions";
import Thirdslide from "./homepage/Thirdslide";
import Loading from "./Loading";

export default function Homepage() {
  //state
  const [products, setproducts] = useState([]);
  const [loading, setloading] = useState(true);
  const productsState = useSelector((state) => state.productsReducer.products);

  const dispatch = useDispatch();

  //useEffect
  useEffect(() => {
    getAllProducts();
  }, []);

  useEffect(() => {
    dispatch(getAllProductsAction(products));
  }, [products]);

  //functions
  const getAllProducts = async () => {
    if (productsState.length > 0) {
      setproducts(productsState[productsState.length - 1]);
      setloading(!loading);
    } else {
      const response = await fetch("/api/products")
        .then((response) => response.json())
        .then((data) => {
          setproducts(data);
          setloading(!loading);
        });
    }
  };

  return (
    <div className="homepage">
      {loading && <Loading />}
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
