import { Link } from "react-router-dom";

const Navbar = ({ toggle, setToggle }) => 
{
  return (
    <nav style={{ left: toggle && "0" }} className="navbar">
      <ul className="navbar-links">
        {/* setToggle(false) yapmamızdaki sebep, kullanıcı bir bağlantıya tıkladığında (örneğin, "Anasayfa", "Yazarlar", vb.), gezinme menüsünü kapatmaktır.  */}
        <Link to="/homepage" onClick={() => setToggle(false)} className="navbar-link">Anasayfa</Link>
        <Link to="/authors" onClick={() => setToggle(false)} className="navbar-link">Yazarlar </Link>
        <Link to="/categories" onClick={() => setToggle(false)} className="navbar-link">Kategoriler</Link>
        <Link to="/about"onClick={() => setToggle(false)}className="navbar-link"> Hakkımda</Link>
        <Link to="/contact" onClick={() => setToggle(false)} className="navbar-link"> İletişim </Link>
        <Link to="/login" onClick={() => setToggle(false)} className="navbar-link" >Giriş Yap</Link>
        <Link to="/register"  onClick={() => setToggle(false)}  className="navbar-link"> Kayıt Ol</Link>
      </ul>
    </nav>
  );
};

export default Navbar;
