/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";

export default function AddNewProductForm() {
  const [name, setname] = useState("");
  const [selectedImage, setselectedImage] = useState();
  const [qty, setqty] = useState("");
  const [price, setprice] = useState("");
  const [description, setdescription] = useState("");
  const [category, setcategory] = useState("");
  const [off, setoff] = useState(false);
  const [offpercent, setoffpercent] = useState(0);
  const [code, setcode] = useState("");

  //functions

  const addNewProduct = async (e) => {
    e.preventDefault();
    if (name && category && price && qty && selectedImage) {
      let newProduct = {
        name,
        category,
        price,
        qty,
        sales: 0,
        off,
        offpercent,
        description,
        addedBy: "omid",
        selectedImage:`/images/${selectedImage}`,
        code,
      };
      const response = await fetch("/api/products", {
        method: "POST",
        body: JSON.stringify({ newProduct }),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => console.log(data));

      alert("با موفقیت ثبت شد.");
      window.location.reload();
    } else {
      alert("لطفا موارد اجباری را پر نمایید.");
    }
  };

  return (
    <div className="container">
      <form onSubmit={addNewProduct} className="product-form">
        <div className="form-section">
          <label>نام محصول (اجباری)</label>
          <input
            type="text"
            placeholder="نام محصول"
            className="input input-list"
            value={name}
            onChange={(e) => setname(e.target.value)}
          />
          <label>تصویر محصول (اجباری)</label>
          <input
            type="text"
            placeholder="تصویر محصول"
            className="input input-list"
            onChange={e => setselectedImage(e.target.value)}
          />
          <label>موجودی (اجباری)</label>
          <input
            type="number"
            placeholder="موجودی"
            className="input input-list"
            value={qty}
            onChange={(e) => setqty(e.target.value)}
          />
          <label>قیمت (اجباری)</label>
          <input
            type="number"
            placeholder="قیمت"
            className="input input-list"
            value={price}
            onChange={(e) => setprice(e.target.value)}
          />
          <label>توضیحات</label>
          <input
            type="text"
            placeholder="توضیحات"
            className="input input-list"
            value={description}
            onChange={(e) => setdescription(e.target.value)}
          />
        </div>
        <div className="form-section">
          <label>دسته‌بندی (اجباری)</label>
          <select
            className="input input-list"
            placeholder="دسته بندی"
            value={category}
            onChange={(e) => setcategory(e.target.value)}
          >
            <option value="other">بدون دسته بندی</option>
            <option value="bag">کیف</option>
            <option value="shoes">کفش</option>
          </select>
          <label>
            تخفیف
            <label
              className="switch"
              value={off}
              disabled={off}
              onChange={(e) => setoff(!off)}
            >
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
          </label>
          {off && (
            <div className="off-hidden-part">
              <label>چند درصد تخفیف لحاظ شود؟</label>
              <input
                type="number"
                placeholder="درصد تخفیف"
                className="input input-list"
                value={offpercent}
                onChange={(e) => setoffpercent(e.target.value)}
              />
            </div>
          )}

          <label>کد محصول</label>
          <input
            type="text"
            placeholder="کد محصول"
            className="input input-list"
            value={code}
            onChange={(e) => setcode(e.target.value)}
          />
          <button className="btn save-btn" disabled='false'>ذخیره</button>
        </div>
      </form>
    </div>
  );
}
