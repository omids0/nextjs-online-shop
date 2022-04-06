/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react";
import AppLayout from "../../components/AppLayout";
import db from "../../utils/db/mongoose";
import Products from "../../models/Products";
import SelectedProduct from "../../components/SelectedProduct";

export default function EachProduct({ product }) {
  return (
    <AppLayout>
      <SelectedProduct product={product} />
    </AppLayout>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;
  const { uid } = params;

  await db.connect();
  const product = await Products.findById(uid);
  await db.disconnect();

  return {
    props: {
      uid,
      product: JSON.parse(JSON.stringify(product)),
    },
  };
}
