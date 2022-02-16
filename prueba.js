let nombre = "Julio";
let apellido = "Hernandez";
let userName = "Julius";
let edad = 34;
let mail = "juliohernandezcm@gmail.com";
let mayorEdad = true;
let dineroAhorrado = 1000;
let deudas = 120;

let nombreCompleto = `Mi nombre completo es: ${nombre} ${apellido}`;
console.log(nombreCompleto);

let dineroReal = dineroAhorrado - deudas;
console.log(dineroReal);

function imprimeNombre(name, lastname, nickname) {
  fullName = name + " " + lastname;
  console.log(
    `Mi nombre es ${fullName}, pero prefiero que me llames ${nickname}`
  );
}

imprimeNombre("Julio", "Hernandez", "Julius");

// const tipoSuscripcion = "Basic";

// if (tipoSuscripcion == "Basic") {
//   console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
// } else if (tipoSuscripcion == "Expert") {
//   console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
// } else if (tipoSuscripcion == "Expert Plus") {
//   console.log(
//     "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"
//   );
// } else if (tipoSuscripcion == "Free") {
//   console.log("Solo puedes tomar los cursos gratis");
// }

let tiposDeSuscripcion = [
  { plan: "Free", mensaje: "Solo puedes tomar los cursos gratis" },
  {
    plan: "Basic",
    mensaje: "Puedes tomar casi todos los cursos de Platzi durante un mes",
  },
  {
    plan: "Expert",
    mensaje: "Puedes tomar casi todos los cursos de Platzi durante un año",
  },
  {
    plan: "Expert Plus",
    mensaje:
      "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año",
  },
];

let tipoSuscripcion = "Basic";

tiposDeSuscripcion.forEach((tiposuscrip) => {
  if (tiposuscrip.plan == tipoSuscripcion) {
    console.log(tiposuscrip.mensaje);
    return 0;
  }
});

let i = 0;
while (i < 5) {
  console.log(`El valor de i es: ${i}`);
  i++;
}

let i = 10;
while (i >= 2) {
  console.log(`El valor de i es: ${i}`);
  i--;
}

let respuesta = 0;
while (respuesta != 4) {
  respuesta = parseInt(prompt("¿Cúanto es 2 + 2"));
  if (respuesta === 4) {
    console.log("Felicitaciones!!!");
  }
}

let frutas = ["Manzana", "Pera", "Uvas", "Mango", "Fresa"];

function array(a) {
  console.log(a[0]);
}

array(frutas);
