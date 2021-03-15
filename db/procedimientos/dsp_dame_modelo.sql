DROP PROCEDURE IF EXISTS `dsp_dame_modelo`;
DELIMITER $$
CREATE PROCEDURE `dsp_dame_modelo`(pIdModelo int)
BEGIN
	/*
    Permite instanciar un modelo desde la base de datos junto con sus caracteristicas.
    */
    
    SELECT 	m.*, (SELECT	JSON_ARRAYAGG(JSON_OBJECT(
					"IdCaracteristicaModelo", c.IdCaracteristicasModelo,
                    "Img", c.Img,
                    "Titulo", c.Titulo,
                    "Descripcion", c.Descripcion
				))
                FROM CaracteristicasModelo c
                WHERE IdModelo = pIdModelo) Caracteristicas,
                (SELECT	JSON_ARRAYAGG(JSON_OBJECT(
					"IdCaracteristicasResaltablesModelo", cr.IdCaracteristicasResaltablesModelo,
                    "Img", cr.Img,
                    "Titulo", cr.Titulo,
                    "Descripcion", cr.Descripcion
				))
                FROM CaracteristicasResaltablesModelo cr
                WHERE IdModelo = pIdModelo) CaracteristicasResaltables
    FROM	    Modelos m
    WHERE       IdModelo = pIdModelo;
    
END $$
DELIMITER ;
