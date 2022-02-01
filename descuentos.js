const coupons = ["descuento50", "descuento25", "descuento10", "descuento5"];

// CODIGO CON DESCUENTO FIJO
function calcularPrecioConDescuento(precio, descuento) {
  const porcentajePrecioConDescuento = 100 - descuento;
  const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
  return precioConDescuento;
}

function onClickButtonPriceDiscount() {
  const inputPrice = document.getElementById("inputPrice");
  const inputPriceValue = inputPrice.value;
  const inputDiscount = document.getElementById("inputDiscount");
  const inputDiscountValue = inputDiscount.value;

  const precioConDescuento = calcularPrecioConDescuento(
    inputPriceValue,
    inputDiscountValue
  );
  const resultP = document.getElementById("ResultP");
  resultP.innerHTML = `El precio con descuento es: $${precioConDescuento}`;
}
