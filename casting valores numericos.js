//Operador ValueOf. obtener valores numericos a partir de literales
let a = 2;
let b = new Number(3);
console.log(a+b);

console.log(b.valueOf());

//NaN (not a number) - infinity
let n = Number('adios');
console.log(n);

let numerados = 10;
let divisor = 0;

console.log(numerados/divisor)

//convertir string a valor numericos
let num = '5.9'
let num2 = 17.2;

console.log(Number(num)+num2);
console.log(parseInt(num));
console.log(parseFloat(num));

//Numeros hexadecimales
let hex = '0x43f91';
console.log(parseInt(hex));

//obtener valor maximo y minimo
let min_presicion = Number.EPSILON;
let min_valor_js = Number.MIN_VALUE;
let max_valor_js = Number.MAX_VALUE;

console.log(min_presicion);
console.log(min_valor_js);
console.log(max_valor_js);

//para elevar se pone dos astericos
console.log(2 ** 5)