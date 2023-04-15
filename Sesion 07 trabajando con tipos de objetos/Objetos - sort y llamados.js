//Trabajar con Objetos

const obj = {
    id: 4,
    nombre: 'Camilo',
    apellido: 'Guerra',
    isDeveloper: false,
    libroFavorito: ["Ninguno"],
    "6-cosas": [1,2,3,4]
}

console.log(obj.apellido)
console.log(obj["6-cosas"])

const prop = "isDeveloper"
console.log(obj[prop])

const obj2 = obj
console.log(obj2)

obj2.nombre="patricio";
//Ambos cambiaron, sucede porque en los objetos se iguala el valor en memoria no solo copia datos internos, tambien su espacio en memoria
console.log(obj2.nombre)
console.log(obj.nombre)

//forma correcta de clonar objeto
const obj3 = {...obj}

obj3.nombre="Parlante"
console.log(obj.nombre)
console.log(obj3.nombre)

//Como ordenar listas de objetos en funcion de un atributo/propiedad
const listaPeliculas =[
    {titulo: "lo que el viento", anio: 1939},
    {titulo: "titanic", anio: 1997},
    {titulo: "mohana", anio: 2016},
    {titulo: "efecfo", anio: 2004},
    {titulo: "ted", anio: 2012}
]
console.log(listaPeliculas)

//.sort -> muta el valor orginal de lista orginal
listaPeliculas.sort((a,b)=> a.anio - b.anio)
console.log(listaPeliculas)