CREATE DATABASE  IF NOT EXISTS `njs_test` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `njs_test`;
-- MySQL dump 10.13  Distrib 8.0.29, for Win64 (x86_64)
--
-- Host: localhost    Database: njs_test
-- ------------------------------------------------------
-- Server version	8.0.29

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
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `full_name` text NOT NULL,
  `email` text NOT NULL,
  `password` text NOT NULL,
  `reg_timestamp` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (11,'Small','small@small.oho','$2b$10$xDroxEomKPaBB7VnDdsXx.5qAXxn4W7ltZ97uVih96zXGr.UeCm8y','2022-07-14 17:13:35'),(15,'Round','round@round.oho','$2b$10$zkrQgrtDR5QBW4ikywIfsu75zc1EwRiF9nt5wyRf0nvdu8euWXAaa','2022-07-14 17:41:24'),(16,'Thin','thin@thin.oho','$2b$10$DOySvlJcAm3L6IfyPOOvR.kx3pgBiP21BlGUAyeGcr66E7QOnXBxK','2022-07-15 09:18:00'),(17,'Thick','thick@thick.oho','$2b$10$dHYbRbBCoRZoZnSEbqQCmutV8WR7skJdU81kf8kI1F8Ky/spZ8Zse','2022-07-16 09:10:43'),(18,'Bigg','bigg@bigg.oho','$2b$10$Ost.InqsEyoDFAZp9cbBg.wEKyB6.9RFuEuyCea4wV0YUeP9d2n7a','2022-07-16 15:57:00'),(19,'Straight','straight@straight.oho','$2b$10$oMaQmvNydfCAUVKqrAwEvuRQkkENVhq7HjL.wwlszty/1IF57FC5K','2022-07-17 17:35:31'),(22,'Curvy','curvy@curvy.oho','$2b$10$BSsWGDS7ipR7bQLPXh2vFOj2NOQe4wDwYdWxtmb8BU2kgbf64oZNW','2022-07-17 19:46:08'),(23,'Funny','funny@funny.oho','$2b$10$2JA0WccLSOq0tbnSMRbGHuOwNfU4UkejoPfCbBk9Gjlu3junTMJIW','2022-07-18 14:56:04'),(24,'Nice','nice@nice.oho','$2b$10$lDGD35auK32CeHZ5XsibIO/KufwXforV8xycw0nX3UKTUu8IDLY9e','2022-07-21 20:44:12'),(25,'Tall','tall@tall.oho','$2b$10$.62oj3rtqW65EDyRxh/a2.nM4usaSfl7FSfrBfgEwBp8SQcWa9UEq','2022-07-21 20:53:53');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-07-22  0:02:35
