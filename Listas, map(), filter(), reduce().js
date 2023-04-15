//Listas .map(), filter(), reduce()
const array = ["Pasto", "villagarzon", "mocoa", "florencia"];
array.forEach((v) => {
  console.log(v);
});

//ponerle numeracion al arreglo
const array2 = array.map((valor, indice) => {
  return `${indice + 1} - ${valor}`;
});

//crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos
const array2o2 = array.map((valor, indice) => `${indice+1} - ${valor}`)
console.log('array2 :>> ', array2);

const listaObjetos = [
    { nombre: "camilo", edad: 31 },
    { nombre: "Diana", edad: 32 },
    { nombre: "Lucia", edad: 63 },
    { nombre: "Carmensita", edad: 56 },
  ];
  
  //Si quiero OBTENER UNA SERIE DE OBJETOS CON CIERTOS FILTROS
  const pplMayores = listaObjetos.filter((obj) => {
    if (obj.edad > 50) {
      return true;
    } else {
      return false;
    }
  });
  
  //Una forma mas efectiva que tambien devuelve true o false si cumple es:
  const pplMenor = listaObjetos.filter((obj) => obj.edad < 50);
  console.log(pplMenor);
  
  const nuevaLista = listaObjetos.filter((obj) => obj.nombre !== "Carmensita");
  console.log(nuevaLista);

  //Obtener un valor a partir de una lista
  const valores = [3,56,23,5,90,100];
  const suma = valores.reduce((acumulado, cur, i, arrOriginal) =>{
    console.log(acumulado);
    console.log(cur);
    console.log(i);
    console.log(arrOriginal)
    return acumulado+cur;
  })
  console.log(suma);