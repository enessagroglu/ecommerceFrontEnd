"use client";

import "./NavbarCustom.css";
import Image from "next/image";
import Logo from "../../../public/guncel-logo.png";
import { MenuOutlined } from "@ant-design/icons";
import { Drawer } from "antd";
import { useState } from "react";
import NavbarLinks from "./NavbarLinks";

export default function NavbarCustom() {
  const [open, setOpen] = useState(false);

  const showDrawer = () => setOpen(true);
  const onClose = () => setOpen(false);

  return (
    <div className="navbar-root">
      <div className="navbar-content">
        <Image className="logo" src={Logo} alt="logo" />
        <button className="menu-button" onClick={showDrawer}>
          <MenuOutlined />
        </button>
      </div>

      <Drawer
        title="Menü"
        placement="left"
        closable={true}
        onClose={onClose}
        open={open}
      >
        <NavbarLinks />
      </Drawer>
    </div>
  );
}
