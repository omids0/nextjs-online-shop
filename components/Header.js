import Image from "next/image";
import React from "react";

export default function Header() {
  return (
    <header>
      <div className="header-first-section">
        <button className="login-btn">|||</button>
        <Image
          src="/images/—Pngtree—online shopping sale vector _3548364.png"
          width={80}
          height={80}
          alt="onlineshope-logo"
        />
      </div>
      <div className="header-second-section">
        <div>
          <input type="text" className="" placeholder="جستجو" />
        </div>
        <div>
          <button className="btn">ورود</button>
          <button>sabad</button>
        </div>
      </div>
    </header>
  );
}
