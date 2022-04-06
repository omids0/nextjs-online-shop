import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserHistoryBasketAction } from "../redux/actions/basketActions";

export default function Header() {
  const basket = useSelector((state) => state.addToBasketReducer.basketItems);

  const dispatch = useDispatch();

  const [hamburMenu, sethamburMenu] = useState(false);

  useEffect(() => {
    const basket = localStorage.getItem("omidshopbasket")
      ? JSON.parse(localStorage.getItem("omidshopbasket"))
      : [];
    dispatch(getUserHistoryBasketAction(basket));
  }, []);

  const showHamburgerMenu = () => {
    sethamburMenu(!hamburMenu);
  };

  return (
    <header>
      <div className="header-first-section">
        <button className="btn hamburger-menu" onClick={showHamburgerMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            className="bi bi-list"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        </button>
        {hamburMenu && (
          <div className="hamburger-menu-up">
            <div className="hamburger-menu-up1">
              <button className="btn" onClick={() => sethamburMenu(false)}>
                <i className="bi bi-x btn-x"></i>
              </button>
              <p>Omid Shop</p>
            </div>
            <div className="hamburger-menu-up2">
              <Link href="/admin" passHref>
                <p>دسترسی ادمین</p>
              </Link>
              <Link href="/login" passHref>
                <p>ورود یا ثبت نام</p>
              </Link>
              <p>فرصت های شغلی</p>
              <p>درباره سایت</p>
            </div>
          </div>
        )}
        <Link href="/" passHref>
          <Image
            src="/images/—Pngtree—online shopping sale vector _3548364.png"
            width={80}
            height={80}
            alt="onlineshope-logo"
          />
        </Link>
        <div className="desktop-header">
          <input
            type="text"
            className="input desktop-search"
            placeholder="جستجو"
          />
          <div>
            <Link href="/login" passHref>
              <button className="btn header-login-btn">ورود | ثبت نام</button>
            </Link>{" "}
            {` | `}
            <Link href="/basket" passHref>
              <button className="cart-btn">
                <div className="header-basket-qty">
                  {basket.length > 0 && (
                    <p className="basket-length">{basket.length}</p>
                  )}
                  <i className="bi bi-cart sabad"></i>
                </div>
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="header-second-section">
        <div className="header-part-section1">
          <input className="header-search" type="text" placeholder="جستجو" />
        </div>
        <div>
          <Link href="/login" passHref>
            <button className="btn">ورود</button>
          </Link>
          {` | `}
          <Link href="/basket" passHref>
            <button className="cart-btn">
              <div className="header-basket-qty">
                {basket.length > 0 && (
                  <p className="basket-length">{basket.length}</p>
                )}
                <i className="bi bi-cart sabad"></i>
              </div>
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
}
