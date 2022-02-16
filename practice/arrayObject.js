const beers = [
  {
    name: "Heineken",
    price: 4.5,
    alcohol: 8,
  },
  {
    name: "Stella Artois",
    price: 5.5,
    alcohol: 5.0,
  },
  {
    name: "Corona",
    price: 2.5,
    alcohol: 4.5,
  },
  {
    name: "Budweiser",
    price: 6,
    alcohol: 4.5,
  },
];

// SORT (MUTABLE)
const num = [2, 4, 51, 2, 66];
num.sort();
// ORDENANDO ARRAY POR MEDIO DE LA PROPIEDAD NAME
beers.sort((a, b) => {
  if (a.name < b.name) {
    return -1;
  }
  if (a.name > b.name) {
    return 1;
  }
  return 0;
});

// FOREACH
beers.forEach((element, index) => {
  // console.log(element);
  // console.log(`Index : ${index}`);
});

// FIND
let menosOchoGrados = beers.find((element) => element.alcohol < 8);
console.log(menosOchoGrados);

// FILTER: es igual a FIND pero evalua todos los elementos
let menosOchoGradosALL = beers.filter((element) => element.alcohol < 8);
console.log(menosOchoGradosALL);

// EVERY: Evalua todos los elementos del arreglo dada una condición, si uno solo no cumple ya regresa false
let fn = (e) => e.price > 0; // TODAS VALEN MAS DE 0?
console.log(beers.every(fn));

// SOME: Lo contrario de EVERY

// REVERSE: Invierte el arreglo

// MAP: crea una nueva coleccion a partir de la coleccion de origen, recorre todo el array y puedes cambiar un elemento. o sea es un metodo INMUTABLE
const beers2 = beers.map((element) => {
  return {
    name: element.name,
    price: element.price * 2,
    alcohol: element.alcohol,
  };
});
// HELPERS
showDom("array1", beers);
showDom("array2", beers2);

function show(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

function showDom(element, arr) {
  document.getElementById(element).innerHTML = "";
  for (let e of arr) {
    document.getElementById(
      element
    ).innerHTML += `<div>${e.name} $ ${e.price} (${e.alcohol})</div>`;
  }
}
