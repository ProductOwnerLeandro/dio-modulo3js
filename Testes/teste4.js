// a função gets é implementada dentro do sistema para ler as entradas(inputs) dos dados
// Abaixo segue um exemplo de código que você pode ou não utilizar


function ContaDias(dias){

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


console.log(ContaDias(400));
console.log();
console.log();
console.log(ContaDias(800));
console.log();
console.log();
console.log(ContaDias(30));