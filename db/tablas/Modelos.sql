CREATE TABLE `Modelos` (
  `IdModelo` int NOT NULL AUTO_INCREMENT,
  `Marca` varchar(45) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Año` varchar(45) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Precio` varchar(45) COLLATE utf8mb4_unicode_ci NOT NULL,
  `ImgHome` varchar(45) COLLATE utf8mb4_unicode_ci NOT NULL,
  `ImgFicha` varchar(45) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Categoria` char(1) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Titulo` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Descripcion` text COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`IdModelo`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
