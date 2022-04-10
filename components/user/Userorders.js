import React from "react";

export default function Userorders({ orders }) {
  return (
    <div className="components-container user-orders-clumn">
      <div className="user-orders-list-container">
        <div className="user-orders-list-status">
          <div className="user-orders-status-desc">
            <h2>{orders[0].user[0].name} عزیز!</h2>
            <p>تعداد کل سفارشات شما: {orders.length} عدد</p>
          </div>
          <i className="bi bi-truck bi-truck-delivery"></i>
        </div>
      </div>
      <div className="user-orders-maping-container">
        {orders.map((item) => (
          <div key={item._id} className="user-order-item-container fade">
            <div>
              {item.products.map((product) => (
                <div key={product._id} className="user-order-product-container">
                  <p className="user-order-product-name">{product.name}</p>
                  {product.inOff && (
                    <p className="off">%{product.offPercent * 100} -</p>
                  )}
                  <p className="user-order-product-desc">{`تعداد: ${product.order_qty} عدد - قیمت پایه: ${product.price} ت`}</p>
                </div>
              ))}
            </div>
            <div>
              <h4>وضعیت ارسال مرسوله:</h4>
              {!item.deliverd && !item.noteAccept && (
                <div>
                  <p className="bold-text mt2">تاییدیه سایت:</p>
                  <p className="light-black-text">
                    {item.confirmed ? "تایید شد." : "در انتظار تایید"}
                  </p>
                  <p className="bold-text mt2">تحویل به پست:</p>
                  <p className="light-black-text">
                    {item.sendToPost ? "تایید شد." : "در انتظار تایید"}
                  </p>
                  <p className="bold-text mt2">داخل پست:</p>
                  <p className="light-black-text">
                    {item.inPost ? "تایید شد." : "در انتظار تایید"}
                  </p>
                </div>
              )}
              {item.deliverd && !item.noteAccept && (
                <div className="order-deliverd mt2">تحویل داده شد.</div>
              )}
              {item.deliverd && item.noteAccept && (
                <div className="order-notaccept mt2">مرجوع گردید.</div>
              )}
              <p className="mt2">کد پیگیری:</p>
              <p className="light-black-text">{item._id}</p>
            </div>
            <div>
              <h4>مشخصات سفارش دهنده:</h4>
              <p className="mt2 bold-text">آدرس:</p>
              <p className="light-black-text">{item.user[0].address}</p>
              <p className="mt2 bold-text">شماره تماس:</p>
              <p className="light-black-text">{item.user[0].phone}</p>
              <p className="mt2 bold-text">توضیحات:</p>
              <p className="light-black-text">{item.description}</p>
            </div>
            <div className="order-price-total">
              <h2>{item.factorFinalPrice}</h2>
              <h1>تومان</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
