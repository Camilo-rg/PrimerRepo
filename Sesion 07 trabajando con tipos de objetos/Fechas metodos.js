//Trabajando con fechas

const fecha = new Date();
console.log(fecha)
//los meses inicializan desde 0 = enero...
const fecha2 = new Date(1991, 7, 23)
console.log(fecha2)

const fecha3 = new Date(1000) //definir fecha atravez de milisegundos
console.log(fecha3)

const fecha4 = new Date("October 13,1991 13:30")
console.log(fecha4)

//Comparar fechas
console.log(fecha > fecha4)
console.log(fecha2 === fecha3) //error no se pueden comparar fechas de esa manera

//De esta manera si se puede comparar porque getTime, pasa toda la fecha a milisegundos.
console.log(fecha2.getTime() === fecha4.getTime())

//obtener el dia y el año de una fecha
console.log(fecha2.getDate())
//mes recordar que mes inician desde 0
console.log(fecha2.getMonth()+1)
//Obtener el año
console.log(fecha2.getFullYear())
//Mostrar fecha en un string en manera local
console.log(fecha2.toLocaleDateString())
