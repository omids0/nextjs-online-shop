import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";

export default function MainPage() {
  const [userPhoneNum, setuserPhoneNum] = useState("");
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
        <input
          type="text"
          className="input login-input"
          placeholder="093X XXX XXXX"
          value={userPhoneNum}
          onChange={(e) => setuserPhoneNum(e.target.value)}
        />
        {userPhoneNum.length >= 11 && (<Link href={`/login/${userPhoneNum}`} passHref>
        <button
          className="btn login-enter-btn"
        >
          ورود
        </button>
      </Link>)}
        
      </div>
    </div>
  );
}
