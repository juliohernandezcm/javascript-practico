// Código del cuadrado

function perimetroCuadrado(lado) {
  return lado * 4;
}

function areaCuadrado(lado) {
  return lado * lado;
}

// Código del triángulo

function perimetroTriangulo(ladoA, ladoB, ladoBase) {
  return Number(ladoA) + Number(ladoB) + Number(ladoBase);
}

function areaTriangulo(ladoBase, altura) {
  return (ladoBase * altura) / 2;
}

// Código del Circulo

function diametroCirculo(radio) {
  return radio * 2;
}

// PI
const PI = Math.PI;

// Circunferencia
function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return diametro * PI;
}

// Area
function areaCirculo(radio) {
  return radio * radio * PI;
}
// CODIGO TRIANGULO ISOSCELES
function alturaTriangulo(ladoA, ladoB, ladoBase) {
  if (ladoA === ladoB) {
    return Math.sqrt(ladoA ** 2 - ladoBase ** 2 / 4);
  } else {
    return "Los lados no son de un triangulo isosceles";
  }
}

// Interaccion con el HTML

//Cuadrado
function calcularPerimetroCuadrado() {
  const input = document.getElementById("inputCuadrado");
  const value = input.value;
  const perimetro = perimetroCuadrado(value);
  alert(perimetro);
}

function calcularAreaCuadrado() {
  const input = document.getElementById("inputCuadrado");
  const value = input.value;
  const area = areaCuadrado(value);
  alert(area);
}

// Triangulo
function calcularPerimetroTriangulo() {
  const input1 = document.getElementById("primerLadoTriangulo");
  const value1 = input1.value;
  const input2 = document.getElementById("segundoLadoTriangulo");
  const value2 = input2.value;
  const input3 = document.getElementById("baseTriangulo");
  const value3 = input3.value;
  const perimetro = perimetroTriangulo(value1, value2, value3);
  alert(perimetro);
}

function calcularAreaTriangulo() {
  const input1 = document.getElementById("primerLadoTriangulo");
  const value1 = input1.value;
  const input2 = document.getElementById("segundoLadoTriangulo");
  const value2 = input2.value;
  const input3 = document.getElementById("baseTriangulo");
  const value3 = input3.value;
  const input4 = document.getElementById("alturaTriangulo");
  const value4 = input4.value;
  const area = areaTriangulo(value3, value4);
  alert(area);
}

// Circulo
function calcularDiametroCirculo() {
  const input = document.getElementById("radioCirculo");
  const value = input.value;
  const diametro = diametroCirculo(value);
  alert(diametro);
}

function calcularPerimetroCirculo() {
  const input = document.getElementById("radioCirculo");
  const value = input.value;
  const perimetro = perimetroCirculo(value);
  alert(perimetro);
}

function calcularAreaCirculo() {
  const input = document.getElementById("radioCirculo");
  const value = input.value;
  const area = areaCirculo(value);
  alert(area);
}

function calcularAlturaIsosceles() {
  const ladoA = document.getElementById("primerLadoTrianguloIsosceles");
  const value1 = ladoA.value;
  const ladoB = document.getElementById("segundoLadoTrianguloIsosceles");
  const value2 = ladoB.value;
  const base = document.getElementById("baseTrianguloIsosceles");
  const value3 = base.value;
  const alturaIsosceles = alturaTriangulo(value1, value2, value3);
  alert(alturaIsosceles);
}
