import React, { useState } from "react";
import AdminDashboard from './AdminDashboard'
import AdminProducts from './AdminProducts'
import AdminUsers from './AdminUsers'
import AdminPost from './AdminPost'

export default function Adminpage() {
  const [dashBoard, setdashBoard] = useState(true);
  const [products, setproducts] = useState(false);
  const [users, setusers] = useState(false);
  const [orders, setorders] = useState(false);

  const showdashboard = () => {
    setdashBoard(true);
    setproducts(false);
    setusers(false);
    setorders(false);
  };

  const showpoducts = () => {
    setdashBoard(false);
    setproducts(true);
    setusers(false);
    setorders(false);
  };

  const showusers = () => {
    setdashBoard(false);
    setproducts(false);
    setusers(true);
    setorders(false);
  };

  const showorders = () => {
    setdashBoard(false);
    setproducts(false);
    setusers(false);
    setorders(true);
  };
  return (
    <div>
      <div className="admin-navbar-board">
        <button
          className={
            dashBoard ? "btn admin-nav admin-nav-active" : "btn admin-nav"
          }
          onClick={showdashboard}
        >
          داشبورد
        </button>
        <button
          className={
            products ? "btn admin-nav admin-nav-active" : "btn admin-nav"
          }
          onClick={showpoducts}
        >
          محصولات
        </button>
        <button
          className={users ? "btn admin-nav admin-nav-active" : "btn admin-nav"}
          onClick={showusers}
        >
          کاربران
        </button>
        <button
          className={
            orders ? "btn admin-nav admin-nav-active" : "btn admin-nav"
          }
          onClick={showorders}
        >
          مرسوله‌ها
        </button>
      </div>
      <div className="admin-container">
        {dashBoard && <AdminDashboard />}
        {products && <AdminProducts />}
        {users && <AdminUsers />}
        {orders && <AdminPost />}
      </div>
    </div>
  );
}
