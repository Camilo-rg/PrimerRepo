//Sets o conjuntos
const arr = [1,2,3,4,5,6,1,5, 'hola']

//set -> un conjunto no ordenado de valores o elementos unicos
const miSet = new Set(arr)

console.log(arr)
//Los sets no dejan almancenar valores iguales
console.log(miSet)

//agregar valores en nuestro set
miSet.add(12)
console.log(miSet)

//borrar valores en Set
miSet.delete(2)
console.log(miSet)

//borrar todo
//miSet.clear()
//console.log(miSet)

//Sabeer si set contiene algo
console.log(miSet.has(6))

//Conocer el tamaño del set
console.log(miSet.size)

//Hacer la iteracion
miSet.forEach(valor => {
    console.log(valor)
});