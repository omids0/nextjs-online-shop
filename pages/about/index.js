import React from "react";
import AboutPage from "../../components/about/AboutPage";
import AppLayout from "../../components/AppLayout";

export default function index() {
  return (
    <AppLayout title='About' description='طراحی سایت امید شاپ (امیدشاپ) توسط امید سهیل نیا'>
      <AboutPage />
    </AppLayout>
  );
}
