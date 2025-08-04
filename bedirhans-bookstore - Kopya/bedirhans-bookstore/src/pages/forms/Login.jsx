import { Link, useNavigate } from "react-router-dom";
import "./forms.css";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => 
{
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showNotification, setShowNotification] = useState(false); // Bildirim için state
  const navigate = useNavigate(); 

  const FormSubmitHandler = async (event) => 
  {
    event.preventDefault();

    if (email.trim() === "") 
    {
      return toast.error("Email boş bırakılamaz !");
    }

    if (password.trim() === "") 
    {
      return toast.error("Şifre boş bırakılamaz !");
    }

    try 
    {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json(); 

      if (data.success) 
      {
        setShowNotification(true); // Bildirimi göster
        setTimeout(() => {
          navigate('/HomePage'); // Belirli bir süre sonra ana sayfaya yönlendir
        }, 2000); // 2 saniye bekleyip yönlendir
      } 
      
      else 
      {
        toast.error(data.message);
      }
    } 
    
    catch (error) 
    {
      toast.error("Giriş sırasında bir hata oluştu!");
    }

    setEmail("");
    setPassword("");
  };



  return (
    <div className="form-wrapper2">
      <ToastContainer /> 
      <h1 className="form-title">Hesabınıza Giriş Yapın</h1>

      <form onSubmit={FormSubmitHandler} className="form">
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" />
        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Şifre" />
        <button className="form-btn" type="submit"> Giriş </button>
      </form>

      <div className="form-footer"> Hesabınız Yok Mu?{" "}
        <Link to="/register" className="forms-link"> Kayıt Ol</Link>
      </div>

      {/* Bildirim ekranı */}
      {/* && operatörü bildirim açılır penceresini yalnızca showNotification true olduğunda koşullu olarak oluşturmak için kullanılır. showNotification false ise, pencere oluşturulmaz. */}
      {showNotification && (
        <div className="notification-popup">
          <h2>Giriş başarılı! Hoşgeldiniz . Lütfen Bekleyiniz...</h2>
          <img src={"/loading/loading.gif"} alt="Loading..." />
        </div>
      )}
    </div>
  );
};

export default Login;
