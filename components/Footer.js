import React from "react";

export default function Footer() {
  let now = new Date().getFullYear();
  
  return (
    <footer>
      <p>
      این پروژه جهت نمونه کار توسط امید سهیل‌نیا ایجاد شده و هیچ ارزش دیگری ندارد.
      </p>
      <p>2022 - {now} </p>
    </footer>
  );
}
