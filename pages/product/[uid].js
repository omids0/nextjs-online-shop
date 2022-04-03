/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function EachProduct({ uid }) {
  useEffect(() => {
    productById()
  }, []);

  const productById = async () => {
    const { data } = await axios.post("/api/getProduct", { uid });
    console.log("by id:", data);
  };

  return <div>{uid}</div>;
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
