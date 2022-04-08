import React, { useEffect, useState } from "react";
import Loading from "../Loading";

export default function AdminPost() {
  const [filterCatgry, setfilterCatgry] = useState("");
  const [searchPost, setsearchPost] = useState("");
  const [fetchOrders, setfetchOrders] = useState([]);

  useEffect(() => {
    getOrders();
  }, []);

  const getOrders = async () => {
    await fetch("/api/orders/")
      .then((response) => response.json())
      .then((data) => setfetchOrders(data));
  };

  return (
    <div className="adminpost-container">
      <h2>مدیریت مرسوله‌ها</h2>
      <div className="adminpost-filter-container">
        <input
          type="text"
          placeholder="جستجو"
          className="input adminpost-filter-input"
          value={searchPost}
          onChange={(e) => setsearchPost(e.target.value)}
        />
        <select
          className="input adminpost-filter-input"
          value={filterCatgry}
          onChange={(e) => setfilterCatgry(e.target.value)}
        >
          <option value="">دسته‌بندی مرسوله‌ها</option>
          <option value="confirmed">مرسوله‌های معلق</option>
          <option value="sendToPost">سفارشات ارسال به پست</option>
          <option value="inPost">سفارشات داخل پست</option>
          <option value="deliverd">سفارشات تحویل داده شده</option>
          <option value="noteAccept">سفارشات مرجوعی</option>
        </select>
      </div>
      <div>
        {fetchOrders.length > 0 ? (
          <div className="table-div order-table">
            <table className="table">
              <thead>
                <tr>
                  <td>#</td>
                  <td>کد سفارش</td>
                  <td>نام کاربر</td>
                  <td>شماره تماس کاربر</td>
                  <td>استان</td>
                  <td>آدرس</td>
                  <td>تعداد کالا</td>
                  <td>قیمت فاکتور</td>
                  <td>توضیحات</td>
                  <td>تایید جهت ارسال</td>
                  <td>ارسال به پست</td>
                  <td>داخل پست</td>
                  <td>تحویل داده شده</td>
                  <td>مرجوعی</td>
                </tr>
              </thead>
              <tbody>
                {fetchOrders.map((item, i) => (
                  <tr key={item._id}>
                    <td>{i + 1}</td>
                    <td>{item._id}</td>
                    <td>{item.user.name}</td>
                    <td>{item.user.phone}</td>
                    <td>{item.user.city}</td>
                    <td>{item.user.address}</td>
                    <td>{item.products.length}</td>
                    <td>1000</td>
                    <td>{item.description}</td>
                    <td>{item.confirmed ? "تایید شده" : "در انتظار تایید"}</td>
                    <td>{item.sendToPost ? "تایید شده" : "در انتظار تایید"}</td>
                    <td>{item.inPost ? "تایید شده" : "در انتظار تایید"}</td>
                    <td>{item.deliverd ? "تایید شده" : "در انتظار تایید"}</td>
                    <td>{item.noteAccept ? "تایید شده" : "در انتظار تایید"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
}
