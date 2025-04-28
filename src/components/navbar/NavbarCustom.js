import "./NavbarCustom.css";
import Image from "next/image";
import Logo from "../../../public/ARS-Logo.png";

export default function NavbarCustom() {
  return (
    <div className="navbar-root">
      {/* Soldan gelen arka plan resmi */}
      <div className="bgImage"></div>
      {/* Sağdan gelen arka plan resmi */}
      <div className="bgImage-reverse"></div>
      {/* İçerik katmanı (logo) */}
      <div className="navbar-content">
        <Image className="logo" src={Logo} alt="logo" />
      </div>
    </div>
  );
}
