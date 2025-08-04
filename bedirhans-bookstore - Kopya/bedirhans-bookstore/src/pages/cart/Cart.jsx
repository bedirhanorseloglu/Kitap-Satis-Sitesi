import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import BookStoreContext from "../../context/bookStorContext";
import "./cart.css";

const Cart = () => 
{
  const { cartInfo, removeFromCart, addToCart } = useContext(BookStoreContext); // Oluşturduğumuz BookStoreProvider ve bookStoreContex'i kullandık
  const navigate = useNavigate();

  const HandleProceedToPayment = () => 
  {
    if (cartInfo.length === 0) 
    {
      // eğer sepet boşsa uyarı ver
      toast.error("Sepetinizde ürün bulunmadığından ödeme ekranına geçemezsiniz", 
      {
        position: "top-right",
        autoClose: 3000,
      });
    } 
    
    else 
    {
      navigate("/payment"); // eğer sepet doluysa ödeme ekranına yönlendir
    }
  };

  
  return (
    <div className="cart">
      <h1 className="cart-title">Sepetiniz</h1>
      <div className="cart-wrapper">
        <div className="cart-items">
          {cartInfo.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={`${item.image}`} alt={item.title} className="cart-item-img"/>
              <div className="cart-item-info">
                <div>
                  <div className="cart-item-book-title">
                    <b>Kitap İsmi: </b>
                    {item.title}
                  </div>
                  
                  <div className="cart-item-author">
                    <b>Yazarı: </b>
                    {item.author}
                  </div>
                </div>

                <div>
                  <div className="cart-item-quantity">
                    {/* Arttırma butonu */}
                    <button disabled={item.quantity <= 1} onClick={() => addToCart(item, parseInt(item.quantity) - 1)} className="bi bi-dash-lg"></button> 

                    <b>{item.quantity}</b>

                    {/* Azaltma butonu */}
                    <button onClick={() => addToCart(item, parseInt(item.quantity) + 1)}className="bi bi-plus-lg"></button>
                  </div>

                  <div className="cart-item-price">
                    {(item.price * item.quantity).toFixed(2)} TL
                  </div>
                  <i onClick={() => removeFromCart(item.id)} className="bi bi-trash-fill"></i>
                </div>
              </div>
            </div>
          ))}
        </div>


        {/* Sipariş Özeti Tablosu */}
        <div className="cart-order-summary">
          <h5 className="order-summary-title">Sipariş Özeti</h5>
          <div className="order-summary-item">
            <span>Ara Toplam</span>
            <span>
              {cartInfo.reduce((acc, cur) => acc + cur.price * cur.quantity, 0).toFixed(2)} TL
            </span> 
          </div>

          <div className="order-summary-item">
            <span>Kargo Ücreti</span>
            <span>0 TL</span>
          </div>

          <div className="order-summary-item">
            <span>İndirim</span>
            <span>0 TL</span>
          </div>

          <div className="order-summary-item">
            <strong>Toplam Tutar</strong>
            <span>
              {cartInfo.reduce((acc, cur) => acc + cur.price * cur.quantity, 0).toFixed(2)} TL
            </span>
          </div>
        </div>
        <button onClick={HandleProceedToPayment} className="checkout-btn">Ödeme Ekranına Geç</button>
        </div>
    </div>
  );
};

export default Cart;
