import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function Userinfo() {
  const [name, setname] = useState("");
  const [phone, setphone] = useState("");
  const [city, setcity] = useState("");
  const [address, setaddress] = useState("");
  const [postcode, setpostcode] = useState("");
  const [gender, setgender] = useState("");
  const [loading, setloading] = useState(false);

  const usersState = useSelector((state) => state.userReducers.userinfo);

  useEffect(() => {
    setname(usersState[0][0].name);
    setphone(usersState[0][0].phone);
    setcity(usersState[0][0].city);
    setaddress(usersState[0][0].address);
    setpostcode(usersState[0][0].postCode);
    setgender(usersState[0][0].gender);
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    const editedUserInfo = {
      id: usersState[0][0]._id,
      name,
      phone,
      city,
      address,
      postcode,
      gender,
    };
    console.log(editedUserInfo);
  };

  return (
    <div className="userinfo-container">
      <h2>ویرایش اطلاعات شخصی شما</h2>
      <form className="userinfo-form" onSubmit={submitHandler}>
        <label>نام</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setname(e.target.value)}
          className="input"
        />

        <label>جنسیت</label>
        <select
          value={gender}
          onChange={(e) => setgender(e.target.value)}
          className="input"
        >
          <option value="mele">آقا</option>
          <option value="female">خانم</option>
        </select>

        <label>شماره تماس</label>
        <input
          type="text"
          value={phone}
          onChange={(e) => setphone(e.target.value)}
          className="input"
        />

        <label>استان</label>
        <select
          value={city}
          className="input"
          onChange={(e) => setcity(e.target.value)}
        >
          <option value="tehran">تهران</option>
          <option value="nottehran">خارج از تهران</option>
        </select>

        <label>آدرس</label>
        <input
          type="text"
          value={address}
          onChange={(e) => setaddress(e.target.value)}
          className="input"
        />

        <label>کدپستی</label>
        <input
          type="text"
          value={postcode}
          onChange={(e) => setpostcode(e.target.value)}
          className="input"
        />

        <button className="btn">ثبت تغییرات</button>
      </form>
    </div>
  );
}
