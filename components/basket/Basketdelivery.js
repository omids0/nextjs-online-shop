import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useSelector } from "react-redux";

export default function Basketdelivery() {
  const basket = useSelector((state) => state.addToBasketReducer.basketItems);

  let factorFinalPrice = basket.reduce((c, x) => c + x.total_price, 0);

  const [userdata, setuserdata] = useState([]);
  const [basketdata, setbasketdata] = useState([]);
  const [description, setdescription] = useState("");
  const [loading, setloading] = useState(false);

  useEffect(() => {
    const userdatas = localStorage.getItem("omidshopuser")
      ? JSON.parse(localStorage.getItem("omidshopuser"))
      : [];
    setuserdata(userdatas);

    const basket = localStorage.getItem("omidshopbasket")
      ? JSON.parse(localStorage.getItem("omidshopbasket"))
      : [];
    setbasketdata(basket);
  }, []);

  async function saveOrderHandler() {
    const userOrder = {
      user: userdata[0],
      products: basketdata,
      description: description ? description : "_",
      confirmed: false,
      sendToPost: false,
      inPost: false,
      deliverd: false,
      noteAccept: false,
      factorFinalPrice,
    };

    const update = "addneworder";

    setloading(true);

    await fetch("/api/updateorder/", {
      method: "POST",
      body: JSON.stringify({ userOrder, update }),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((data) => alert(`شماره پیگیری ${data._id}`));
    window.location.href = "/";
    localStorage.removeItem("omidshopbasket");
  }

  return (
    <div className="basketdelivery-container">
      <h2>اطلاعات تکمیلی سفارش شما</h2>
      {!userdata.length > 0 && (
        <div className="basketdelivery-userdata-empty-container">
          <p>جهت ادامه و ثبت سفارش خود لطفا ثبت‌نام/ورود نمایید.</p>
          <Link href="/login" passHref>
            <button className="btn basketdelivery-userdata-empty-container-btn">
              ثبت‌نام/ورود
            </button>
          </Link>
        </div>
      )}
      {userdata.length > 0 && (
        <div className="basketdelivery-userdata-container">
          <h3>مشخصات شما</h3>
          <div className="basketdelivery-userdata-details">
            <label>
              نام
              <p className="basketdelivery-userdata-p">{userdata[0].name}</p>
            </label>
            <label>
              شماره تماس
              <p className="basketdelivery-userdata-p">{userdata[0].phone}</p>
            </label>
            <label>
              استان
              <p className="basketdelivery-userdata-p">
                {userdata[0].city === "tehran" ? "تهران" : "خارج از تهران"}
              </p>
            </label>
            <label>
              آدرس
              <p className="basketdelivery-userdata-p">{userdata[0].address}</p>
            </label>
            <label>
              کدپستی
              <p className="basketdelivery-userdata-p">
                {userdata[0].postCode}
              </p>
            </label>
            <Link href="/basket/userinfo" passHref>
              <button className="btn edit-user-info">ویرایش اطلاعات</button>
            </Link>
          </div>
        </div>
      )}
      {basketdata.length > 0 && (
        <div className="basketdelivery-products-container">
          <h3>مشخصات سفارشات شما</h3>
          <div className="table-div">
            <table className="table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>نام محصولات</th>
                  <th>قیمت واحد</th>
                  <th>تعداد</th>
                  <th>مجموع</th>
                </tr>
              </thead>
              <tbody>
                {basketdata.map((item, i) => (
                  <tr key={item._id} className="tr">
                    <th>{i + 1}</th>
                    <th>{item.name}</th>
                    <th>{item.finalPrice}</th>
                    <th>{item.order_qty}</th>
                    <th>{item.total_price}</th>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="basketdelivery-products-factor">
              <p>مجموع مبلغ قابل پرداخت:</p>
              <h3>{factorFinalPrice} تومان </h3>
            </div>
          </div>
        </div>
      )}
      {basketdata.length > 0 && userdata.length > 0 && (
        <div className="basketdelivery-order-container">
          <h3>در صورتی که توضیحاتی در خصوص سفارش دارید، یادداشت بفرمایید:</h3>
          <textarea
            className="input basketdelivery-order-description"
            placeholder="توضیحاتی شامل شماره تماس دوم و ..."
            value={description}
            onChange={(e) => setdescription(e.target.value)}
          ></textarea>
          <button
            className="btn basketdelivery-order-btn"
            onClick={saveOrderHandler}
            disabled={loading && "false"}
          >
            {loading ? "لطفا صبر کنید.." : "تایید و پرداخت"}
          </button>
        </div>
      )}
    </div>
  );
}
