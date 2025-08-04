import { Link } from "react-router-dom";

const HeaderTop = ({ setToggle, toggle }) => 
{
  return (
    <div className="header-top">
      <div  onClick={() => setToggle((prev) => !prev)}className="header-top-menu" >
        {toggle ? <i className="bi bi-x"></i> : <i className="bi bi-list"></i>}
      </div>

      <div className="header-top-phone">
        <i className="bi bi-telephone-fill"></i> 444 61 61
      </div>
      
      <Link to="/login" className="header-top-link">
        <i className="bi bi-person-fill"></i> Giriş Yap
      </Link>
    </div>
  );
};

export default HeaderTop;
