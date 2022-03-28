import React from "react";
import Aboutsite from "./homepage/Aboutsite";
import Category from "./homepage/Category";
import Firstslide from "./homepage/Firstslide";
import Itemssection from "./homepage/Itemssection";
import Secondslide from "./homepage/Secondslide";
import Thirdslide from "./homepage/Thirdslide";

export default function Homepage() {
  return (
    <div className="homepage">
      <Firstslide />
      <Category />
      <Itemssection />
      <Secondslide />
      <Thirdslide />
      <Aboutsite />
    </div>
  );
}
