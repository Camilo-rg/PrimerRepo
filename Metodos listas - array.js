//Trabajar con listas
let arr = [1,3,"camilo",4.5, 6];

//como acceder a los valores del array en su posicion

console.log(arr[3]);
console.log(arr[0]);

//introducirle valores a un arreglo
//los siguientes metodos mutan los valores del array
arr.push("al final", "mas luego");
console.log(arr);
arr.unshift("al inicio");
console.log(arr)

//metodos para eliminar valores de un array
//elimina valor al final
arr.pop();
console.log(arr);
//elimina valor al inicio
arr.shift();
console.log(arr);

//metodo para modificar, agregar, o eliminar valores de array
//.splice(x,y,z);
let arr2 =[1,2,3,4,5,6];
//eliminar valores de array
arr2.splice(2, 1)
console.log(arr2);
//agrega valores en cierta posicion
arr2.splice(3, 0 , "camilo")
console.log(arr2);
//modificar valores en cierta posicion
arr2.splice(3, 1 , 10)
console.log(arr2);
//Unir listas concat()
const lista1 = ["hola", 2, 3, false]
const lista2 = ["mundo", 4, 5, undefined]

console.log(lista1.concat(lista2));

const lista3 = lista1.concat(lista2);
console.log(lista3);

//unir dos listas con factor de propagacion
console.log(...lista3);

const lista4 = [...lista1,...lista2];
console.log(lista4);

//Error mal uso de propagacion es no poner los ... puntos
//Unir listas concat()
const lista5 = ["hola", 2, 3, false]
const lista6 = ["mundo", 4, 5, undefined]

console.log(lista1.concat(lista2));

const lista7 = lista5.concat(lista6);
console.log(lista7);

//unir dos listas con factor de propagacion
console.log(...lista7);

const lista8 = [...lista5,...lista6];
console.log(lista8);

//Error mal uso de propagacion es no poner los ... puntos
//Como obtener una lista a partir de otra
const array = ["hola", 1,2,3, true,null];
//SLICE NO MODIFICA EL ARRAY ORIGINAL
console.log(array.slice(1,4));
const array2 =array.slice(2,5);
console.log(array2);
const array3=array.slice(2, -2)
console.log(array3);