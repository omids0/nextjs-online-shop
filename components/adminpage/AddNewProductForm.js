import React from "react";

export default function AddNewProductForm() {
  return (
    <div className="container">
      <form className="product-form">
        <div className='form-section'>
          <label>نام محصول</label>
          <input
            type="text"
            placeholder="نام محصول"
            className="input input-list"
          />
          <label>تصویر محصول</label>
          <input
            type="text"
            placeholder="تصویر محصول"
            className="input input-list"
          />
          <label>موجودی</label>
          <input
            type="text"
            placeholder="موجودی"
            className="input input-list"
          />
          <label>قیمت</label>
          <input type="text" placeholder="قیمت" className="input input-list" />
          <label>توضیحات</label>
          <input
            type="text"
            placeholder="توضیحات"
            className="input input-list"
          />
        </div>
        <div className='form-section'>
          <label>دسته‌بندی</label>
          <input
            type="text"
            placeholder="دسته‌بندی"
            className="input input-list"
          />
          <label>تخفیف دارد؟</label>
          <input
            type="text"
            placeholder="تخفیف؟"
            className="input input-list"
          />
          <label>چند درصد تخفیف لحاظ شود؟</label>
          <input
            type="text"
            placeholder="درصد تخفیف"
            className="input input-list"
          />
          <label>کد محصول</label>
          <input
            type="text"
            placeholder="کد محصول"
            className="input input-list"
          />
          <button className="btn save-btn">ذخیره</button>
        </div>
      </form>
    </div>
  );
}
