function totales() {
    var numtexto = (document.getElementById("numText").value || 0);
    var segundo = (document.getElementById("numTiempo").value || 0);
    var total = 0;

    if (numtexto != "" || segundo != "") {
        total = (parseFloat(numtexto) / parseFloat(segundo)) * 60;
        document.getElementById("total").innerHTML = "Total de PM es: " + total + " palabras por minuto";
    } else {
        document.getElementById("total").innerHTML = "Total de PM es: " + total + " palabras por minuto";
    }
}

function limpieza() {
    document.getElementById("numText").value = "";
    document.getElementById("numTiempo").value = "";
    document.getElementById("total").innerHTML = "";
}