//iterar valores de una lista
const array = ["hola", 2, 5, 90, undefined]
//forma antigua ya casi no se utiliza
for (let i = 0; i < array.length; i++) {
    console.log(array[i])
    }

//forma moderna y actualizada ES6
let arrayNum = [1,3,5,7,10];
let suma= 0;
arrayNum.forEach(valor =>{
    suma +=valor;
    console.log(valor)
})
console.log('suma :>> ', suma);

//Buscar un valor dentro de una lista .find()
let varri = array.find(valor =>{
    if (valor == 90){
        return true;
    }
})
console.log(varri);

const listaObjetos = [
    {nombre: "camilo", edad: 31},
    {nombre: "Diana", edad: 32},
    {nombre: "Lucia", edad: 63},
    {nombre: "Carmensita", edad: 56},
]


const objeto = listaObjetos.find(o =>{
    if (o.nombre === "camilo"){
        return true;
    }
})
console.log(objeto);


const objeto2 = listaObjetos.find(o => o.nombre == "camilo")
    console.log(objeto2);

    
const {edad} = listaObjetos.find(o => o.nombre === "Diana")
console.log('edad :>> ', edad);

