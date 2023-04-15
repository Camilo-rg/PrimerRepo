// listas -> array o arreglo. Es un conjunto de variables puestas en orden
const lista1 = [1, "hola", true, null];

console.log('lista1 :>> ', lista1);
const lista2 = new Array (1, "hola", true, null);
console.log('lista2 :>> ', lista2);
const lista3 = new Array(3);
console.log('lista 3 :>> ', lista3);

//objetos -> Representacion de objetos de la vida real
const movil = {
ancho: 5,
alto: 10,
marca: "AirSpark" ,
isWhite: false,
contactos: ["camilo", "lulu", "lili"],
tarjeta: {
    marca: "nano",
    almacenamiento: 8
    }
}
movil.anio = 2022;

console.log(movil.contactos+" / "+movil.anio);


//fechas
//Librerias de apoyo para fechas Moment.js
new Date();
const ahora = new Date();
console.log(ahora)
const fecha_milis = new Date(10);
console.log(fecha_milis)
const fecha_cadena = new Date("March 25 2020");
console.log('fechaCadena:>> ', fecha_cadena);
const fecha_valores = new Date(2022, 0, 15 ); //las fechas inician con 0 no con 1 para enero
console.log('fecha_valores :>> ', fecha_valores);
const dia = ahora.getDate();
const mes = ahora.getMonth()+1;
const anio = ahora.getFullYear();
console.log('Dia, mes y año :>> ', dia, mes, anio,);
 