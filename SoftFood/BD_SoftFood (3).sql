#CREATE DATABASE IF NOT EXISTS SoftFood;
USE softfood;

CREATE TABLE IF NOT EXISTS usuario(
	id INT NOT NULL AUTO_INCREMENT,
    hentrada VARCHAR(50),
    hsalida VARCHAR(50),
    puesto VARCHAR(50),
    nss long,
    estudio VARCHAR(100),
    cr VARCHAR(100),
    ap VARCHAR(100),
    contraseña VARCHAR(30),
    usuario VARCHAR(50),
    correo VARCHAR(50),
    observacion VARCHAR(200),
    sueldo FLOAT,
    PRIMARY KEY(id)
);
#drop table usuario;

CREATE TABLE IF NOT EXISTS producto(
	id INT NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(100),
    precio float,
    categoria VARCHAR(100),
    descripcion VARCHAR(150),
    observacion varchar(200),
    PRIMARY KEY(id)
);

INSERT INTO producto VALUES
	(0, "simple", 45.00, "Hamburguesa", "pan,carne",""),
    (0, "simple con queso", 50.00, "Hamburguesa", "pan,carne y queso",""),
    (0, "de merluza y atun", 55.00, "Hamburguesa", "merluza,atun,cebolla,lechuga",""),
    (0, "salsa de chile dulce", 70.00, "Hamburguesa", "con salsa dulce y picante",""),
    (0, "completa", 100.00, "Hamburguesa", "con todo",""),
    (0, "vegetariana", 60.00, "Hamburguesa", "setas,cebolla,ajo,aceite de oliva",""),
    (0, "infantil", 25.00,"Hamburguesa", "para niños",""),
    (0, "BBQ", 50.00,"Hamburguesa", "con BBQ",""),
    (0, "ranchero", 55.00, "Hamburguesa", "al estilo ranchero","");
   



INSERT INTO producto VALUES
	(0, "canasta", 15.00,"Taco", "taco de canasta",""),
    (0, "dorados", 20.00,"Taco", "taco dorado",""),
    (0, "barbacoa", 25.00,"Taco", "taco con barbacoa",""),
    (0, "carnitas", 25.00,"Taco", "taco con carnitas",""),
    (0, "guisado", 25.00,"Taco", "taco con guisado",""),
    (0, "carne asada", 30.00,"Taco", "taco con carne asada",""),
    (0, "suadero", 30.00, "Taco", "taco con suadero",""),
    (0, "pastor", 25.00,"Taco", "taco con carne al pastor",""),
    (0, "tripas", 25.00, "Taco", "taco con tripas",""),
    (0, "cecina", 20.00, "Taco", "taco con cecina","");


INSERT INTO producto VALUES
	(0, "jamón de pavo", 30.00, "Burrito", "burrito",""),
    (0, "frijoles", 25.00, "Burrito", "burrito con frijoles","ya no hay frijoles"),
    (0, "bistec", 35.00,"Burrito", "burrito con bistec",""),
    (0, "pollo", 30.00, "Burrito", "burrito con pollo",""),
    (0, "champiñones", 25.00, "Burrito", "burrito con champiñones",""),
    (0, "carne molida", 35.00,"Burrito", "burrito con carne molida",""),
    (0, "pechuga asada", 40.00,"Burrito", "burrito con pechuga asada ",""),
    (0, "vegetariano", 20.00, "Burrito", "burrito con vegetales",""),
    (0, "carne deshebrada", 20.00, "Burrito", "burrito con carne deshebrada",""),
    (0, "Miniburritos", 25.00, "Burrito", "el cliente elige los ingredientes","");

INSERT INTO producto VALUES
	(0, "Carne asada individual", 50.00, "Orden", "para 1",""),
    (0, "Carne asada grande", 100.00, "Orden", "para 4",""),
    (0, "Carne asada familiar", 150.00, "Orden", "para 6",""),
    (0, "Parrillada para 1 persona", 50.00,"Orden", "diferentes tipos de carnes para asar",""),
    (0, "Parrillada para 2 personas", 100.00, "Orden", "diferentes tipos de carnes para asar",""),
    (0, "Parrillada para 3 personas", 150.00,"Orden", "diferentes tipos de carnes para asar",""),
    (0, "Pizza grande", 100.00,"Orden", "para 4 personas",""),
    (0, "Pizza chica", 50.00,"Orden", "para 1 persona",""),
    (0, "Pizza familiar", 150.00, "Orden", "para 6 personas","");

INSERT INTO producto VALUES
	(0, "Sencilla", 25.00, "Tlayuda", "solo quesillo",""),
    (0, "Carnívora", 40.00,"Tlayuda", "con todas las carnes",""),
    (0, "Chapulines y verdolaga", 35.00,"Tlayuda", "con chapulines, verdolaga",""),
    (0, "Istmeño", 30.00, "Tlayuda", "tlayuda al estilo istmeño",""),
    (0, "Quelites", 30.00, "Tlayuda", "tlayuda al estilo quelites",""),
    (0, "Cañada", 30.00, "Tlayuda", "tlayuda al estilo cañada",""),
    (0, "Mixteca", 30.00, "Tlayuda", "quesillo, cerdo, frijoles,col,chorizo","");



