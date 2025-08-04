import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './categories.css';

const CategoriesPage = () => 
{
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/category')
      .then(response => response.json()) // Gelen yanıt JSON formatında işleniyor
      .then(data => setCategories(data)); // Yazarlar state'e kaydediliyor
  }, []);


  return (
    <div className="categories">
      {categories.map(category => (
        <div key={category.category_id} className="category">
          <Link to={`/category/${category.category_id}`}>
            <img src={`/category/${category.category_image}`} alt={category.category_name} />
            <h2>{category.category_name}</h2>
          </Link>
        </div>
      ))}
    </div>
  );
};



export default CategoriesPage;
