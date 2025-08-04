import { useParams } from "react-router-dom";
import "./book.css";
import { useState, useEffect, useContext } from "react";
import BookStoreContext from "../../context/bookStorContext";
import Rating from "../../components/book-slider/Rating";

const BookPage = () => 
{
  const { addToCart } = useContext(BookStoreContext);
  const { id } = useParams();
  const [qty, setQty] = useState(1);
  const [book, setBook] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/book/${id}`)
      .then(response => response.json())
      .then(data => setBook(data[0])); 
  }, [id]);

  if (!book) return <div>Loading...</div>;

  return (
    <div className="book">
      <div className="book-content">
        <img  src={book.book_image}  alt={book.book_title}  className="book-content-img"/>
        
        <div className="book-content-info">
          <h1 className="book-title">{book.book_title}</h1>
          <div className="book-author">
            Yazarı: <span>{book.book_authorName} {book.book_authorSurname}</span>
          </div>

          <Rating rating={book.book_rating} reviews={book.book_reviews} />

          <div className="book-add-to-cart">
            <input  className="book-add-to-cart-input"  type="number"  min="1"  max="100"  value={qty}  onChange={e => setQty(e.target.value)} />
            <button onClick={() => addToCart(book, qty)} className="book-add-to-cart-btn">
              <i className="bi bi-cart-plus"></i>
              Sepete Ekle
            </button>
          </div>
        </div>
      </div>
      
      <p className="book-description">
        {book.book_description}
      </p>

      <div className="book-icons">
        <div className="book-icon">
          <small>Sayfa Sayısı</small>
          <i className="bi bi-file-earmark-break"></i>
          <b>{book.book_printLength} sayfa</b>
        </div>

        <div className="book-icon">
          <small>Dili</small>
          <i className="bi bi-globe"></i>
          <b>{book.book_language}</b>
        </div>

        <div className="book-icon">
          <small>Yayınlanma Tarihi</small>
          <i className="bi bi-calendar3"></i>
          <b>{book.book_publicationDate}</b>
        </div>
      </div>
    </div>
  );
};

export default BookPage;
