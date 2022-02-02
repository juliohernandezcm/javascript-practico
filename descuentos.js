const coupons = [
  {
    name: "descuento10",
    discount: 10,
  },
  {
    name: "descuento20",
    discount: 20,
  },
  {
    name: "descuento30",
    discount: 30,
  },
];

function calcularPrecioConDescuento(precio, descuento) {
  const porcentajePrecioConDescuento = 100 - descuento;
  const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
  return precioConDescuento;
}

function getCouponPerc(couponName) {
  const discount = coupons
    .filter((x) => x.name === couponName)
    .map((x) => x.discount);

  return discount;
}

function onClickButtonPriceDiscount() {
  const inputPrice = document.getElementById("inputPrice");
  const inputPriceValue = inputPrice.value;
  const inputDiscount = document.getElementById("inputDiscount");
  const inputDiscountValue = inputDiscount.value;
  const inputCoupon = document.getElementById("inputCoupon");
  const inputCouponValue = inputCoupon.value;

  const precioConDescuento = calcularPrecioConDescuento(
    inputPriceValue,
    inputDiscountValue
  );

  const couponDiscount = getCouponPerc(inputCouponValue);

  const precioConCuponDeDescuento = calcularPrecioConDescuento(
    precioConDescuento,
    couponDiscount
  );

  var resultP = document.getElementById("ResultP");

  if (inputCouponValue != null && couponDiscount == "") {
    alert("Cupón invalido");
  } else {
    resultP.innerHTML = `El precio con descuento es: $${precioConCuponDeDescuento}`;
  }
}
