DROP PROCEDURE IF EXISTS `dsp_listar_modelos`;
DELIMITER $$
CREATE PROCEDURE `dsp_listar_modelos`()
BEGIN
	/*
    Permite listar los modelos.
    */
    
    SELECT  IdModelo, Marca, Año, Precio, ImgHome, Categoria
    FROM	    Modelos;
END $$
DELIMITER ;
