// Do not change any of the function names

function mayuscula(nombre) {
  //La función recibe un nombre y debe devolver el mismo que recibe pero con su primer letra en mayúscula
  //ej: Recibe "mario" ----> Devuelve "Mario"
  //Tu código:
  //Una forma de hacerlo, pero es muy rebuscado y poco eficiente, pero funciona
  //(lo hice con programación descriptiva).
  // arraychanged = [];
  // nombreMayus = nombre.charAt(0).toUpperCase()
  // arraychanged += nombreMayus;
  // for(let i = 1; i < nombre.length; i ++){
  //   arraychanged += nombre[i]
  // }
  // console.log(arraychanged)
  // return arraychanged;

  //Esta forma es más eficiente con programación imperativa
  // let mayus = [];
  // mayus += nombre.charAt(0).toUpperCase() + nombre.slice(1);
  // console.log(mayus)
  // return mayus;

  //Y esta forma es aún más eficiente con una sola línea de código, sin agregar a un nuevo array; (:
  return nombre.charAt(0).toUpperCase() + nombre.slice(1);
}

function invocarCallback(cb) {
  // Invoca al callback `cb`
  //Tu código:
  cb()
}

function operacionMatematica(n1, n2, cb) {
  //Vamos a recibir una función que realiza una operación matemática como callback junto con dos números.
  //Devolver el callback pasándole como argumentos los números recibidos.
  //Tu código:
  cb(n1, n2);
}

function sumarArray(numeros, cb) {
  // Suma todos los números enteros (int/integers) de un array ("numeros")
  // Pasa el resultado a `cb`
  // No es necesario devolver nada
  //Tu código:
  //Esta es una forma de hacerlo:
  // let acumulador = 0;
  // for(let i = 0; i < numeros.length; i++){
  //   acumulador += numeros[i];
  // }
  // cb(acumulador);

  //Esta es otra forma de hacerlo con el método .forEach

  // let acumalador = 0;
  // numeros.forEach(function(elemento){
  //   acumalador += elemento
  //   console.log('acumulador:', acumalador)
  // })
  // console.log('acumulador:', acumalador)
  // cb(acumalador)

  //Esta es otra forma de hacerlo con el método .reduce
  let sumArray = numeros.reduce(function(acc, elementoActual){
    return acc + elementoActual;
  })
  console.log(sumArray);
  cb(sumArray)

}

function forEach(array, cb) {
  // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
  // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
  //Tu código:

  //Esta sería una explicación por detras(simulando una resultado para que se entienda que es lo que este código:)
  // function cb(num){
  //   return num * 2
  // }
  // const array = [1, 2, 3, 4, 5]

  // for(let i = 0; i < array.length; i ++){
  //   cb(array[i])
  // }

  for(let i = 0; i < array.length; i ++){
    cb(array[i])
  }
}

function map(array, cb) {
  // Crea un nuevo array
  // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
  // El nuevo array debe tener la misma longitud que el array del argumento
  //Tu código:
  let newarray = array.map(function(elemento){
    return cb(elemento)
  })
  return newarray;
}

function filter(array) {
  //Filtrar todos los elementos del array que comiencen con la letra "a".
  //Devolver un nuevo array con los elementos que cumplen la condición
  //Tu código:
  let newArray = array.filter(function(elemento){
    return elemento[0] === "a";
  })
  return newArray;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  mayuscula,
  invocarCallback,
  operacionMatematica,
  sumarArray,
  forEach,
  map,
  filter
};
