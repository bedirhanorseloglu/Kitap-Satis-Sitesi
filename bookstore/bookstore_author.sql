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
-- Table structure for table `author`
--

DROP TABLE IF EXISTS `author`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `author` (
  `author_id` int NOT NULL AUTO_INCREMENT,
  `author_name` varchar(45) DEFAULT NULL,
  `author_surname` varchar(45) DEFAULT NULL,
  `author_image` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`author_id`)
) ENGINE=InnoDB AUTO_INCREMENT=45 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `author`
--

LOCK TABLES `author` WRITE;
/*!40000 ALTER TABLE `author` DISABLE KEYS */;
INSERT INTO `author` VALUES (1,'Nizar','Qabbani','/authors/nizar.jpg'),(2,'Mahmoud','Darwish','/authors/darwish.jpg'),(3,'Tony','Robbins','/authors/tony.jpg'),(4,'Elif','Shafak','/authors/shafak.jpg'),(5,'Brian','Tracy','/authors/brain.jpg'),(6,'Nassim Nicholas','Taleb','/authors/nassim.jpg'),(7,'Khalil','Gibran','/authors/khalil.jpg'),(8,'Debbie','Ford','/authors/ford.jpg'),(9,'Paulo','Coelho','/authors/paulo.jpg'),(10,'Wayne','Dyer','/authors/wayne.jpg'),(11,'Albert','Camus','/authors/albert.jpg'),(12,'George','Orwell','/authors/george.jpg'),(13,'Robert','Kiyosaki','/authors/kiyosaki.jpg'),(14,'Warren','Buffett','/authors/buffett.jpg'),(15,'Ernest','Hemingway','/authors/eh.jpg'),(16,'Mark','Twain','/authors/mark.jpg'),(17,'Xavier','Crement','/authors/crement.jpg'),(18,'Rolf','Dobelli','/authors/rolf.jpg'),(19,'George Samuel','Clason','/authors/clason.jpg'),(20,'Phil','Knight','/authors/phil.jpg'),(21,'Oscar','Wilde','/authors/oscar.jpg'),(22,'James','Clear','/authors/james.jpg'),(23,'Colleen','Hoover','/authors/hoover.jpg'),(24,'Sajni','Patel','/authors/patel.jpg'),(25,'Taylor Jenkins','Reid','/authors/reid.jpg'),(26,'Napolen','Hill','/authors/hill.jpg'),(27,'Chris','Voss','/authors/voss.jpg'),(28,'Vex','King','/authors/king.jpg'),(29,'Juliette','Aristides','/authors/j.jpg'),(30,'Leo','Tolstoy','/authors/leo.jpg'),(31,'Harper','Lee','/authors/harper.jpeg'),(32,'F. Scott','Fitzgerald','/authors/fitzgerald.jpg'),(33,'Jane','Austen','/authors/austen.png'),(34,'J.D.','Salinger','/authors/salinger.jpeg'),(35,'Herman','Melville','/authors/melville.jpeg'),(36,'J.R.R.','Tolkien','/authors/tolkien.jpeg'),(37,'Fyodor','Dostoevsky','/authors/dostoevsky.jpg'),(38,'Aldous','Huxley','/authors/huxley.jpg'),(39,'John','Steinbeck','/authors/steinbeck.jpeg'),(40,'Dante','Alighieri','/authors/dante.jpeg'),(41,'Miguel','de Cervantes','/authors/cervantes.jpg'),(42,'Gabriel','García Márquez','/authors/marquez.jpeg'),(43,'Odesa','Homeros','/authors/homer.jpg'),(44,'James','Joyce','/authors/joyce.jpeg');
/*!40000 ALTER TABLE `author` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-01-15 23:15:31
