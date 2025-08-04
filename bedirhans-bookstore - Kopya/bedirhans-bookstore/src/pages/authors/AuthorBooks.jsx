import { useState, useEffect , useContext} from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "./authorBooks.css"; 
import BookStoreContext from "../../context/bookStorContext";


const AuthorBooks = () => 
{
  const { author_id } = useParams(); // URL'den author_id parametresini al (API'de belirttik)
  const [books, setBooks] = useState([]);

  //  Kitabın altında sepet ikonuna tıkladığımızda sepete ekleme işlemi yapması için
  const { addToCart } = useContext(BookStoreContext);
  const [slideIndex, setSlideIndex] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [bookData, setBookData] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/books/author/${author_id}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.length === 0) {
          toast.error("Yazarın kitabı bulunamadı");
        }
        setBooks(data);
      })
      .catch((error) => {
        toast.error("Kitapları getirirken bir hata oluştu");
      });
  }, [author_id]);

 
    // Handle Modal -> Göz ikonuna tıkladığımızda kitabın detaylarını göstermesi için
    const HandleOpenModal = (item) => 
    {
        setOpenModal(true);
        setBookData(item);
    }

  return (
    <div className="author-books">
      <h1>İlgili Yazarın Kitapları</h1>
      <div className="books-grid">
        {books.length > 0 
        ? (
          books.map((book) => (
            <div key={book.book_id} className="book-card">
              <img src={book.book_image} alt={book.book_title} className="book-image" />
              <h3><b>{book.book_title}</b></h3>
              <p><b>Fiyat:</b> {book.book_price} TL</p>
              <p><b>Yazarı:</b> {book.book_authorName} {book.book_authorSurname}</p>

              <div className="book-slider-icons-wrapper">
                {/* Göz İkonu */}
                <i  onClick={() => HandleOpenModal(book)}  className="bi bi-eye-fill"></i> 
                {/* Sepet İkonu. Tıklandığında BookStoreProvider.jsx'teki addToCart fonks çalışacak */}
                <i onClick={() => addToCart(book, 1)} className="bi bi-cart-plus" ></i>
              </div>
            </div>
          ))
        ) 
        
        : (
          <p><b>Yazarın kitabı bulunamadı.</b></p>
        )}
      </div>
    </div>
    
  );
};

export default AuthorBooks;
