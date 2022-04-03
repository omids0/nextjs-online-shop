import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header>
      <div className="header-first-section">
        <Link href="/admin" passHref>
          <button className="btn hamburger-menu">
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
        </Link>
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
            <button className="btn header-login-btn">ورود | ثبت نام</button> {` | `}
            <button className="cart-btn">
              <i className="bi bi-cart sabad"></i>
            </button>
          </div>
        </div>
      </div>
      <div className="header-second-section">
        <div className="header-part-section1">
          <input className="header-search" type="text" placeholder="جستجو" />
        </div>
        <div>
          <button className="btn">ورود</button>
          {` | `}
          <button className="cart-btn">
            <i className="bi bi-cart sabad"></i>
          </button>
        </div>
      </div>
    </header>
  );
}
