import { useParams } from "react-router-dom";
import { useState, useEffect  , useContext} from "react";
import "./categoryBooks.css";

import { toast } from 'react-toastify'; // Import toast
import 'react-toastify/dist/ReactToastify.css'; // Import toast styles

import BookStoreContext from "../../context/bookStorContext";

const CategoryBooksPage = () => 
{
  const { category_id } = useParams();
  const [books, setBooks] = useState([]);

  const { addToCart } = useContext(BookStoreContext);
  const [slideIndex, setSlideIndex] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [bookData, setBookData] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/books/category/${category_id}`)
      .then(response => response.json())
      .then(data => setBooks(data));
  }, [category_id]);



  // Handle Modal
  const HandleOpenModal = (item) => 
    {
      setOpenModal(true);
      setBookData(item);
    }


  return (
    <div className="category-books">
      <h1>İlgili Kategorideki Kitaplar</h1>
      <div className="books-grid">
        {books.map(book => (
          <div key={book.book_id} className="book-item">
            <img src={book.book_image} alt={book.book_title} />
            <h2>{book.book_title}</h2>
            <p>{book.book_authorName} {book.book_authorSurname}</p>

            <div className="book-slider-icons-wrapper">
              {/* Göz İkonu */}
              <i  onClick={() => HandleOpenModal(book)}  className="bi bi-eye-fill"></i> 
              {/* Sepet İkonu. Tıklandığında BookStoreProvider.jsx'teki addToCart fonks çalışacak */}
              <i onClick={() => addToCart(book, 1)} className="bi bi-cart-plus" ></i>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryBooksPage;
