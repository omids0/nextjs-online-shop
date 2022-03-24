import Head from "next/head";
import React from "react";
import Footer from "./Footer";
import Header from "./Header";

export default function AppLayout({ title, description, children }) {
  return (
    <div>
      <Head>
        <title>{title ? `${title} - Omid Shop` : "Omid Shop"}</title>
        {description && <meta name="description" content={description}></meta>}
      </Head>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
