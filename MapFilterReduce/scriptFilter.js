function filtraPares(arr){
    return arr.filter(callback)
}

function callback(item){
    return item % 2 !== 0;  // '===' Filtra somente os números pares
                            // '!==' Filtra somete os números impares
}

const meuArray = [1,23,55,67,30,2,4,11,26,0,9];

console.log(filtraPares(meuArray));