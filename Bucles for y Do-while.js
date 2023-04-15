//Bucles FOR

for (let i = 0; i < 10; i++) {
    console.log(i);    
}

let lista = [1,2,3,4,5,6];
for (let i = 0; i < lista.length; i++){
    console.log(lista[i]);
}

//Estructura for of 
for(let valor of lista){
    console.log(valor)
}

//estructura for each
lista.forEach(valor =>{
console.log(valor);
}) 

//Estructura for In

let persona = {
    nombre: "camilo",
    apellido: "ramirez",
    edad: 31,
    isDeveloper: false
}
let prop ="edad";
console.log(persona[prop]);

for(let propiedad in persona){
    console.log(propiedad);
    console.log(persona[propiedad]);

}

//Bucles While
let i=0;
let max=10;
while (i<max) {
    console.log(i);
    i++;
}

i=0;
do {
    console.log("Estoy en do-while");
i++;
}while(i<max);