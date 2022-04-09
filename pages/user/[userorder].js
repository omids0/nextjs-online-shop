/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect } from "react";
import AppLayout from "../../components/AppLayout";
import db from "../../utils/db/mongoose";
import Orders from "../../models/Orders";
import Userorders from "../../components/user/Userorders";
import UserOrdersEmpty from "../../components/user/UserOrdersEmpty";

export default function userorder({ userorder, myOrders }) {

  return (
    <AppLayout title='Your Orders'>
      {myOrders.length > 0 && (<Userorders orders={myOrders} />)}
      {myOrders.length === 0 && (<UserOrdersEmpty />)}
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
