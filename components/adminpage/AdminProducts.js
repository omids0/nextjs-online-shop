import Link from "next/link";
import React from "react";
import { Table } from "react-bootstrap";

export default function AdminProducts() {
  return (
    <div className="list-container">
      <Link href="/admin/new-product" className="link" passHref>
        <button className="btn go-right add-product-btn">محصول جدید</button>
      </Link>
      <input type="text" placeholder="جستجو" className="input search-product" />
      <div>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>نام</th>
              <th>دسته بندی</th>
              <th>قیمت</th>
              <th>تعداد</th>
              <th>مجموع قیمت</th>
              <th>افزودن</th>
            </tr>
          </thead>
          <tbody></tbody>
        </Table>
      </div>
    </div>
  );
}
