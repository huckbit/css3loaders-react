import React from "react";
import Navbar from "../../components/_inc/Navbar";

export default function DefaultLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
