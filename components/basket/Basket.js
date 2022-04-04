import React, { useState } from "react";
import BasketProcess from "./BasketProcess";
import Link from 'next/link'

export default function Basket() {
  const [basket, setbasket] = useState([]);
  return (
    <div className="basket-container">
    {basket.length > 0 && <BasketProcess />}
      <div className="basket-detailes-container">
        {basket.length > 0 ? (
          <div>1</div>
        ) : (
          <div className="empty-basket">
            <i className="bi bi-basket2"></i>
            <h2>سبد شما خالی است!</h2>
            <p>می‌توانید برای مشاهده محصولات بیشتر به صفحه نخست بروید:</p>
            <Link className='link' href='/' passHref>صفحه نخست</Link>
          </div>
        )}
      </div>
    </div>
  );
}
