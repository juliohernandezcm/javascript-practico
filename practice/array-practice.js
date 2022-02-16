let beers = ["erdiner", "delirium", "budweiser", "budlight"];
let wines = ["Chardonnay", "merlot", "cabernet"];

// ---------------- METODOS -------------- //

// -----------------MUTABLES -------------//

//push: agrega elemento al final
beers.push("heineken");

// unshift: agrega elemento al principio
beers.unshift("Modelo Especial");

// splice: agrega un elemento en donde quieras, el primer numero es el index donde sera insertado, el segundo cuanto quieres eliminara partir del index insertado
beers.splice(2, 0, "corona");

//POP: Elimina y retorna el elemento ultimo
let b = beers.pop();
console.log(b);

//shift: Elimina y retorna el elemento primero
let b2 = beers.shift();
console.log(b2);

// FILL: llena el array con elementos que nosostros le indiquemos, el primer parametro es el elemento, el segundo desde cual index y el tercero hasta donde

//beers.fill("pato", 0, beers.length);

// -----------------INMUTABLES -------------//

// CONCAT: Concatena dos arrays y deja los originales como estan
let alcoholicDriks = beers.concat(wines);
alcoholicDriks.push("Carmenere");

//SLICE: Crea un array nuevo a partir de uno ya existente, el primer valor indica desde cual elemento sera creado y el segundo donde hace el corte (sin incluirlo, aqui obvia el elemento 2 del array)
const beers2 = beers.slice(0, 2);

// OPERADOR SPREAD (...)
let numbers = [1, 2, 3, 4];

function sum(a, b, c, d) {
  return a + b + c + d;
}
console.log(sum(...numbers));

// HACIENDO COPIA DE MI ARRAY NUMBERS
// const numbers2 = numbers; ASI NO SE HACE
const numbers2 = [...numbers]; // ASI SI

// HELPERS
show(beers);
showDom("array1", numbers);
showDom("array2", numbers2);

function show(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
  }
}

function showDom(element, arr) {
  document.getElementById(element).innerHTML = "";

  for (let i = 0; i < arr.length; i++) {
    document.getElementById(element).innerHTML += `<div>${arr[i]}<div>`;
  }
}
