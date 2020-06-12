SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


--
-- Database: `dice_db`
--
-- Table structure for table `routlette_data_tbl`
--

CREATE TABLE `routlette_data_tbl` (
  `name` varchar(20) NOT NULL,
  `winning_no` smallint(6) NOT NULL,
  `winning_amt` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;