//Casos muy espesificos break, continue

let lista = [1, 2, 3, 4, 5, 6, 7, 8];

for (let i = 0; i < lista.length; i++) {
  if (lista[i] === 3) {
    continue;
  }
  console.log(lista[i]);
  if (lista[i] > 5) {
    break;
  }
}

//Ambitos de un bucle
let unidades = 0;
let decenas = 0;

blucleDecenas: while (true) {
  bucleUnidades: while (true) {
    console.log("El numero es:"+ decenas+unidades);
    unidades++;
    if (unidades === 10) {
      unidades = 0;
      break; bucleUnidades
    }
  }
  decenas++;
  if(decenas===2){
    console.log("El numero es:"+ decenas+unidades);
    break;
  }
}
