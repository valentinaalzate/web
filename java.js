function convertir() {
    var valNum = parseInt(document.getElementById("cantidad").value);
    var moneda = document.getElementById("moneda").value;
    var result = 0;
    if (moneda === "EURO") {
        result = valNum * 4.107,95; // Tasa de cambio de Euro a Peso Colombiano
    } else if (moneda === "DOLAR") {
        result = valNum * 3.827,47; // Tasa de cambio de Dólar a Peso Colombiano
    } else if (moneda === "REAL") {
        result = valNum * 754.47; // Tasa de cambio de Real a Peso Colombiano
    }
    document.getElementById("canti").value = result;

    event.preventDefault();
}
