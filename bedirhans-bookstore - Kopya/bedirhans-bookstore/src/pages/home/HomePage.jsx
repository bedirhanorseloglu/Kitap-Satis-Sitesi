import { useState, useEffect } from "react";
import Services from "../../components/services/Services";
import Slider from "../../components/slider/Slider";
import BookSlider from "../../components/book-slider/BookSlider";
import HeadingTitle from "../../components/heading-title/HeadingTitle";

const HomePage = () => 
{
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/books')
      .then(response => response.json())
      .then(data => setBooks(data))
      .catch(error => console.error('Kitaplar getirilirken hata oluştu:', error));
  }, []);

  return (
    <section>
      <h1>Bedirhan's Bookstore'a Hoş Geldiniz</h1>
      <Slider />
      <Services />
      <HeadingTitle title="Mağazamızdaki Kitaplar" />
      <BookSlider data={books} />
    
      <HeadingTitle title="Bunlara Da Bakmak İster Misiniz?" />
      <BookSlider data={books} />
    </section>
  );
};

export default HomePage;
