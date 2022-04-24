var calcular = function() {
    var resultado = "";
    var valorConversao = Number(document.getElementById('valor-conversao').value);
    var s1 = document.getElementById('select-1'); 
    var s2 = document.getElementById('select-2');
    var valor1 = s1.options[s1.selectedIndex].value; 
    var valor2 = s2.options[s2.selectedIndex].value; 


    if (!valorConversao) { 
        resultado = "Insira um valor válido para conversão."

    } else if (valor1 == valor2) { 
        resultado = "Escolha tipos de escala diferentes para conversão."

    } else if (valor1 == "c" && valor2 == "f") { 
        resultado = "Resultado: " + ((valorConversao*1.8)+32).toFixed(2) + " °F"

    } else if (valor1 == "c" && valor2 == "k") { 
        resultado = "Resultado: " + ((valorConversao+273.15)*1.8).toFixed(2) + " K"

    }else if (valor1 == "c" && valor2 == "r") { 
        resultado = "Resultado: " + ((valorConversao*9/5)+491,67).toFixed(2) + " °R"

    }else if (valor1 == "f" && valor2 == "c") { 
        resultado = "Resultado: " + ((valorConversao-32)/1.8).toFixed(2) + " °C"

    } else if (valor1 == "f" && valor2 == "k") { 
        resultado = "Resultado: " + (((valorConversao-32)/1.8)+273.15).toFixed(2) + " K"

    }else if (valor1 == "f" && valor2 == "r") { 
        resultado = "Resultado: " + (valorConversao+ 459.67).toFixed(2) + " °R"

    }else if (valor1 == "k" && valor2 == "c") { 
        resultado = "Resultado: " + (valorConversao-273.15).toFixed(2) + " °C"

    } else if (valor1 == "k" && valor2 == "f") { 
        resultado = "Resultado: " + (((valorConversao-273.15)*1.8)+32).toFixed(2) + " °F"

    }else if (valor1 == "k" && valor2 == "r") { 
        resultado = "Resultado: " + (valorConversao*1.8).toFixed(2) + " °R"
    
    }else if (valor1 == "r" && valor2 == "c") { 
        resultado = "Resultado: " + ((valorConversao/8)-273.15).toFixed(2) + " °C"
    
    }else if (valor1 == "r" && valor2 == "f") { 
        resultado = "Resultado: " + (valorConversao - 459.67).toFixed(2) + " °F"
    
    }else if (valor1 == "r" && valor2 == "k") {
        resultado = "Resultado: " + (valorConversao/1.8).toFixed(2) + " K"
    
    }

   
    document.getElementById('resultado').innerHTML = resultado;
};