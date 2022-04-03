/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from "react";
import axios from "axios";
import AppLayout from "../../components/AppLayout";

export default function EachProduct({ uid }) {
  useEffect(() => {
    productById();
  }, []);

  const [product, setproduct] = useState([]);

  const productById = async () => {
    const { data } = await axios.post("/api/getProduct", { uid });
    console.log("by id:", data);
    setproduct(data);
  };

  return <AppLayout title={product.name}>{uid}</AppLayout>;
}

export async function getServerSideProps(context) {
  const { params } = context;
  const { uid } = params;

  return {
    props: {
      uid,
    },
  };
}
