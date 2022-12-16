function primeiraFuncao(){
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('esperou isso aqui acontecer');
            resolve()
        }, 5000);
    })
}

async function segundaFuncao(){
    console.log('iniciou');

    await primeiraFuncao()

    console.log('depois terminou :(');
}

segundaFuncao();


function getUser(){
    return fetch(`https://api.github.com/users/manishiva`)
    .then((data) => data.json())
    .then(json => console.log(json))
    .catch((err) => console.log('aconteceu algo errado ' + err))
}

async function exibirUserName(){
    try {
        const user = await getUser()
        console.log(`o nome de usuario é:${user}`)
    } catch (error) {
        console.log('erro na requisição');
    }
}

exibirUserName()

