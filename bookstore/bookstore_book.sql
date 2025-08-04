CREATE DATABASE  IF NOT EXISTS `bookstore` /*!40100 DEFAULT CHARACTER SET utf8mb3 */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `bookstore`;
-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
--
-- Host: localhost    Database: bookstore
-- ------------------------------------------------------
-- Server version	8.0.33

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `book`
--

DROP TABLE IF EXISTS `book`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `book` (
  `book_id` int NOT NULL AUTO_INCREMENT,
  `book_price` decimal(10,2) DEFAULT NULL,
  `book_rating` int DEFAULT NULL,
  `book_title` varchar(250) DEFAULT NULL,
  `book_authorName` varchar(85) DEFAULT NULL,
  `book_authorSurname` varchar(45) DEFAULT NULL,
  `book_reviews` varchar(45) DEFAULT NULL,
  `book_image` varchar(100) DEFAULT NULL,
  `book_printLength` int DEFAULT NULL,
  `book_language` varchar(25) DEFAULT NULL,
  `book_publicationDate` varchar(45) DEFAULT NULL,
  `book_inStock` varchar(5) DEFAULT NULL,
  `book_stockCount` int DEFAULT NULL,
  `author_id` int NOT NULL,
  `category_id` int NOT NULL,
  `publisher_id` int NOT NULL,
  PRIMARY KEY (`book_id`),
  KEY `fk_book_author_idx` (`author_id`),
  KEY `fk_book_category1_idx` (`category_id`),
  KEY `fk_book_publisher1_idx` (`publisher_id`),
  CONSTRAINT `fk_book_author` FOREIGN KEY (`author_id`) REFERENCES `author` (`author_id`),
  CONSTRAINT `fk_book_category1` FOREIGN KEY (`category_id`) REFERENCES `category` (`category_id`),
  CONSTRAINT `fk_book_publisher1` FOREIGN KEY (`publisher_id`) REFERENCES `publisher` (`publisher_id`)
) ENGINE=InnoDB AUTO_INCREMENT=52 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `book`
--

LOCK TABLES `book` WRITE;
/*!40000 ALTER TABLE `book` DISABLE KEYS */;
INSERT INTO `book` VALUES (1,11.00,5,'Atomic Habits:Proven Way To Build Good Habits','James','Clear','69,548','/books/atomic-habits.jpg',320,'Türkçe','16 Nisan 2018','true',244,1,7,2),(2,14.00,5,'Confess','Colleen','Hoover','3,980','/books/confess.jpg',410,'Türkçe','1 Mart 2015','true',466,15,3,2),(3,9.00,5,'The Trouble With Hating You','Sajni','Patel','235','/books/the-trouble-with-hating-you.jpg',352,'Türkçe','1 Haziran 2019','true',799,22,3,3),(4,16.00,5,'Hopeless','Colleen','Hoover','1,587','/books/hopeless.jpg',416,'Türkçe','8 Aralık 2012','true',110,5,3,2),(5,8.00,4,'Rich Dad Poor Dad','Robert','T.Kiyosaki','8,661','/books/rich-dad-poor-dad.jpg',336,'Türkçe','27 Nisan 2017','true',66,13,7,4),(6,21.00,4,'One True Loves','Taylor Jenkins','Reid','2,421','/books/one-true-love.jpg',342,'Türkçe','17 Temmuz 2016','true',88,18,3,5),(7,11.00,5,'Think And Grow Rich','Napolen','Hill','57,521','/books/think-and-grow-rich.jpg',320,'Türkçe','1 Ekim 2005','true',108,8,7,1),(9,13.00,5,'Good Vibes, Good Life','Vex','King','22,252','/books/it-ends-with-us.jpg',325,'Türkçe','4 Aralık 2018','true',78,8,7,7),(10,6.00,5,'Beginning Drawing Atelier','Juliette','Aristides','661','/books/beginning.jpg',128,'Türkçe','16 Şubat 2018','true',10,25,7,8),(32,9.99,5,'1984','George','Orwell','45,456','/books/1984.jpeg',328,'English','1949-06-08','Yes',50,12,5,1),(33,15.99,4,'To Kill a Mockingbird','Harper','Lee','45,478','/books/mockingbird.jpg',281,'English','1960-07-11','Yes',40,31,3,1),(34,12.99,5,'The Great Gatsby','F. Scott','Fitzgerald','78,456','/books/gatsby.jpg',180,'English','1925-04-10','Yes',35,32,3,2),(35,14.99,4,'Pride and Prejudice','Jane','Austen','15,256','/books/pride.jpg',279,'English','1813-01-28','Yes',45,33,3,3),(36,19.99,5,'The Catcher in the Rye','J.D.','Salinger','17,543','/books/catcher.jpg',214,'English','1951-07-16','Yes',30,34,3,4),(37,10.99,5,'Moby-Dick','Herman','Melville','1,258','/books/mobydick.jpg',585,'English','1851-10-18','Yes',20,35,3,5),(38,13.99,4,'The Hobbit','J.R.R.','Tolkien','12,347','/books/hobbit.jpg',310,'English','1937-09-21','Yes',60,36,5,6),(39,16.99,5,'War and Peace','Leo','Tolstoy','65,125','/books/warandpeace.jpeg',1225,'Russian','1869-01-01','Yes',25,30,1,7),(40,14.99,4,'The Brothers Karamazov','Fyodor','Dostoevsky','123,456','/books/karamazov.jpg',824,'Russian','1880-01-01','Yes',15,37,6,8),(41,18.99,5,'Crime and Punishment','Fyodor','Dostoevsky','17,867','/books/crime.jpg',430,'Russian','1866-01-01','Yes',22,37,6,2),(42,11.99,4,'Brave New World','Aldous','Huxley','3,547','/books/bravenewworld.jpg',268,'English','1932-01-01','Yes',35,38,5,3),(43,13.99,5,'The Lord of the Rings','J.R.R.','Tolkien','15,453','/books/lotr.jpg',1178,'English','1954-07-29','Yes',48,36,5,4),(44,12.99,4,'Anna Karenina','Leo','Tolstoy','2,315','/books/anna.jpg',864,'Russian','1877-01-01','Yes',27,30,3,5),(45,10.99,4,'The Picture of Dorian Gray','Oscar','Wilde','2,125','/books/dorian.jpg',254,'English','1890-07-20','Yes',33,21,3,8),(46,14.99,5,'The Grapes of Wrath','John','Steinbeck','12,575','/books/grapes.jpg',464,'English','1939-04-14','Yes',40,39,3,7),(47,15.99,5,'The Divine Comedy','Dante','Alighieri','3,415','/books/divinecomedy.jpg',798,'Italian','1320-01-01','Yes',20,40,7,8),(48,13.99,4,'Don Quixote','Miguel','de Cervantes','5,451','/books/donquixote.jpg',1072,'Spanish','1605-01-01','Yes',25,41,3,6),(49,12.99,5,'One Hundred Years of Solitude','Gabriel','García Márquez','1,234','/books/solitude.jpg',417,'Spanish','1967-01-01','Yes',30,42,3,5),(50,11.99,4,'The Odyssey','Odesa','Homeros','74,125','/books/odyssey.jpeg',541,'Greek','-700-01-01','Yes',10,43,5,4),(51,16.99,5,'Ulysses','James','Joyce','5,767','/books/ulysses.jpg',730,'English','1922-02-02','Yes',12,44,3,6);
/*!40000 ALTER TABLE `book` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-01-15 23:15:32
