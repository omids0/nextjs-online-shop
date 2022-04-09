import React, { useEffect, useState } from "react";
import Loading from "../Loading";

export default function AdminDashboard() {
  const [users, setusers] = useState([]);
  const [orders, setorders] = useState([]);
  const [products, setproducts] = useState([]);

  useEffect(() => {
    fetchUsers();
    fetchOrders();
    fetchProducts();
  }, []);

  const fetchUsers = async () => {
    await fetch("/api/users/")
      .then((response) => response.json())
      .then((data) => setusers(data));
  };

  const fetchOrders = async () => {
    await fetch("/api/orders/")
      .then((response) => response.json())
      .then((data) => setorders(data));
  };

  const fetchProducts = async () => {
    await fetch("/api/products/")
      .then((response) => response.json())
      .then((data) => setproducts(data));
  };

  return (
    <div>
      {users.length > 0 && orders.length > 0 && products.length > 0 ? (
        <div className="admin-dashboard-container">
          <div className="admin-dashboard-division admin-dashboard-users">
            <h3>تعداد کل کاربران</h3>
            <p>{users.length} نفر</p>
          </div>
          <div className="admin-dashboard-division admin-dashboard-products">
            <h3>کل محصولات</h3>
            <p>{products.length} عدد</p>
          </div>
          <div className="admin-dashboard-division admin-dashboard-products">
            <h3>کل محصولات موجود</h3>
            <p>{products.filter((product) => product.qty > 0).length} عدد</p>
          </div>
          <div className="admin-dashboard-division admin-dashboard-orders">
            <h3>کل سفارشات</h3>
            <p>{orders.length} عدد</p>
          </div>
          <div className="admin-dashboard-division admin-dashboard-orders">
            <h3>سفارشات معلق</h3>
            <p>
              {orders.filter((product) => product.confirmed === false).length}{" "}
              عدد
            </p>
          </div>
          <div className="admin-dashboard-division admin-dashboard-orders">
            <h3>سفارشات ارسال به پست</h3>
            <p>
              {orders.filter((product) => product.sendToPost === false).length}{" "}
              عدد
            </p>
          </div>
          <div className="admin-dashboard-division admin-dashboard-orders">
            <h3>سفارشات داخل پست</h3>
            <p>
              {orders.filter((product) => product.inPost === false).length} عدد
            </p>
          </div>
          <div className="admin-dashboard-division admin-dashboard-orders">
            <h3>سفارشات تحویل داده شده</h3>
            <p>
              {orders.filter((product) => product.deliverd === false).length} عدد
            </p>
          </div>
          <div className="admin-dashboard-division admin-dashboard-orders">
            <h3>سفارشات مرجوعی</h3>
            <p>
              {orders.filter((product) => product.noteAccept === false).length}{" "}
              عدد
            </p>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
}
