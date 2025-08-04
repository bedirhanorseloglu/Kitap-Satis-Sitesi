import { useState, useEffect } from "react";
import "./authors.css";

import { Link } from "react-router-dom";

// Authors bileşeni tanımlanıyor
const Authors = () => 
{
  // Yazarlar ve arama durumu için state'ler tanımlanıyor
  const [authors, setAuthors] = useState([]);
  const [search, setSearch] = useState("");

  // useEffect hook'u ile bileşen yüklendiğinde yazar verileri veri tabanından çekiliyor
  useEffect(() => {
    fetch('http://localhost:5000/author')
      .then(response => response.json()) // Gelen yanıt JSON formatında işleniyor
      .then(data => setAuthors(data)); // Yazarlar state'e kaydediliyor
  }, []); // bileşen ilk yüklendiğinde çalışmasını sağlayacak


  // Arama kutusuna girilen metne göre yazarlar filtreleniyor
  const filteredAuthors = authors.filter(author => (author.author_name + " " + author.author_surname).toLowerCase().includes(search.toLowerCase()));


  return (
    <section className="authors">
      <div className="authors-search-wrapper">
        <h1>YAZARLAR</h1>
        {/* Kullanıcının yazarları arayabileceği bir input alanı */}
        <input   type="text"    placeholder="Yazar ara..."    value={search}    onChange={(e) => setSearch(e.target.value)} />
      </div>

      <div className="authors-wrapper">
        {/* Filtrelenmiş yazarlar burada listeleniyor */}
        {filteredAuthors.map(author => (
          <Link to={`/author/${author.author_id}`} className="author" key={author.author_id}>
            {author.author_image && <img className="author-img" src={author.author_image} alt={`${author.author_name} ${author.author_surname}`} />}
            <h2>{author.author_name} {author.author_surname}</h2>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Authors;

