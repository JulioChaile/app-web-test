CREATE TABLE `CaracteristicasResaltablesModelo` (
  `IdCaracteristicasResaltablesModelo` int NOT NULL AUTO_INCREMENT,
  `IdModelo` int NOT NULL,
  `Img` varchar(45) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Titulo` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Descripcion` text COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`IdCaracteristicasResaltablesModelo`),
  KEY `fk_CaracteristicasResaltablesModelo_1_idx` (`IdModelo`),
  CONSTRAINT `fk_CaracteristicasResaltablesModelo_1` FOREIGN KEY (`IdModelo`) REFERENCES `Modelos` (`IdModelo`)
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
