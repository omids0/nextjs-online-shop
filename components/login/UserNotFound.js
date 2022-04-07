import React, { useState } from "react";
import AppLayout from "../AppLayout";

export default function UserNotFound({ userPhoneNum }) {
  const [name, setname] = useState("");
  const [address, setaddress] = useState("");
  const [gender, setgender] = useState("male");
  const [postcode, setpostcode] = useState("");
  const [city, setcity] = useState("tehran");
  const [loading, setloading] = useState(false);

  async function submitHandler(e) {
    e.preventDefault();
    if (name && address && gender && city) {
      const user = {
        name,
        address,
        gender,
        city,
        postcode: Number(postcode),
        phone: Number(userPhoneNum),
        userAccess: "customer",
      };
      setloading(true);
      await fetch("/api/users/", {
        method: "POST",
        body: JSON.stringify({ user }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log("user saved");
      window.location.href = "/";
    } else {
      alert("لطفا تمامی موارد را تکمیل نمایید");
    }
  }

  return (
    <AppLayout>
      <div className="login-notfound-container">
        <h2>سلام، خوش آمدید!</h2>
        <p>جهت ثبت‌نام فرم زیر را با دقت تکمیل نمایید و سپس ثبت کنید</p>
        <form onSubmit={submitHandler}>
          <label>نام</label>
          <input
            type="text"
            placeholder="نام"
            value={name}
            onChange={(e) => setname(e.target.value)}
            className="input save-user-form"
          />
          <label>شماره همراه</label>
          <input
            type="text"
            placeholder="شماره همراه"
            value={userPhoneNum}
            className="input save-user-form"
          />
          <label>آدرس</label>
          <input
            type="text"
            placeholder="آدرس"
            value={address}
            onChange={(e) => setaddress(e.target.value)}
            className="input save-user-form"
          />
          <label>جنسیت</label>
          <select
            placeholder="جنسیت"
            value={gender}
            onChange={(e) => setgender(e.target.value)}
            className="input save-user-form"
          >
            <option value="male">آقا</option>
            <option value="female">خانم</option>
          </select>
          <label>کد پستی</label>
          <input
            type="text"
            placeholder="کد پستی"
            value={postcode}
            onChange={(e) => setpostcode(e.target.value)}
            className="input save-user-form"
          />
          <label>شهر</label>
          <select
            placeholder="شهر"
            value={city}
            onChange={(e) => setcity(e.target.value)}
            className="input save-user-form"
          >
            <option value="tehran">تهران</option>
            <option value="nottehran">خارج از تهران</option>
          </select>
          <button className="btn save-user-form-btn">
            {loading ? "لطفا صبر کنید..." : "ثبت"}
          </button>
        </form>
      </div>
    </AppLayout>
  );
}
