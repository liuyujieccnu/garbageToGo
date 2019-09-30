CREATE TABLE `garbage` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `garbage_id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `category` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  `introduction` TEXT CHARACTER SET utf8 DEFAULT NULL,
  `image1` varchar(255) NOT NULL,
  `description1` TEXT CHARACTER SET utf8 DEFAULT NULL,
  `image2` varchar(255) NOT NULL,
  `description2` TEXT CHARACTER SET utf8 DEFAULT NULL,
  `image3` varchar(255) NOT NULL,
  `description3` TEXT CHARACTER SET utf8 DEFAULT NULL,
  `image4` varchar(255) NOT NULL,
  `description4` TEXT CHARACTER SET utf8 DEFAULT NULL,
  `image5` varchar(255) NOT NULL,
  `description5` TEXT CHARACTER SET utf8 DEFAULT NULL,
  `image6` varchar(255) NOT NULL,
  `description6` TEXT CHARACTER SET utf8 DEFAULT NULL,
  `create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

SET @IMAGE_BASE_URL = "https://movies-1257864644.cos.ap-beijing.myqcloud.com/"; -- FOR EXAMPLE: https://*****.ap-shanghai.myqcloud.com/