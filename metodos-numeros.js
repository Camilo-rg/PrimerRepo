//numeros

let a = 3.5;
let b = 4.8;

console.log(b+a)
//truco para redondear
console.log(Math.round((b+a)*100)/100)

//Operacion aritmeticas
console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(a/b)
console.log(typeof a)
let a_s = a.toString();
console.log(a_s);
console.log(typeof a_s)

//redondeo
let c=3.3;
let d = c*3;
console.log(d)

//cantidad de decimales a mostrar, convirtiendo a string
console.log(d.toFixed(3));

//limita el numero significativo de cifras
console.log(d.toPrecision(7));
