//Comparar Listas
// .every()

const array = [5,2,76,2,5,-2,7-29,11]

//validar si todos los tipos de valor dentro son positivos
// const resultado = array.every(valor =>{
//     if(valor >0){
//         return true;
//     }else if(valor <0){
//         return false;
//     }
// })

const resultado = array.every(valor => valor > 0);
console.log(resultado)

//comparacion de listas 
const arr1 = [1,2,3,4];
const arr2 = [1,2,3,4];

console.log(arr1 === arr2)

//primero se pasan dos parametros para los array
const comparArray = ((array_1, array_2) => {
    //se calcula que tengan las mismas longitudes, si no son iguales se sale devolviendo un false
    if (array_1.legth !== array_2.legth ){
        return false;
    }
    //Al ser iguales las longitudes entramos aqui y comparar cada 1 de los valores entre si
    const res = array_1.every((valor,i)=> valor === array_2[i])
    return res;
})

console.log(comparArray(arr1,arr2))

//AlgunosElementos cumplen cierta condicion .some()

const alguno = array.some(valor => valor >0)
console.log(alguno)

const existe = array.some(valor => valor === 11)
console.log(existe)

const listaObjetos = [
    {nombre: "camilo", edad: 31},
    {nombre: "David", edad: 70},
    {nombre: "Diana", edad: 32},
    {nombre: "Lucia", edad: 63},
    {nombre: "Carmensita", edad: 56},
]

const dentro = listaObjetos.some(valor => valor.nombre === "David")
console.log(dentro)

//como obtener una lista apartir de un objeto iterable
const str = "Hola camilito";
//esto transforma una cadena en una lista
const tra_str = Array.from(str);
console.log(tra_str);