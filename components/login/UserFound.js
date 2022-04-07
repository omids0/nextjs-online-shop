import React from "react";
import AppLayout from "../AppLayout";
import Link from "next/Link";

export default function UserFound({ user }) {
  return (
    <AppLayout title="Welcome">
      <div className="login-welcome-container">
        <h2>{`سلام ${Object.values(user[0].name)} عزیز!`}</h2>
        <p>جهت مشاهده محصولات و ثبت سفارش، روی ادامه کلیک نمایید.</p>
        <Link href="/" passHref>
          <button className="btn login-welcome-btn">ادامه</button>
        </Link>
      </div>
    </AppLayout>
  );
}
