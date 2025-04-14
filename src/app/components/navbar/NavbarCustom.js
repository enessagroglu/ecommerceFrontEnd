import "./NavbarCustom.css";
import Image from "next/image";
import Logo from "../../../../public/logo.png";
import AslanLogo from "../../../../public/aslan-logo.png"
import { HomeOutlined } from '@ant-design/icons';

export default function NavbarCustom() {
  return (
    <div className="rootKatman">
      {/* Arka plan resmi katmanı */}
      <div className="bgImage"></div>
      {/* İçerik katmanı */}
      <div className="content">
        
          <Image className="logo" src={Logo} alt="logo" />
        
        
          <ul className="menu">
            <li className="menu-item"> <HomeOutlined />  <p className="menu-text">Anasayfa</p></li>
            <li>Ürünler</li>
            <li>Kampanyalar</li>
            <li>Destek</li>
            <li>Giriş Yap</li>
          </ul>
        
      </div>
    </div>
  );
}
