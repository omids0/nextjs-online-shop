import React from "react";
import Link from "next/link";

export default function UserOrdersEmpty() {
  return (
    <div className="components-container">
      <div className="ordersEmpty">
        <i className="bi bi-basket ordersEmpty-basket"></i>
        <h3>لیست سفارشات شما خالی است!</h3>
        <p>جهت انتخاب و ثبت سفارش به صفحه اصلی مراجعه نمایید.</p>
        <Link href="/" passHref>
          صفحه اصلی
        </Link>
      </div>
    </div>
  );
}
