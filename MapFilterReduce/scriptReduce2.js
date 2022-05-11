const lista = [
    {
        name: 'sabão em pó',
        preco: 30
    },
    {
        name: 'Vinho',
        preco: 40
    },
    {
        name: 'Amendoim',
        preco: 25
    }
]

const saldoDisponivel = 100;

function listaPrecos(saldoDisponivel, lista){
        return lista.reduce(function(prev, current, index){;
        console.log('rodada ', index +1);
        console.log({prev});
        console.log({current});
        return prev - current.preco;
    }, saldoDisponivel);
}

console.log(listaPrecos(saldoDisponivel, lista));