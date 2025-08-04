// Sepetle ilgili ekleme-çıkarma işlemlerimizin yer aldığı Context. Bu dosyayı cart'ta kullanarak daha kullanışlı bir kod sağlıyoruz.

import { useState } from "react";
import BookStoreContext from "./bookStorContext";

import { toast } from 'react-toastify'; // Import toast
import 'react-toastify/dist/ReactToastify.css'; // Import toast styles


const BookStoreProvider = ({ children }) => 
{
  const [cartInfo, setCartInfo] = useState([]);

  // Sepete Ekleme Fonksiyonu
  const addToCart = (item, qty) => 
  {
    // Sepetteki mevcut öğeyi bul
    const existingItem = cartInfo.find(cart => cart.id === item.id);

    if (existingItem) 
    {
        // Mevcut kitabın miktarını güncelle
        setCartInfo( cartInfo.map(cart =>   cart.id === item.id  ? { ...cart, quantity: qty }  : cart));
    } 
    
    else 
    {
        // Yeni kitabı sepete ekle
        const newCartItem = 
        {
            id: item.book_id,
            title: item.book_title,
            image: item.book_image,
            price: item.book_price,
            quantity: qty,
            author: `${item.book_authorName} ${item.book_authorSurname}`,
        };

        setCartInfo(prev => [...prev, newCartItem]);
        toast.success(`${item.book_title} sepete eklendi.`, {
          position: "top-right",
          autoClose: 1500,
        });
    }  
    
  };



  // Sepetten Çıkarma Fonksiyonu
  const removeFromCart = (id) => 
  {
    const cart = cartInfo.filter((c) => c.id !== id);
    setCartInfo(cart);
  };



  // Sipariş ver butonuna tıkladıktan sonra sepetimizi temizlemesi için fonksiyon
  const clearCart = () => 
  {
    setCartInfo([]);
  };




  return (
    <BookStoreContext.Provider
      value={{  cartInfo,  addToCart, removeFromCart, clearCart , cartInfoLength: cartInfo.length,}} >
      {children}
    </BookStoreContext.Provider>
  );
};

export default BookStoreProvider;







