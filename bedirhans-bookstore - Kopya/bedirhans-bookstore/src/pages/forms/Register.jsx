import { Link } from "react-router-dom";
import "./forms.css";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => 
{
  const [name, setName] = useState("");
  const [surname , setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  // Form Submit Handler
  const formSubmitHandler = async (event) => 
  {
    event.preventDefault();
  
    if (name.trim() === "" || surname.trim() === "" || email.trim() === "" || password.trim() === "" || address.trim() === "" || phone.trim() === "") 
    {
      return toast.error("Tüm alanları doldurmalısınız!");
    }
  
    const customerData = { name, surname, email, password, address, phone };
  
    try 
    {
      const response = await fetch('http://localhost:5000/register', 
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(customerData),
      });
  
      if (response.ok) 
      {
        toast.success("Kayıt başarılı!");
        setEmail("");
        setPassword("");
        setName("");
        setSurname("");
        setAddress("");
        setPhone("");
      } 

      else 
      {
        toast.error("Kayıt sırasında bir hata oluştu!");
      }
    } 
    
    catch (error) 
    {
      toast.error("Kayıt sırasında bir hata oluştu!");
    }
  };


  return (
    <div className="form-wrapper">
      <ToastContainer />
      <h1 className="form-title">Yeni Hesap Oluştur</h1>
      <form onSubmit={formSubmitHandler} className="form">
        <input value={name}   onChange={(e) => setName(e.target.value)}  type="text"   placeholder="Adı"/>
        <input value={surname}   onChange={(e) => setSurname(e.target.value)}  type="text"   placeholder="Soyadı"/>
        <input value={email} onChange={(e) => setEmail(e.target.value)}  type="email" placeholder="Email" />
        <input  value={password}    onChange={(e) => setPassword(e.target.value)}  type="password"   placeholder="Şifre"/>
        <input value={address}   onChange={(e) => setAddress(e.target.value)}  type="text"   placeholder="Adres"/>
        <input value={phone}   onChange={(e) => setPhone(e.target.value)}  type="text"   placeholder="Tel No"/>

        <button className="form-btn" type="submit">   Kayıt Ol  </button>
      </form>

      <div className="form-footer"> Zaten hesabınız var mı ?{" "}
        <Link to="/login" className="forms-link">  Giriş Yap</Link>
      </div>
    </div>
  );
};

export default Register;
