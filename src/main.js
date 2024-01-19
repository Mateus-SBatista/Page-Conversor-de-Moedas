function converterDolar() {
    var valorElemento1 = document.getElementById("valor");
    var valor = valorElemento1.value;
    var valorNumDolar = parseFloat(valor);
  
    var valorReal = valorNumDolar * 4.92;
    console.log(valorReal);
  
    var dolarConvertido = document.getElementById("valorConvertidoDolar");
  
    var valorConvertido = "Seu valor em Real em Dolar agora é R$ " + valorReal.toFixed(2);
  
    dolarConvertido.innerHTML = valorConvertido;
}

function converterEuro() {
    var valorElemento2 = document.getElementById("valor");
    var valor = valorElemento2.value;
    var valorNumEuro = parseFloat(valor);
  
    var valorReal2 = valorNumEuro * 5.36;
    console.log(valorReal2);
  
    var euroConvertido = document.getElementById("valorConvertidoEuro");
  
    var valorEuroConvertido = "Seu valor em Real em Euro agora é R$ " + valorReal2.toFixed(2);
  
    euroConvertido.innerHTML = valorEuroConvertido;
}

function converterBitcoin() {
    var valorElemento3 = document.getElementById("valor");
    var valor = valorElemento3.value;
    var valorNumBc = parseFloat(valor);
  
    var valorReal3 = valorNumBc * 202.453;
    console.log(valorReal3);
  
    var bcConvertido = document.getElementById("valorConvertidoBitcoin");
  
    var valorBcConvertido = "Seu valor em Real em Bitcoin agora é R$ " + valorReal3.toFixed(2);
  
    bcConvertido.innerHTML = valorBcConvertido;
}
