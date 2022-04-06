import React from "react";

export default function AdminDashboard() {
  return (
    <div className="admin-dashboard-container">
      <div className="admin-dashboard-division admin-dashboard-users">
        <h3>تعداد کل کاربران</h3>
        <p>10 نفر</p>
      </div>
      <div className="admin-dashboard-division admin-dashboard-products">
        <h3>کل محصولات</h3>
        <p>16 عدد</p>
      </div>
      <div className="admin-dashboard-division admin-dashboard-products">
        <h3>کل محصولات موجود</h3>
        <p>14 عدد</p>
      </div>
      <div className="admin-dashboard-division admin-dashboard-orders">
        <h3>کل سفارشات</h3>
        <p>1124 عدد</p>
      </div>
      <div className="admin-dashboard-division admin-dashboard-orders">
        <h3>سفارشات معلق</h3>
        <p>12 عدد</p>
      </div>
      <div className="admin-dashboard-division admin-dashboard-orders">
        <h3>سفارشات ارسال به پست</h3>
        <p>101 عدد</p>
      </div>
      <div className="admin-dashboard-division admin-dashboard-orders">
        <h3>سفارشات داخل پست</h3>
        <p>90 عدد</p>
      </div>
      <div className="admin-dashboard-division admin-dashboard-orders">
        <h3>سفارشات تحویل داده شده</h3>
        <p>500 عدد</p>
      </div>
      <div className="admin-dashboard-division admin-dashboard-orders">
        <h3>سفارشات مرجوعی</h3>
        <p>2 عدد</p>
      </div>
    </div>
  );
}
