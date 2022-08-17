-- MySQL dump 10.13  Distrib 8.0.28, for macos11 (x86_64)
--
-- Host: localhost    Database: stdio-blog
-- ------------------------------------------------------
-- Server version	8.0.28

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
-- Table structure for table `Categories`
--

DROP TABLE IF EXISTS `Categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Categories` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `avatar` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Categories`
--

LOCK TABLES `Categories` WRITE;
/*!40000 ALTER TABLE `Categories` DISABLE KEYS */;
INSERT INTO `Categories` VALUES (1,'Âm nhạc','2','2022-08-18 02:50:22','2022-08-18 02:50:22'),(2,'Truyện Ma','1','2022-08-18 02:50:38','2022-08-18 02:50:38');
/*!40000 ALTER TABLE `Categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Posts`
--

DROP TABLE IF EXISTS `Posts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Posts` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `description` text,
  `content` text,
  `status` varchar(255) DEFAULT NULL,
  `avatar` varchar(255) DEFAULT NULL,
  `userId` varchar(255) DEFAULT NULL,
  `cateId` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Posts`
--

LOCK TABLES `Posts` WRITE;
/*!40000 ALTER TABLE `Posts` DISABLE KEYS */;
INSERT INTO `Posts` VALUES (1,'Truyền người con gái bên sông','Đây là một câu chuyện có thật do chính ông bà tôi kể lại ','Một cuộc giao dịch, cô mang thai con của người lạ, mang bụng bầu gả cho người đàn ông đã đính ước từ nhỏ. Vốn cho rằng chỉ là một cuộc giao dịch, lại dây dưa thứ tình cảm không nên có trong cuộc hôn nhân này. Mười tháng hoài thai sắp sinh, một tờ đơn ly hôn trên đất, cô mới hoàn toàn tình ngộ. Sau này anh ta nói \"Bà xã về đi, người anh yêu luôn là em\"','STATUS_PUBLIC','1','1','2','2022-08-18 02:51:14','2022-08-18 02:53:22'),(2,'Cách chơi đàn piano','Đây là một câu chuyện có thật do chính ông bà tôi kể lại ','Một cuộc giao dịch, cô mang thai con của người lạ, mang bụng bầu gả cho người đàn ông đã đính ước từ nhỏ. Vốn cho rằng chỉ là một cuộc giao dịch, lại dây dưa thứ tình cảm không nên có trong cuộc hôn nhân này. Mười tháng hoài thai sắp sinh, một tờ đơn ly hôn trên đất, cô mới hoàn toàn tình ngộ. Sau này anh ta nói \"Bà xã về đi, người anh yêu luôn là em\"','STATUS_PUBLIC','1','1','1','2022-08-18 02:51:32','2022-08-18 02:59:24'),(4,'Hiểu biết về organ','Đây là một câu chuyện có thật do chính ông bà tôi kể lại ','Một cuộc giao dịch, cô mang thai con của người lạ, mang bụng bầu gả cho người đàn ông đã đính ước từ nhỏ. Vốn cho rằng chỉ là một cuộc giao dịch, lại dây dưa thứ tình cảm không nên có trong cuộc hôn nhân này. Mười tháng hoài thai sắp sinh, một tờ đơn ly hôn trên đất, cô mới hoàn toàn tình ngộ. Sau này anh ta nói \"Bà xã về đi, người anh yêu luôn là em\"','STATUS_PUBLIC','1','1','1','2022-08-18 02:51:48','2022-08-18 02:53:34'),(5,'Hồn về trong gió','Đây là một câu chuyện có thật do chính ông bà tôi kể lại ','Một cuộc giao dịch, cô mang thai con của người lạ, mang bụng bầu gả cho người đàn ông đã đính ước từ nhỏ. Vốn cho rằng chỉ là một cuộc giao dịch, lại dây dưa thứ tình cảm không nên có trong cuộc hôn nhân này. Mười tháng hoài thai sắp sinh, một tờ đơn ly hôn trên đất, cô mới hoàn toàn tình ngộ. Sau này anh ta nói \"Bà xã về đi, người anh yêu luôn là em\"','STATUS_DRAFT','1','1','2','2022-08-18 02:51:57','2022-08-18 02:51:57'),(6,'Tôi và em','Đây là một câu chuyện có thật do chính ông bà tôi kể lại ','Một cuộc giao dịch, cô mang thai con của người lạ, mang bụng bầu gả cho người đàn ông đã đính ước từ nhỏ. Vốn cho rằng chỉ là một cuộc giao dịch, lại dây dưa thứ tình cảm không nên có trong cuộc hôn nhân này. Mười tháng hoài thai sắp sinh, một tờ đơn ly hôn trên đất, cô mới hoàn toàn tình ngộ. Sau này anh ta nói \"Bà xã về đi, người anh yêu luôn là em\"','STATUS_DRAFT','1','1','2','2022-08-18 02:52:11','2022-08-18 02:52:11'),(7,'đuọc update','1','1','STATUS_PUBLIC','1','1','1','2022-08-18 02:52:18','2022-08-18 02:55:38'),(8,'Tấm cám và những người bạn','Đây là một câu chuyện có thật do chính ông bà tôi kể lại ','Một cuộc giao dịch, cô mang thai con của người lạ, mang bụng bầu gả cho người đàn ông đã đính ước từ nhỏ. Vốn cho rằng chỉ là một cuộc giao dịch, lại dây dưa thứ tình cảm không nên có trong cuộc hôn nhân này. Mười tháng hoài thai sắp sinh, một tờ đơn ly hôn trên đất, cô mới hoàn toàn tình ngộ. Sau này anh ta nói \"Bà xã về đi, người anh yêu luôn là em\"','STATUS_DRAFT','1','2','2','2022-08-18 03:02:37','2022-08-18 03:02:37'),(9,'Tryền thuyết cây đàn violon','Đây là một câu chuyện có thật do chính ông bà tôi kể lại ','Một cuộc giao dịch, cô mang thai con của người lạ, mang bụng bầu gả cho người đàn ông đã đính ước từ nhỏ. Vốn cho rằng chỉ là một cuộc giao dịch, lại dây dưa thứ tình cảm không nên có trong cuộc hôn nhân này. Mười tháng hoài thai sắp sinh, một tờ đơn ly hôn trên đất, cô mới hoàn toàn tình ngộ. Sau này anh ta nói \"Bà xã về đi, người anh yêu luôn là em\"','STATUS_DRAFT','1','2','1','2022-08-18 03:03:03','2022-08-18 03:03:03'),(10,'Tiếng sáo diều tuổi thơ','Đây là một câu chuyện có thật do chính ông bà tôi kể lại ','Một cuộc giao dịch, cô mang thai con của người lạ, mang bụng bầu gả cho người đàn ông đã đính ước từ nhỏ. Vốn cho rằng chỉ là một cuộc giao dịch, lại dây dưa thứ tình cảm không nên có trong cuộc hôn nhân này. Mười tháng hoài thai sắp sinh, một tờ đơn ly hôn trên đất, cô mới hoàn toàn tình ngộ. Sau này anh ta nói \"Bà xã về đi, người anh yêu luôn là em\"','STATUS_DRAFT','1','2','1','2022-08-18 03:03:18','2022-08-18 03:03:18');
/*!40000 ALTER TABLE `Posts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `SequelizeMeta`
--

DROP TABLE IF EXISTS `SequelizeMeta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `SequelizeMeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`name`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `SequelizeMeta`
--

LOCK TABLES `SequelizeMeta` WRITE;
/*!40000 ALTER TABLE `SequelizeMeta` DISABLE KEYS */;
INSERT INTO `SequelizeMeta` VALUES ('20220816140958-create-user.js'),('20220816141232-create-category.js'),('20220816232725-create-post.js');
/*!40000 ALTER TABLE `SequelizeMeta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Users`
--

DROP TABLE IF EXISTS `Users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `userName` varchar(255) DEFAULT NULL,
  `age` varchar(255) DEFAULT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `avatar` varchar(255) DEFAULT NULL,
  `role` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Users`
--

LOCK TABLES `Users` WRITE;
/*!40000 ALTER TABLE `Users` DISABLE KEYS */;
INSERT INTO `Users` VALUES (1,'diepthesang1@gmail.com','$2b$10$u3XC0cznW3SrtZ/4AUvadexhARZE4dzB3dsjPjx9o.Zh9x9vdgizG','sangdt1','24','1','4','ROLE_USER','2022-08-18 02:47:42','2022-08-18 02:48:47'),(2,'diepthesang2@gmail.com','$2b$10$Fuq8DloiHewyCE4MXsz7aOKDUnTVkW8gLVvsgRAF5psdmetp2JDvC','sang2','19','1','1','ROLE_USER','2022-08-18 03:01:21','2022-08-18 03:01:21');
/*!40000 ALTER TABLE `Users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-08-18  3:04:34
