let name = "camilo";
let text = `saludos ${name}`;

console.log(text)

let libros =["unos", "unas"];

//Metodos utilizados con cadenas de string

//como obtener la longitud de un string

let str = "hola soy un string";

console.log(str.length);

//Obtener partes del string
//slice(), substring(), substr()
let slice_txt = str.slice(0, 10);
console.log(slice_txt);

let substr_txt = str.substring(5, 10)
console.log(substr_txt)

let subst_txt = str.substr(5,10); //Este esta obsoleto,  ya no se usa
console.log(subst_txt)

//Remplazar parte del texto
let cadena = "Hola mi nombre es camilo";
console.log(cadena.replace('camilo', 'david'));
let textotes ="Recuerde el alma dormida, Avive el seso y despierte Contemplando, Cómo se pasa la vida Cómo se viene la muerte, Tan callando"
console.log(textotes.replace('el', 'teti'));

//al utilizar la expresion /g (global) remplaza todas las intancias palabras a cambiar
console.log(textotes.replace(/el/g, 'teti'));

//pasar a mayus y minus
let sig ="Leo";
let sig2 = "lEo";
console.log(sig.toLowerCase())
console.log(sig.toUpperCase())

//formas de concatenar cadenas de caracteres
let str1 ="Primera cadena";
let str2 ="segunda cadena";

console.log(str1.concat(" ",str2));
console.log(`${str1} ${str2}`);

//eliminar espacios texto
let str3 ="  soy texto con espacios ini y fina.   ";
 console.log(str3.length);

console.log(str3.trim().length); //corta todos espacios
console.log(str3.trimStart().length);//corta espacio al inicio
console.log(str3.trimEnd().length);//corta espacio al final

//Obtener un caracter de una cadena
let str4 ="hola string numer 4";

console.log(str4.charAt(6));
console.log(str4[6]);

//obtener la posicion de una palabra dentro de cadena
let str5 = "Probando posicion de palabra en posicion";
console.log(str5.indexOf("posicion"));//devuelve la primera parte donde este la palabra
console.log(str5.charAt(2));
console.log(str5.lastIndexOf("posicion"))//devuelve la ultima parte donde se encuenta esta palabra

//Metodos de cadena de  textos
let textotes2 ="Recuerde el alma dormida, Avive el seso y despierte Contemplando, Cómo se pasa la vida Cómo se viene la muerte, Tan callando"
//obtener todas las veces que se repite la instancia en el texto
console.log (textotes2.match(/la/g));

//verificar si el texto contiene cierta palabra, devuelve boolean
console.log(textotes2.includes("vida"));

//si texto empieza por una palabra
console.log(textotes2.startsWith("Recuerde"));
//si texto temrina por una palabra
console.log(textotes2.endsWith("callando"));