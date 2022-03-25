/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import Adminpage from "../../components/adminpage/Adminpage";
import AppLayout from "../../components/AppLayout";

export default function index() {
  return (
    <AppLayout title="AdminPage" description='صفحه مدیریت سایت اعم از تعریف اجناس، بررسی کاربران و سفارشات'>
      <Adminpage />
    </AppLayout>
  );
}
