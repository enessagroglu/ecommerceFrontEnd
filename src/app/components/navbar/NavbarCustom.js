import "./NavbarCustom.css";
import Image from "next/image";
import Logo from "../../../../public/logo.png";
import { HomeOutlined, ShoppingOutlined, ClockCircleOutlined, MessageOutlined, LoginOutlined} from '@ant-design/icons';

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
            <li className="menu-item"> <ShoppingOutlined />  <p className="menu-text"> Ürünler</p></li>
            <li className="menu-item"> <ClockCircleOutlined /> <p className="menu-text"> Kampanyalar</p></li>
            <li className="menu-item"> <MessageOutlined /> <p className="menu-text">Destek</p> </li>
            <li className="menu-item"> <LoginOutlined /> <p className="menu-text">Giriş Yap</p> </li>
          </ul>
        
      </div>
    </div>
  );
}
