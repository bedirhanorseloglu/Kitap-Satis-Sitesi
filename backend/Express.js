const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'bedo6175',
  database: 'bookstore',
});

db.connect(err => {
  if (err) {
    console.error("Database bağlantısı kurulamadı !: " + err.stack);
    return;
  }
  console.log("Database'e bağlantı sağlandı...");
});

// Yazarları ekrana getir
app.get('/author', (req, res) => {
  const sql = 'SELECT author_id, author_name, author_surname, author_image FROM author';
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});



// Kategoriler için API endpoint'i
app.get('/category', (req, res) => {
  const sql = 'SELECT category_id, category_name , category_image FROM category';
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});



// Belirli bir kitabı getir
app.get('/book/:id', (req, res) => {
  const { id } = req.params;
  const sql = 'SELECT * FROM book WHERE book_id = ?';
  db.query(sql, [id], (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});


// Belirli bir kategorideki kitapları getir
app.get('/books/category/:category_id', (req, res) => {
  const { category_id } = req.params;
  const sql = 'SELECT * FROM book WHERE category_id = ?';
  db.query(sql, [category_id], (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});



// Yeni müşteri eklemek (Kayıt Olmak) için API endpoint'i
app.post('/register', (req, res) => {
  const { name, surname, email, password, address, phone } = req.body;

  const sql = 'INSERT INTO customer (customer_name, customer_surname, customer_email, customer_password, customer_address, customer_phone) VALUES (?, ?, ?, ?, ?, ?)';
  
  db.query(sql, [name, surname, email, password, address, phone], (err, result) => {
    if (err) {
      console.error("Müşteri eklenemedi: " + err.stack);
      res.status(500).send('Müşteri eklenemedi');
      return;
    }
    res.status(200).send('Müşteri başarıyla eklendi');
  });
});




// Giriş Yapmak İçin API endpoint'i
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  const sql = `SELECT * FROM customer WHERE customer_email = ? AND customer_password = ?`;
  db.query(sql, [email, password], (err, results) => {
    if (err) {
      return res.status(500).json({ error: 'Veritabanı hatası' });
    }
    if (results.length > 0) {
      return res.status(200).json({ success: true, user: results[0] });
    } 
    else {
      return res.status(401).json({ success: false, message: 'Hatalı email veya şifre!' });
    }
  });
});


// Göz ikonuna tıkladığımız modal için
app.get('/books/:id', (req, res) => {
  const bookId = req.params.id;
  const sql = `SELECT * FROM book WHERE book_id = ?`;
  
  db.query(sql, [bookId], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    if (result.length === 0) return res.status(404).json({ message: 'Book not found' });
    res.json(result[0]); // İlk sonucu döndür
  });
});







// Tüm kitapları ana sayfa için getiren API endpoint'i
app.get('/books', (req, res) => {
  const sql = 'SELECT * FROM book';
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});




// Yazarın üstüne tıkladığımızda kitaplarını getiren API endpoint'i
app.get('/books/author/:author_id', (req, res) => {
  const { author_id } = req.params;
  const sql = `SELECT * FROM book WHERE author_id = ?`;
  
  db.query(sql, [author_id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    if (result.length === 0) return res.status(404).json({ message: 'Books not found for this author' });
    res.json(result);
  });
});




app.listen(5000, () => {
  console.log('Server running on port 5000');
});
