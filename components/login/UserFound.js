/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import AppLayout from "../AppLayout";
import Link from "next/link";

export default function UserFound({ user }) {
  let username = localStorage.getItem("omidshopuser")
  ? JSON.parse(localStorage.getItem("omidshopuser"))
  : [];
  
  console.log(username);

  return (
    <AppLayout title="Welcome">
      <div className="login-welcome-container">
        <h2>{`سلام ${username[0].name}!`}</h2>
        <p>جهت مشاهده محصولات و ثبت سفارش، روی ادامه کلیک نمایید.</p>
        <Link href="/" passHref>
          <button className="btn login-welcome-btn">ادامه</button>
        </Link>
      </div>
    </AppLayout>
  );
}
