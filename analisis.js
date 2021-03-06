// FUNCIONES HELPERS

function esPar(numero) {
  return numero % 2 === 0;
}

function calcularMediaAritmetica(lista) {
  const sumaLista = lista.reduce(function (valorAcumulado = 0, nuevoElemento) {
    return valorAcumulado + nuevoElemento;
  });
  const promedioLista = sumaLista / lista.length;
  return promedioLista;
}
// CALCULADORA DE MEDIANA

function medianaSalarios(lista) {
  const mitad = parseInt(lista.length / 2);

  if (esPar(lista.length)) {
    const personaMitad1 = lista[mitad - 1];
    const personaMitad2 = lista[mitad];

    const mediana = calcularMediaAritmetica([personaMitad1, personaMitad2]);

    return mediana;
  } else {
    const personaMitad = lista[mitad];
    return personaMitad;
  }
}

// MEDIANA GENERAL
const salaryPropertyOfChileList = chile.map((personita) => {
  return personita.salary;
});

const salariesChileSorted = salaryPropertyOfChileList.sort(
  (salaryA, salaryB) => {
    return salaryA - salaryB;
  }
);

const medianaGeneralChile = medianaSalarios(salariesChileSorted);

// MEDIANA TOP 10 %
const spliceStart = (salariesChileSorted.length * 90) / 100;
const spliceCount = salariesChileSorted.length - spliceStart;

const salariosChileTop10 = salariesChileSorted.splice(spliceStart, spliceCount);

const medianaTop10Chile = medianaSalarios(salariosChileTop10);

console.log({
  medianaGeneralChile,
  medianaTop10Chile,
});