INSERT INTO producto VALUES
	(0, "jamón", 30.00,"Quesadilla", "quesillo y jamon",""),
    (0, "combinada", 35.00,"Quesadilla", "quesillo, chorizo,carne asada,longaniza",""),
    (0, "chorizo", 40.00, "Quesadilla", "quesillo y chorizo",""),
    (0, "carne asada", 35.00, "Quesadilla", "quesillo y carne asada",""),
    (0, "carne molida", 25.00,"Quesadilla", "quesillo y carne molida",""),
    (0, "tripa", 25.00,"Quesadilla", "quesillo y tripa en una tortilla",""),
    (0, "frita clásicas de queso", 30.00, "Quesadilla", "tortilla con queso manchego",""),
    (0, "frita de hongos", 30.00, "Quesadilla", "quesillo y hongos",""),
    (0, "pollo y bacon", 40.00,"Quesadilla", "quesillo,pollo y tocino",""),
    (0, "bacon y queso", 40.00, "Quesadilla", "tocino,tortilla,queso manchego","");    

INSERT INTO producto VALUES
(0, "pastel de chocolate", 20.00, "postre", "harina,huevos,leche,chocolate","se nos acabo el chocolate"),
(0, "Brownies", 20.00, "postre", "harina,huevos,leche,chocolate",""),
(0, "Bolitas de coco y chocolate", 20.00, "postre", "bolitas de coco rellenas de chocolate",""),
(0, "Tarta de frambuesa y queso crema", 20.00, "postre", "harina,frambuesa,crema,leche,huevos,azucar",""),
(0, "Tartaletas de lima y queso crema", 20.00, "postre", "harina,limon,queso crema,leche,huevos,azucar",""),
(0, "Tarta de galletas y chocolate", 20.00, "postre", "galletas maria , leche, azucar,harina,chocolate",""),
(0, "pay de manzana", 20.00,"postre", "hecho de manzana",""),
(0, "Helado de dulce de leche sin heladera", 20.00, "postre", "leche, dulce de leche,azucar",""),
(0, "Helado cremoso de vainilla sin heladera", 20.00, "postre", "leche,saborizante de vainilla",""),
(0, "Sorbete de mango y naranja con Thermomix", 20.00, "postre", "mango,naranja,azucar,agua","");

INSERT INTO producto VALUES
(0, "Horchata", 25.00, "natural", "extracto de horchata",""),
(0, "Jamaica", 25.00, "natural", "de la flor de jamaica",""),
(0, "Pozol", 25.00, "natural", "de cacao",""),
(0, "Limonada", 25.00, "natural", "bebida natural de limon",""),
(0, "Melón", 25.00,"natural", "bebida natural",""),
(0, "Guanabana", 25.00, "natural", "bebida natural",""),
(0, "Naranja", 25.00, "natural", "bebida natural de naranja",""),
(0, "Piña", 25.00, "natural", "bebida natural de piña",""),
(0, "Tamarindo", 25.00, "natural", "bebida natural de tamarindo",""),
(0, "Mango", 25.00,"natural", "bebida natural de mango","");


INSERT INTO producto VALUES
    (0, "Coca-Cola", 25.00, "embotellado", "bebida embotellada con gas",""),
    (0, "Pepsi", 25.00, "embotellado", "bebida embotellada con gas",""),
    (0, "Fanta", 25.00, "embotellado", "bebida embotellada con gas",""),
    (0, "Sprite", 25.00, "embotellado", "bebida embotellada con gas",""),
    (0, "Peñafiel", 25.00, "embotellado", "bebida embotellada con gas",""),
    (0, "Mirinda", 25.00, "embotellado", "bebida embotellada con gas",""),
    (0, "Manzanita sol", 25.00, "embotellado", "bebida embotellada con gas",""),
    (0, "Fresca", 25.00, "embotellado", "bebida embotellada con gas",""),
    (0, "Delaware punch", 25.00,"embotellado", "bebida embotellada con gas",""),
    (0, "Mundet", 25.00, "embotellado", "bebida embotellada con gas","");
    
INSERT INTO producto VALUES
	(0, "Bud Light", 25.00,"cerveza", "bebida alcoholica",""),
    (0, "Heineken", 25.00,"cerveza", "bebida alcoholica",""),
    (0, "Corona Extra", 25.00, "cerveza", "bebida alcoholica",""),
    (0, "Coors Light", 25.00, "cerveza", "bebida alcoholica",""),
    (0, "Guiness", 25.00, "cerveza", "bebida alcoholica",""),
    (0, "Tecate", 25.00, "cerveza", "bebida alcoholica",""),
    (0, "Modelo", 25.00,"cerveza", "bebida alcoholica",""),
    (0, "Dos XX", 25.00,"cerveza", "bebida alcoholica",""),
    (0, "Michelada", 25.00,"cerveza", "bebida alcoholica",""),
    (0, "Amstel", 25.00,"cerveza", "cerveza, chirimico,polvo miguelito","");
