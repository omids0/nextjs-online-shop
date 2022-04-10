/* eslint-disable react-hooks/exhaustive-deps */
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserHistoryBasketAction } from "../redux/actions/basketActions";

export default function Header() {
  const basket = useSelector((state) => state.addToBasketReducer.basketItems);
  const productsstate = useSelector((state) => state.productsReducer.products);

  const dispatch = useDispatch();

  const [hamburMenu, sethamburMenu] = useState(false);
  const [userdata, setuserdata] = useState("");
  const [search, setsearch] = useState("");
  const [products, setproducts] = useState([]);

  useEffect(() => {
    const basket = localStorage.getItem("omidshopbasket")
      ? JSON.parse(localStorage.getItem("omidshopbasket"))
      : [];

    const userdatas = localStorage.getItem("omidshopuser")
      ? JSON.parse(localStorage.getItem("omidshopuser"))
      : [];
    setuserdata(userdatas);

    dispatch(getUserHistoryBasketAction(basket));
  }, []);

  useEffect(() => {
    setproducts(productsstate[1]);
  }, [productsstate]);

  const showHamburgerMenu = () => {
    sethamburMenu(!hamburMenu);
  };

  function userLogOut() {
    localStorage.removeItem("omidshopuser");
    setuserdata("");
  }

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
              <Link href="/about" passHref>
                <p>درباره سایت</p>
              </Link>
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
          <div className="desktop-search-div">
            <input
              type="text"
              className="input desktop-search"
              placeholder="جستجو"
              value={search}
              onChange={(e) => setsearch(e.target.value)}
            />
            {search.length > 0 && (
              <div className="search-result-container">
                {products
                  .filter((product) =>
                    product.name.toLowerCase().includes(search.toLowerCase())
                  )
                  .map((item) => (
                    <div key={item._id}>
                      <Link href={`/product/${item._id}`} passHref>
                        <div className="header-search-item">
                          <p>{item.name}</p>
                        </div>
                      </Link>
                    </div>
                  ))}
              </div>
            )}
          </div>
          <div className="header-user-details">
            {userdata.length > 0 ? (
              <div className="header-userdata">
                <p>{userdata[0].name}</p>
                <div className="header-user-options">
                  <Link href={`/user/${userdata[0]._id}`} passHref>
                    <p className="header-user-options-btn">سفارشات من</p>
                  </Link>
                  <Link href="/admin" passHref>
                    <p className="header-user-options-btn">صفحه ادمین</p>
                  </Link>
                  <p className="header-user-options-btn" onClick={userLogOut}>
                    خروج
                  </p>
                </div>
              </div>
            ) : (
              <Link href="/login" passHref>
                <button className="btn header-login-btn">ورود | ثبت نام</button>
              </Link>
            )}{" "}
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
          <div>
            <input
              className="header-search"
              type="text"
              placeholder="جستجو"
              value={search}
              onChange={(e) => setsearch(e.target.value)}
            />
            {search.length > 0 && (
              <div className="search-result-container">
                {products
                  .filter((product) =>
                    product.name.toLowerCase().includes(search.toLowerCase())
                  )
                  .map((item) => (
                    <div key={item._id}>
                      <Link href={`/product/${item._id}`} passHref>
                        <div className="header-search-item">
                          <p>{item.name}</p>
                        </div>
                      </Link>
                    </div>
                  ))}
              </div>
            )}
          </div>
        </div>
        <div className="header-user-details">
          {userdata.length > 0 ? (
            <div className="header-userdata">
              <p>{userdata[0].name}</p>
              <div className="header-user-options">
                <Link href={`/user/${userdata[0]._id}`} passHref>
                  <p className="header-user-options-btn">سفارشات من</p>
                </Link>
                <Link href="/admin" passHref>
                  <p className="header-user-options-btn">دسترسی ادمین</p>
                </Link>
                <p className="header-user-options-btn" onClick={userLogOut}>
                  خروج
                </p>
              </div>
            </div>
          ) : (
            <Link href="/login" passHref>
              <button className="btn">ورود</button>
            </Link>
          )}

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
