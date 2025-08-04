import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./contact.css";

const Contact = () => 
{
  // Form verilerini tutmak için useState hook'u kullanılıyor.
  const [formData, setFormData] = useState({ name: "", subject: "", email: "" , message: ""});

  // Input alanlarındaki değişiklikleri yakalayan ve form verilerini güncelleyen fonksiyon.
  const handleChange = (e) => 
  {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData,[name]: value}));
  };


  // "Mesajınız gönderildi. En kısa sürede sizinle iletişime geçeceğiz." yazdırdıktan sonra inputların içini sıfırlayan metot.
  const handleSubmit = (e) => 
  {
    e.preventDefault();
    toast.success("Mesajınız gönderildi. En kısa sürede sizinle iletişime geçeceğiz.");
    setFormData({name: "" , subject: "" , email: "" , message: ""});
  };

  return (
    <section className="contact">
      <div className="contact-wrapper">
        <div className="contact-item">
          <div className="contact-item-icon">
            <i className="bi bi-house-fill"></i>
            Adres
          </div>
          <p className="contact-item-text">Trabzon/Türkiye</p>
        </div>

        <div className="contact-item">
          <div className="contact-item-icon">
            <i className="bi bi-telephone-fill"></i>
            Telefon
          </div>
          <p className="contact-item-text">444 61 61</p>
        </div>

        <div className="contact-item">
          <div className="contact-item-icon">
            <i className="bi bi-envelope-fill"></i>
            Email
          </div>
          <p className="contact-item-text">orseloglubedirhan@gmail.com</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="contact-form">
        <h2 className="contact-form-title">Bizimle İletişime Geçin</h2>
        <div className="contact-input-wrapper">
          <input type="text"   placeholder="Adınız*" name="name" value={formData.name}  onChange={handleChange}/>
          <input  type="text" placeholder="Konu*"  name="subject"  value={formData.subject}  onChange={handleChange}  />
          <input  type="text"  placeholder="Email Adresiniz*"  name="email"  value={formData.email}  onChange={handleChange}/>
        </div>
        <textarea  placeholder="Mesajınız*"  className="contact-textarea"  rows="5"  name="message"  value={formData.message}  onChange={handleChange}></textarea>
        <button type="submit" className="contact-btn">Gönder</button>
      </form>
      <ToastContainer />
    </section>
  );
};

export default Contact;
