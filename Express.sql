-- phpMyAdmin SQL Dump
-- version 5.1.4deb1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Sep 13, 2022 at 11:53 AM
-- Server version: 10.6.7-MariaDB-3
-- PHP Version: 8.1.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `Express`
--

-- --------------------------------------------------------

--
-- Table structure for table `comments`
--

CREATE TABLE `comments` (
  `ID` int(11) NOT NULL,
  `author_id` int(11) DEFAULT NULL,
  `post_id` int(11) NOT NULL,
  `user_name` varchar(100) COLLATE utf8mb4_persian_ci NOT NULL,
  `user_email` varchar(100) COLLATE utf8mb4_persian_ci NOT NULL,
  `user_url` varchar(100) COLLATE utf8mb4_persian_ci NOT NULL,
  `comment` text COLLATE utf8mb4_persian_ci NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `status` tinyint(4) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_persian_ci;

--
-- Dumping data for table `comments`
--

INSERT INTO `comments` (`ID`, `author_id`, `post_id`, `user_name`, `user_email`, `user_url`, `comment`, `created_at`, `status`) VALUES
(1, NULL, 3, 'افشین', 'xqu4t312x@gmail.com', 'afshin.me', 'بسیار عالی', '2022-09-06 15:47:47', 1),
(2, NULL, 3, 'افشین', 'xqu4t312x@gmail.com', 'afshin.me', 'بسیار عالی', '2022-09-06 15:47:47', 2),
(3, NULL, 3, 'افشین', 'xqu4t312x@gmail.com', 'afshin.me', 'بسیار عالی', '2022-09-06 15:47:47', 2);

-- --------------------------------------------------------

--
-- Table structure for table `posts`
--

CREATE TABLE `posts` (
  `ID` int(11) NOT NULL,
  `author_id` int(11) NOT NULL,
  `title` varchar(100) COLLATE utf8mb4_persian_ci NOT NULL,
  `slug` varchar(100) COLLATE utf8mb4_persian_ci NOT NULL,
  `content` longtext COLLATE utf8mb4_persian_ci NOT NULL,
  `status` tinyint(1) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `views` int(11) NOT NULL DEFAULT 0,
  `comments` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_persian_ci;

--
-- Dumping data for table `posts`
--

INSERT INTO `posts` (`ID`, `author_id`, `title`, `slug`, `content`, `status`, `created_at`, `views`, `comments`) VALUES
(1, 1, 'آموزش اکسپرس در نود JS', 'learn-express-nodejs', 'آموزش اکسپرس در نود JSآموزش اکسپرس در نود JSآموزش اکسپرس در نود JSآموزش اکسپرس در نود JSآموزش اکسپرس در نود JSآموزش اکسپرس در نود JSآموزش اکسپرس در نود JSآموزش اکسپرس در نود JSآموزش اکسپرس در نود JSآموزش اکسپرس در نود JSآموزش اکسپرس در نود JSآموزش اکسپرس در نود JSآموزش اکسپرس در نود JSآموزش اکسپرس در نود JSآموزش اکسپرس در نود JSآموزش اکسپرس در نود JSآموزش اکسپرس در نود JSآموزش اکسپرس در نود JS', 1, '2022-08-20 11:31:28', 325, 0),
(3, 2, 'فارسی سازی تقویم اکسپرس', 'chenge-date-express', 'فارسی سازی تقویم اکسپرسفارسی سازی تقویم اکسپرسفارسی سازی تقویم اکسپرسفارسی سازی تقویم اکسپرسفارسی سازی تقویم اکسپرسفارسی سازی تقویم اکسپرسفارسی سازی تقویم اکسپرسفارسی سازی تقویم اکسپرسفارسی سازی تقویم اکسپرسفارسی سازی تقویم اکسپرسفارسی سازی تقویم اکسپرسفارسی سازی تقویم اکسپرسفارسی سازی تقویم اکسپرسفارسی سازی تقویم اکسپرسفارسی سازی تقویم اکسپرسفارسی سازی تقویم اکسپرس', 0, '2022-08-20 16:49:43', 750, 0),
(5, 1, 'این مطلب دوم ویرایش شده هست', 'new-post-3', 'این مطلب دوم من استاین مطلب دوم من استاین مطلب دوم من استاین مطلب دوم من استاین مطلب دوم من استاین مطلب دوم من استاین مطلب دوم من استاین مطلب دوم من استاین مطلب دوم من استاین مطلب دوم من استاین مطلب دوم من استاین مطلب دوم من است', 2, '2022-08-28 15:22:29', 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `settings`
--

CREATE TABLE `settings` (
  `id` int(11) NOT NULL,
  `setting_name` varchar(100) COLLATE utf8mb4_persian_ci NOT NULL,
  `setting_value` text COLLATE utf8mb4_persian_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_persian_ci;

--
-- Dumping data for table `settings`
--

INSERT INTO `settings` (`id`, `setting_name`, `setting_value`) VALUES
(1, 'website_title', 'تست'),
(2, 'website_description', 'تست '),
(3, 'post_per_page', '12'),
(4, 'users_can_submit_comment', '1'),
(5, 'users_can_register', '1');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `ID` int(11) NOT NULL,
  `full_name` varchar(100) COLLATE utf8mb4_persian_ci NOT NULL,
  `email` varchar(100) COLLATE utf8mb4_persian_ci NOT NULL,
  `password` varchar(100) COLLATE utf8mb4_persian_ci NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `role` tinyint(2) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_persian_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`ID`, `full_name`, `email`, `password`, `created_at`, `role`) VALUES
(11, 'asdfsd', 'dsdfadf@gmail.com', '$2b$10$mkEhxnmZYcyqjufRay/ta.F0R5Ye/Pd1oO.dH85/0dgYcf/vRJsDy', '2022-09-11 16:15:40', 0),
(12, 'محسن', 'mohsen@gmail.com', '$2b$10$LvGF4kKMOMG.t4L1whf8NudL3fqCqVM1udOdCFaTqlwnwAj.9mKVG', '2022-09-12 12:29:26', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `settings`
--
ALTER TABLE `settings`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `comments`
--
ALTER TABLE `comments`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `posts`
--
ALTER TABLE `posts`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `settings`
--
ALTER TABLE `settings`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
