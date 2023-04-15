//Comparaciones 



//Igualdad
// == compara solo el valor
// === compara valor y el tipo

let a = 5;
console.log(typeof a);
let b = "5";
console.log(typeof b);
let c = 4;
let d = "4";

if (a == b ) {
    console.log("Son iguales");
    
}
if (a === b ){
    console.log("son iguales fuerte");
}

if (c != d) {
    console.log("Son Diferentes debil")
}
if (c !== d) {
    console.log("Son Diferentes en valor y tipo")
}

let max = 10;
let min = 5;

if (max > min) {
    console.log("Es mayor que min");
}
if (max >= min) {
    console.log("Es mayor  e igual que min");
}