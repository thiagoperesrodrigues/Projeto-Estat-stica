function calcula(){


    // Dados
    var nomeVar = Text(document.getElementById("nomeVar").value)
    var textoDados = Text(document.getElementById("textoDados").value)

    //Tipo de variável 1
    var nominal = Radio(document.getElementById("nominal").value)
    var ordinal = Radio(document.getElementById("ordinal").value)
    var discreta = Radio(document.getElementById("discreta").value)
    var continua = Radio(document.getElementById("continua").value)

    // Tipo de variável 2
    var amostra = Radio(document.getElementById("amostra").value)
    var populacao = Radio(document.getElementById("populacao").value)

    // Processamento

    var estatistic = //preencher com as fórmulas

    // Saída

    document.getElementById("estatistic").innerHTML = estatistic

}