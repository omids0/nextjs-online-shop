/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect } from "react";
import AppLayout from "../../components/AppLayout";
import db from "../../utils/db/mongoose";
import Orders from "../../models/Orders";

export default function userorder({ userorder, myOrders }) {
  useEffect(() => {
    console.log(myOrders);
  }, [myOrders]);

  return (
    <AppLayout>
      orders: {userorder}
      <h1>{myOrders.length}</h1>
    </AppLayout>
  );
}

export const getServerSideProps = async (context) => {
  const { params } = context;
  const { userorder } = params;

  await db.connect();
  const myOrders = await Orders.find({ "user._id": userorder });
  await db.disconnect();

  return {
    props: {
      userorder,
      myOrders: JSON.parse(JSON.stringify(myOrders)),
    },
  };
};
