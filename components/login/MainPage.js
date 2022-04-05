import Image from "next/image";
import React from "react";

export default function MainPage() {
  return (
    <div className="login-mainpage-countainer">
      <div className="login-mainpage-input-body">
        <div className="login-mainpage-logo">
          <Image
            src="/images/—Pngtree—online shopping sale vector _3548364.png"
            alt="omid shop login page"
            width={1500}
            height={1500}
          />
        </div>
        <h3>ورود | ثبت نام</h3>
        <p>سلام!</p>
        <p>شماره موبایل خودتون رو وارد کنید:</p>
        <input type="text" className="input login-input" placeholder="093X XXX XXXX"/>
        <button className="btn login-enter-btn">ورود</button>
      </div>
    </div>
  );
}
