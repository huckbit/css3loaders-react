import React from "react";
import Navbar from "../../components/_inc/Navbar";
import Footer from "../../components/_inc/Footer";

export default function DefaultLayout({ children }) {
  return (
    <div className="main">
      <Navbar />
      <div className="wrap-content">{children}</div>
      <Footer />
    </div>
  );
}
