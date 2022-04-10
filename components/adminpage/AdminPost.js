import React, { useEffect, useState } from "react";
import Loading from "../Loading";

export default function AdminPost() {
  const [filterCatgry, setfilterCatgry] = useState("");
  const [searchPost, setsearchPost] = useState("");
  const [fetchOrders, setfetchOrders] = useState([]);
  const [loading, setloading] = useState(false);
  const [loadOn, setloadOn] = useState("");
  const [clickedId, setclickedId] = useState("");

  useEffect(() => {
    getOrders();
  }, []);

  const getOrders = async () => {
    await fetch("/api/orders/")
      .then((response) => response.json())
      .then((data) => setfetchOrders(data));

    setloadOn("");
    setloading(false);
  };

  async function confirmHandler(id, update) {
    setloadOn(update);
    setloading(true);
    setclickedId(id);

    await fetch("/api/updateorder/", {
      method: "POST",
      body: JSON.stringify({ id, update }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    getOrders();
  }

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
                    <td>{item.user[0].name}</td>
                    <td>{item.user[0].phone}</td>
                    <td>{item.user[0].city}</td>
                    <td>{item.user[0].address}</td>
                    <td>{item.products.length}</td>
                    <td>{item.factorFinalPrice} t</td>
                    <td>{item.description}</td>
                    <td>
                    
                    {loading ? (
                      item._id === clickedId && loadOn === "confirmed" ? (
                        <button className="btn btn-order-waiting">
                          wait...
                        </button>
                      ) : item.confirmed ? (
                        <button className="btn btn-order-ok">
                          تایید شده
                        </button>
                      ) : (
                        <button
                          className="btn btn-order-wait"
                          onClick={() =>
                            confirmHandler(item._id, "confirmed")
                          }
                        >
                          در انتظار تایید
                        </button>
                      )
                    ) : item.confirmed ? (
                      <button className="btn btn-order-ok">تایید شده</button>
                    ) : (
                      <button
                        className="btn btn-order-wait"
                        onClick={() => confirmHandler(item._id, "confirmed")}
                      >
                        در انتظار تایید
                      </button>
                    )}
                    </td>
                    <td>
                      {loading ? (
                        item._id === clickedId && loadOn === "sendToPost" ? (
                          <button className="btn btn-order-waiting">
                            wait...
                          </button>
                        ) : item.sendToPost ? (
                          <button className="btn btn-order-ok">
                            تایید شده
                          </button>
                        ) : (
                          <button
                            className="btn btn-order-wait"
                            onClick={() =>
                              confirmHandler(item._id, "sendToPost")
                            }
                          >
                            در انتظار تایید
                          </button>
                        )
                      ) : item.sendToPost ? (
                        <button className="btn btn-order-ok">تایید شده</button>
                      ) : (
                        <button
                          className="btn btn-order-wait"
                          onClick={() => confirmHandler(item._id, "sendToPost")}
                        >
                          در انتظار تایید
                        </button>
                      )}
                    </td>
                    <td>
                      {loading ? (
                        item._id === clickedId && loadOn === "inPost" ? (
                          <button className="btn btn-order-waiting">
                            wait...
                          </button>
                        ) : item.inPost ? (
                          <button className="btn btn-order-ok">
                            تایید شده
                          </button>
                        ) : (
                          <button
                            className="btn btn-order-wait"
                            onClick={() => confirmHandler(item._id, "inPost")}
                          >
                            در انتظار تایید
                          </button>
                        )
                      ) : item.inPost ? (
                        <button className="btn btn-order-ok">تایید شده</button>
                      ) : (
                        <button
                          className="btn btn-order-wait"
                          onClick={() => confirmHandler(item._id, "inPost")}
                        >
                          در انتظار تایید
                        </button>
                      )}
                    </td>
                    <td>
                      {loading ? (
                        item._id === clickedId && loadOn === "deliverd" ? (
                          <button className="btn btn-order-waiting">
                            wait...
                          </button>
                        ) : item.deliverd ? (
                          <button className="btn btn-order-ok">
                            تایید شده
                          </button>
                        ) : (
                          <button
                            className="btn btn-order-wait"
                            onClick={() => confirmHandler(item._id, "deliverd")}
                          >
                            در انتظار تایید
                          </button>
                        )
                      ) : item.deliverd ? (
                        <button className="btn btn-order-ok">تایید شده</button>
                      ) : (
                        <button
                          className="btn btn-order-wait"
                          onClick={() => confirmHandler(item._id, "deliverd")}
                        >
                          در انتظار تایید
                        </button>
                      )}
                    </td>
                    <td>
                      {loading ? (
                        item._id === clickedId && loadOn === "noteAccept" ? (
                          <button className="btn btn-order-waiting">
                            wait...
                          </button>
                        ) : item.noteAccept ? (
                          <button className="btn btn-order-ok">
                            تایید شده
                          </button>
                        ) : (
                          <button
                            className="btn btn-order-wait"
                            onClick={() =>
                              confirmHandler(item._id, "noteAccept")
                            }
                          >
                            در انتظار تایید
                          </button>
                        )
                      ) : item.noteAccept ? (
                        <button className="btn btn-order-ok">تایید شده</button>
                      ) : (
                        <button
                          className="btn btn-order-wait"
                          onClick={() => confirmHandler(item._id, "noteAccept")}
                        >
                          در انتظار تایید
                        </button>
                      )}
                    </td>
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
