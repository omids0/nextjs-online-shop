/* eslint-disable react-hooks/exhaustive-deps */
import AppLayout from "../components/AppLayout";
import Homepage from "../components/Homepage";
import { useDispatch } from "react-redux";
import React, { useEffect } from "react";
import {getUserHistoryBasketAction} from '../redux/actions/basketActions'

export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    const basket = localStorage.getItem("omidshopbasket")
      ? JSON.parse(localStorage.getItem("omidshopbasket"))
      : [];
    dispatch(getUserHistoryBasketAction(basket));
  }, []);

  return (
    <AppLayout description=" امید شاپ، سایتی جهت ثبت اسان و ارسال سریع با ضمانت کیفیت می باشد ">
      <Homepage />
    </AppLayout>
  );
}
