CREATE TABLE IF NOT EXISTS person(
    `id` bigint(20) NOT NULL AUTO_INCREMENT,
    `firstname` varchar(255) DEFAULT NULL,
    `lastname` varchar(255) DEFAULT NULL,
    `job` varchar(255) DEFAULT NULL,
    PRIMARY KEY (`id`)
    )ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;