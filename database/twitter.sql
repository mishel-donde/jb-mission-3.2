-- phpMyAdmin SQL Dump
-- version 5.2.2
-- https://www.phpmyadmin.net/
--
-- Host: db
-- Generation Time: Mar 25, 2025 at 02:16 PM
-- Server version: 9.2.0
-- PHP Version: 8.2.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `server`
--
CREATE DATABASE IF NOT EXISTS `server` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `server`;

-- --------------------------------------------------------

--
-- Table structure for table `companies`
--

CREATE TABLE `companies` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `companies`
--

INSERT INTO `companies` (`id`, `name`, `created_at`, `updated_at`) VALUES
('1c97cf2c-0983-11f0-bcf5-0242ac110002', 'Microsoft', '2025-03-25 14:11:02', '2025-03-25 14:11:02'),
('1c97d7af-0983-11f0-bcf5-0242ac110002', 'IBM', '2025-03-25 14:11:02', '2025-03-25 14:11:02'),
('1c97dc51-0983-11f0-bcf5-0242ac110002', 'GoDaddy', '2025-03-25 14:11:02', '2025-03-25 14:11:02'),
('1c97e0df-0983-11f0-bcf5-0242ac110002', 'Digital0', '2025-03-25 14:11:02', '2025-03-25 14:11:02');

-- --------------------------------------------------------

--
-- Table structure for table `servers`
--

CREATE TABLE `servers` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `company_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `ip` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `status` enum('active','inactive') COLLATE utf8mb4_general_ci NOT NULL DEFAULT 'active',
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `servers`
--

INSERT INTO `servers` (`id`, `name`, `company_id`, `ip`, `status`, `created_at`, `updated_at`) VALUES
('ac0e364c-0983-11f0-bcf5-0242ac110002', 'Alpha-01', '1c97cf2c-0983-11f0-bcf5-0242ac110002', '192.168.1.10', 'active', '2025-03-25 14:12:04', '2025-03-25 14:12:04'),
('ac0e3c4b-0983-11f0-bcf5-0242ac110002', 'Omega-Serve', '1c97d7af-0983-11f0-bcf5-0242ac110002', '192.168.1.11', 'inactive', '2025-03-25 14:12:04', '2025-03-25 14:12:04'),
('ac0e41a5-0983-11f0-bcf5-0242ac110002', 'Titan-Core', '1c97dc51-0983-11f0-bcf5-0242ac110002', '192.168.1.12', 'active', '2025-03-25 14:12:04', '2025-03-25 14:12:04'),
('ac0e46e1-0983-11f0-bcf5-0242ac110002', 'HyperNode', '1c97e0df-0983-11f0-bcf5-0242ac110002', '192.168.1.13', 'inactive', '2025-03-25 14:12:04', '2025-03-25 14:12:04');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `companies`
--
ALTER TABLE `companies`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `servers`
--
ALTER TABLE `servers`
  ADD PRIMARY KEY (`id`),
  ADD KEY `company_id` (`company_id`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `servers`
--
ALTER TABLE `servers`
  ADD CONSTRAINT `servers_ibfk_1` FOREIGN KEY (`company_id`) REFERENCES `companies` (`id`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
