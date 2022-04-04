import React from "react";
import AppLayout from "../../components/AppLayout";
import Basket from "../../components/basket/Basket";

export default function index() {
  return (
    <AppLayout title="Orders" description='ثبت مرسوله های امید شاپ'>
      <Basket />
    </AppLayout>
  );
}
