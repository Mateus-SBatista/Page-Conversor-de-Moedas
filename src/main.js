function converterDolar() {
    var valorElemento1 = document.getElementById("valor");
    var valor = valorElemento1.value;
    var valorNumDolar = parseFloat(valor);
  
    var valorReal = valorNumDolar * 4.97;
    console.log(valorReal);
  
    var dolarConvertido = document.getElementById("valorConvertido");
  
    var valorConvertido = "Seu valor de Dolar em Real agora é R$ =" + valorReal;
  
    dolarConvertido.innerHTML = valorConvertido;
  }
  
  function converterEuro() {
    var valorElemento2 = document.getElementById("valor");
    var valor = valorElemento2.value;
    var valorNumEuro = parseFloat(valor);
  
    var valorReal2 = valorNumEuro * 5.38;
    console.log(valorReal2);
  
    var euroConvertido = document.getElementById("valorConvertido");
  
    var valorEuroConvertido = "Seu valor Euro em Real agora é R$ =" + valorReal2;
  
    euroConvertido.innerHTML = valorEuroConvertido;
  }
  
  function converterBitcoin() {
    var valorElemento3 = document.getElementById("valor");
    var valor = valorElemento3.value;
    var valorNumBc = parseFloat(valor);
  
    var valorReal3 = valorNumBc * 195.957;
    console.log(valorReal3);
  
    var bcConvertido = document.getElementById("valorConvertido");
  
    var valorBcConvertido = "Seu valor Bitcoin em Real agora é R$ =" + valorReal3;
  
    bcConvertido.innerHTML = valorBcConvertido;
  }
