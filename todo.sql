-- phpMyAdmin SQL Dump
-- version 4.5.2
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Nov 04, 2016 at 12:02 PM
-- Server version: 5.7.9
-- PHP Version: 5.6.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `todo`
--

-- --------------------------------------------------------

--
-- Table structure for table `todolista`
--

DROP TABLE IF EXISTS `todolista`;
CREATE TABLE IF NOT EXISTS `todolista` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` text NOT NULL,
  `vrsta` int(11) NOT NULL,
  `tekst` text NOT NULL,
  `datum` date NOT NULL,
  UNIQUE KEY `id` (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=146 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `todolista`
--

INSERT INTO `todolista` (`id`, `username`, `vrsta`, `tekst`, `datum`) VALUES
(127, 'filip', 2, 'blabla', '2016-07-08'),
(128, 'filip', 1, 'asdasdas', '2016-06-10'),
(129, 'filip', 3, 'fghfghfghfg', '2017-06-08'),
(130, 'filip', 1, 'sdfsdfsdf', '2016-06-09'),
(131, 'filip', 3, 'sdfsdfsdfasdasdasdasdasdsadssssssssssssss', '2018-06-08'),
(133, 'filip', 2, 'sdfsdfsdfsdasdasssss', '2018-06-08'),
(134, 'filip', 1, 'sdfsdfsdfsdfsdfasdasdaasdasdasdasdasdasds', '2016-06-08'),
(135, 'filip', 1, 'asdasdasdasdasdas', '2016-06-08'),
(136, 'filip', 2, 'asdasasdasdasdasasdasdasdasdasdasdasdas', '2016-06-08'),
(137, 'filip', 3, 'asdasdasdasdasdasdsdfsdfsdfsdfsdfsdfsd', '2016-06-08'),
(138, 'filip', 2, 'asdasdasdasd', '2016-06-08'),
(139, 'nikola96', 1, 'nikola1111', '2016-06-08'),
(140, 'nikola96', 2, 'nik1111', '2016-06-08'),
(141, 'nikola96', 3, 'asasasdasd', '2015-03-08'),
(143, 'filip', 1, 'dfgdfgdfgdf', '2016-06-08'),
(145, 'filip', 2, 'Proba 123', '2017-08-19');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `username` text NOT NULL,
  `password` text NOT NULL,
  `role` text NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`username`, `password`, `role`) VALUES
('filip', '24051996', 'user'),
('admin', 'admin', 'admin'),
('nikola96', '123456', 'user'),
('oliver', '', 'user'),
('proba', '1122', 'user');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
