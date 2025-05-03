// app/layout.js

import React from "react";

import "./globals.css";

import NavbarCustom from "../components/navbar/NavbarCustom";
import NavbarLinks from "../components/navbar/NavbarLinks";
import Footer from "../components/footer/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="layout-body">
          <NavbarCustom />
          <NavbarLinks />

          <main className="flex-grow">{children}</main>

          <Footer />
        </div>
      </body>
    </html>
  );
}
