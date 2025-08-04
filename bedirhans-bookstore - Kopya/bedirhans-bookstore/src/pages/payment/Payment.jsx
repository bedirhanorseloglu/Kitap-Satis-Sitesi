import { useState, useContext } from "react";
import BookStoreContext from "../../context/bookStorContext";
import "./payment.css";

const Payment = () => 
{
  const [orderPlaced, setOrderPlaced] = useState(false);
  const { clearCart } = useContext(BookStoreContext); // clearCart fonksiyonunu alıyoruz
  const [formData, setFormData] = useState({name: "",surname: "", address:"", cardNumber: "",  expiryDate: "", cvv: ""});


  const handleChange = (e) => 
  {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  
  // Formu gönderirken gerekli bilgilerin girilip girilmediğine göre işlemler yapıyoruz
  const handleSubmit = (e) => 
  {
    e.preventDefault();
    if (formData.name &&formData.surname && formData.cardNumber && formData.expiryDate && formData.cvv) 
    {
      setOrderPlaced(true);
      clearCart(); // Tüm inputlar doldurulup sipariş oluşturulursa sepeti boşaltır
    } 
    
    else 
    {
      alert("Lütfen tüm alanları doldurun!");
    }
  };


  return (
    <div className="payment">
      <h1 className="payment-title">Ödeme Bilgileri</h1>
      {orderPlaced 
      ? (
        <div className="order-confirmation">
          <h2>Siparişiniz Oluşturulmuştur.</h2>
          <img src={"/form-submited/basarili.gif"} alt="Sipariş Oluşturulmuştur..." />
        </div>
      ) 
      
      : (
        <form onSubmit={handleSubmit} className="payment-form">
          <div className="payment-form-group">
            <label htmlFor="name">İsim:</label>
            <input  type="text"  id="name"  name="name"  value={formData.name}  onChange={handleChange} />
          </div>

          <div className="payment-form-group">
            <label htmlFor="surname">Soyisim:</label>
            <input  type="text"  id="surname"  name="surname"  value={formData.surname}  onChange={handleChange}/>
          </div>

          <div className="payment-form-group">
            <label htmlFor="address">Adres:</label>
            <input  type="text"  id="address"  name="address"  value={formData.address}  onChange={handleChange}/>
          </div>

          <div className="payment-form-group">
            <label htmlFor="cardNumber">Kart Numarası:</label>
            <input  type="text"  id="cardNumber"  name="cardNumber"    onChange={handleChange}/>
          </div>

          <div className="payment-form-group">
            <label htmlFor="expiryDate">Son Kullanma Tarihi:</label>
            <input  type="text"  id="expiryDate"  name="expiryDate"  value={formData.expiryDate}  onChange={handleChange}/>
          </div>

          <div className="payment-form-group">
            <label htmlFor="cvv">CVV:</label>
            <input  type="text"  id="cvv"  name="cvv"  value={formData.cvv}  onChange={handleChange}/>
          </div>

          <button type="submit" className="payment-submit-button">Sipariş Ver</button>
        </form>
      )}
    </div>
  );
};

export default Payment;
