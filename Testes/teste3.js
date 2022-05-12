// a função gets é implementada dentro do sistema para ler as entradas(inputs) dos dados
// Abaixo segue um exemplo de código que você pode ou não utilizar


function ContDias(dias){

    let totalDeDias = parseInt(dias);

    let qtdAnos, qtdMeses;
    
    qtdAnos = parseInt(totalDeDias / 365);
    totalDeDias= totalDeDias % 365;
    
    qtdMeses= parseInt((totalDeDias % 365) / 30);
    totalDeDias=  (totalDeDias % 30);
    
    let resultado = (qtdAnos + " ano(s) " + '\n' + 
    qtdMeses +" mes(es)" + '\n' +
    totalDeDias + " dia(s)");
    return resultado;
}

//print(resultado);
console.log("Dados de entrada:", '\n',400, '\n',"Saída esperada:");
console.log(ContDias(400), '\n');
console.log("Dados de entrada:", '\n',800, '\n',"Saída esperada:");
console.log(ContDias(800), '\n');
console.log("Dados de entrada:", '\n',30, '\n',"Saída esperada:");
console.log(ContDias(30));





