import "./NavbarLinks.css";
import { HomeOutlined, ShoppingOutlined, ClockCircleOutlined, MessageOutlined, LoginOutlined } from '@ant-design/icons';

export default function NavbarLinks() {
  return (
    <nav className="navbar-links">
      <ul className="menu">
        <li className="menu-item">
          <a className="" href="/home"><HomeOutlined /> <span className="menu-text">Anasayfa</span></a>
          
        </li>
        <li className="menu-item">
          <ShoppingOutlined /> <span className="menu-text">Ürünler</span>
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
