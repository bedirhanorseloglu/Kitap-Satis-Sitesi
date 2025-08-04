import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import "./App.css";
import { ToastContainer } from 'react-toastify';

import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import About from "./pages/about/About";
import Authors from "./pages/authors/Authors";
import BookPage from "./pages/book/BookPage";
import Cart from "./pages/cart/Cart";
import Contact from "./pages/contact/Contact";
import Login from "./pages/forms/Login";
import Register from "./pages/forms/Register";
import HomePage from "./pages/home/HomePage";
import CategoryBooksPage from "./pages/categories/CategoryBooksPage";
import CategoriesPage from "./pages/categories/CategoriesPage";
import AuthorBooks from "./pages/authors/AuthorBooks";
import Payment from "./pages/payment/Payment";

function App() 
{
  return (
    
    <BrowserRouter>
    {/* Toast bildirimlerimizin ekranda gözükmesi için ToastContainer'i burada belirtmemiz gerekiyor.*/}
    <ToastContainer />  
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/book/:id" element={<BookPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/authors" element={<Authors />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/category/:category_id" element={<CategoryBooksPage />} />

        {/* Yazarın üstüne tıkladığımızda kitaplarını getirmesi için route */}
        <Route path="/author/:author_id" element={<AuthorBooks />} />

        <Route path="/payment" element={<Payment />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;




