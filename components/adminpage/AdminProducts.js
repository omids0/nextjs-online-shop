import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";

export default function AdminProducts() {
  const [loading, setloading] = useState(true);
  const [products, setproducts] = useState([]);

  useEffect(() => {
    async function getAllProducts() {
      const response = await fetch("/api/products")
        .then((response) => response.json())
        .then((data) => {
          setproducts(data);
          setloading(false);
        });
    }
    getAllProducts();
  }, []);

  return (
    <div className="list-container">
      <Link href="/admin/new-product" className="link" passHref>
        <button className="btn go-right add-product-btn">محصول جدید</button>
      </Link>
      <input type="text" placeholder="جستجو" className="input search-product" />
      <div>
        {loading && <h3>لطفا صبر کنید...</h3>}
        {products.length > 0 && (
          <div className="table-div">
            <table className="table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>تصویر</th>
                  <th>نام محصول</th>
                  <th>دسته‌بندی</th>
                  <th>قیمت</th>
                  <th>کد</th>
                  <th>دکمه ها</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product, i) => (
                  <tr key={product._id} className="tr">
                    <td>{i + 1}</td>
                    <td>
                      {
                        <Image
                          src={product.selectedImage}
                          alt={product.name}
                          width="150"
                          height="150"
                        />
                      }
                    </td>
                    <td>{product.name}</td>
                    <td>{product.category}</td>
                    <td>{product.price}</td>
                    <td>{product.code}</td>
                    <td>
                      <div className='table-gp-btn'>
                        <button className="btn btn-delete">حذف</button>
                        <button className="btn btn-edit">ویرایش</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
