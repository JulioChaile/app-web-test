CREATE TABLE `CaracteristicasModelo` (
  `IdCaracteristicasModelo` int NOT NULL AUTO_INCREMENT,
  `IdModelo` int NOT NULL,
  `Img` varchar(45) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Titulo` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Descripcion` text COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`IdCaracteristicasModelo`),
  KEY `fk_CaracteristicasModelo_1_idx` (`IdModelo`),
  CONSTRAINT `fk_CaracteristicasModelo_1` FOREIGN KEY (`IdModelo`) REFERENCES `Modelos` (`IdModelo`)
) ENGINE=InnoDB AUTO_INCREMENT=71 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
