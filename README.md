

# Demo

Puede probar una demo del proyecto siguiendo el sguiente enlace
https://juliochaile.github.io/app-web-test/

# Instalacion

Para levantar el proyecto localmente primero clonelo en su dispositivo y luego siga las instrucciones
- Clonar el proyecto con ```git clone https://github.com/JulioChaile/app-web-test ```

## Frontend

- Situese en el directorio del proyecto
- Ejecutar ```npm install``` y esperar que se instalen las dependencias.
- Si no se tiene instalado node.js y npm debera descargarlo de su web [Node.js](https://nodejs.org/en/)

## Base de datos

- Importar en MySQL el archivo ```Dump20210315.sql```, con esto creara la base de datos usada por el proyecto.

## Backend

- Situese en el directorio ```/api``` y ejecute ```composer install```
- En caso de no tener composer instalado ejecute los siguientes comandos en linux:
```curl -sS https://getcomposer.org/installer | php```
```mv composer.phar /usr/local/bin/composer```
- En windows debera descargarlo desde su web [Composer-Setup.exe](https://getcomposer.org/Composer-Setup.exe)
- En el directorio ```/api/config/``` debera modificar el archivo ```db.php``` con los datos de la base de datos:

# Puesta en marcha
- En una terminal situese en el directorio ```/api``` y ejecute ```php yii serve```, esto montara la api en el servidor 8080
- En una terminar diferente situese en el directorio raiz y ejecute ```npm start```
- Abra [http://localhost:3000](http://localhost:3000) para verlo en el navegador
