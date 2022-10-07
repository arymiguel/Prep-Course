// Do not change any of the function names

function mayuscula(nombre) {
  //La función recibe un nombre y debe devolver el mismo que recibe pero con su primer letra en mayúscula
  //ej: Recibe "mario" ----> Devuelve "Mario"
  //Tu código:
  var resto= nombre.slice(1);
  var primera = nombre[0].toUpperCase();
  return primera+resto;

}

function invocarCallback(cb) {
  // Invoca al callback `cb`
  //Tu código:
  function holis(cb){
    return cb();
  }
  holis(cb);
}

function operacionMatematica(n1, n2, cb) {
  //Vamos a recibir una función que realiza una operación matemática como callback junto con dos números.
  //Devolver el callback pasándole como argumentos los números recibidos.
  //Tu código:
  function operacion(n1,n2,cb){
    return cb(n1,n2);
  };
  operacion(n1,n2,cb)
}

function sumarArray(numeros, cb) {
  // Suma todos los números enteros (int/integers) de un array ("numeros")
  // Pasa el resultado a `cb`
  // No es necesario devolver nada
  //Tu código:
  var suma = numeros.reduce(function (acc,num) {
    return acc + num;
  });
  function resultado (cb){
    return cb(suma);
  }
  resultado(cb);
}

function forEach(array, cb) {
  // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
  // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
  //Tu código:
  array.forEach(function (elemento){
    cb(elemento);
  })

}

function map(array, cb) {
  // Crea un nuevo array
  // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
  // El nuevo array debe tener la misma longitud que el array del argumento
  //Tu código:
  array.forEach(function (elemento){
    cb(elemento);
  })
  var arr=array.map(cb);
  return arr;

}

function filter(array) {
  //Filtrar todos los elementos del array que comiencen con la letra "a".
  //Devolver un nuevo array con los elementos que cumplen la condición
  //Tu código:
  var arr=[];
  array.forEach(function(elemento){
    if (elemento[0]==='a'){
      arr.push(elemento);
    }
  });
  return arr;
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
