async function resolvePromise(){        //Função async = assincrona
    const myPromise = new Promise((resolve, reject) => {
        window.setTimeout(() => {
            resolve('Resolvido');
        }, 2000);
    });

    await myPromise   //Sempre que precisar do resultado da promise usar "await"
        .then((result) => result + 'Passando pelo then')
        .then((result) => result + 'E agora acabou')
        .catch((err) => console.log(err.message));

    return resolved;
    await resolvePromise();
    }