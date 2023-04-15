//Listas sort() -> Metodo que modifica el array
const arr =[2,5,9,15,1,2,0,4];

console.log(arr)

//organiza arreglo por indice
arr.sort((a, b ) => {
    if(a < b){
        return -1;
    } else if(a > b){
        return +1;
    }else {
        return 0;
    }
});
 
console.log(arr)

//Ordenar solo array numericos 

const arrayNumeric = [4,1,2,5,8,9,10,25]
//con inverso b- a saldria de mayor a menor
arrayNumeric.sort((a,b) => a - b);
console.log(arrayNumeric)

///Ordenar lista de objetos 
const listaObjetos = [
    {nombre: "camilo", edad: 31},
    {nombre: "David", edad: 70},
    {nombre: "Diana", edad: 32},
    {nombre: "Lucia", edad: 63},
    {nombre: "Carmensita", edad: 56},
]

listaObjetos.sort((a,b) => a.edad - b.edad)
console.log(listaObjetos)