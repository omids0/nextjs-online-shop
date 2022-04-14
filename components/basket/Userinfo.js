import React, { useState } from "react";

export default function Userinfo() {
      const [name, setname] = useState('')
      const [phone, setphone] = useState('')
      const [city, setcity] = useState('')
      const [address, setaddress] = useState('')
      const [postcode, setpostcode] = useState('')
  return (
    <div className="userinfo-container">
      <h2>ویرایش اطلاعات شخصی شما</h2>
      <form className='userinfo-form'>
        <label>نام</label>
        <input
          type="text"
          value={name}
          onChange=""
          className="input"
        />

        <label>شماره تماس</label>
        <input
          type="text"
          value={phone}
          onChange=""
          className="input"
        />

        <label>استان</label>
        <input
          type="text"
          value={city}
          onChange=""
          className="input"
        />

        <label>آدرس</label>
        <input
          type="text"
          value={address}
          onChange=""
          className="input"
        />

        <label>کدپستی</label>
        <input
          type="text"
          value={postcode}
          onChange=""
          className="input"
        />
      </form>
    </div>
  );
}
