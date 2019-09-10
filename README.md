﻿# Sistema de pagos en Linea (Proyecto software 3)

 Este es un sistema el cual se efectuan pagos de manera automatica, definiendo a quien se le debe o 
 a que entidad se le debe, definir que tipo de deuda es y como se va pagar dicha deuda.

##Empezando
 Estas instrucciones le proporcionarán una copia del proyecto en funcionamiento en su máquina local para fines de desarrollo y prueba. Consulte la implementación para obtener notas sobre cómo implementar el proyecto en un sistema en vivo.

##Prerequisito 
Como requisito principal , y el mas importante necesitaremos tener nodejs en nuestra maquina una vez la tengamos , podemos ponernos manos a  la obra 

https://nodejs.org/es/

y por ultimo y no menos importante necesitaremos mongo 

https://www.mongodb.com/es

##Instalando
 Crear el package.json
`npm init`

instalaremos las dependencias necesarias 
`npm i`

 Se uso nodemon para poder reiniciar el servidor cadavez que se reinicia el proyecto
`npm install nodemon -g`

 Se agregan las dependencias para la creacion de la api-rest
`npm add express babel-cli babel-preset-es2015 cosinng mongojs`

##Ejecutando pruebas

 Se accede a la carpeta del test
`cd test`

 Se instala la selenium webdriver y cucumbre
`npm install selenium-webdriver`
`npm install cucumber`

 Se corre la prueba 
`npm test`
