"use client";

import "./NavbarLinks.css";
import { HomeOutlined, ShoppingOutlined, ClockCircleOutlined, MessageOutlined, LoginOutlined } from '@ant-design/icons';
import { useEffect, useState } from "react";


export default function NavbarLinks() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar-links ${scrolled ? "sticky-scrolled" : ""}`}>
      <ul className="menu">
        <li className="menu-item">
          <a className="" href="/home"><HomeOutlined /> <span className="menu-text">Anasayfa</span></a>
          
        </li>
        <li className="menu-item">
          <ShoppingOutlined /> <a href="/products" className="menu-text">Ürünler</a>
        </li>
        <li className="menu-item">
          <ClockCircleOutlined /> <span className="menu-text">Kampanyalar</span>
        </li>
        <li className="menu-item">
          <MessageOutlined /> <span className="menu-text">Destek</span>
        </li>
        <li className="menu-item">
          <LoginOutlined /> <span className="menu-text">Giriş Yap</span>
        </li>
      </ul>
    </nav>
  );
}
