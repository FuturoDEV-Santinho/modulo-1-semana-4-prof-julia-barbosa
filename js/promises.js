// const mypromise = new Promise((resolve, reject) => {
//     const nome = "Augusto";

//     if(nome === 'Augusto'){
//         resolve('usuário Augusto encontrado. Acesso liberado.')
//     } else{
//         reject('usuario Augusto não encontrado.')
//     }  
// })

// mypromise.then((dado) => {
//     console.log(dado);
// })

// const mypromise2 = new Promise((resolve, reject) => {
//     const nome = "Augusto";

//     if(nome === 'Augusto'){
//         resolve('usuário Augusto encontrado. Acesso liberado.')
//     } else{
//         reject('usuario Augusto não encontrado.')
//     }  
// })

// mypromise2.then((dado) => {
//     return dado.toUpperCase();
// })
// .then((dadoModificado) => {
//     console.log(dadoModificado);
// })

const mypromise2 = new Promise((resolve, reject) => {
    const nome = "Augusto";

    if(nome === 'Joao'){
        resolve('usuário Augusto encontrado. Acesso liberado.')
    } else{
        reject('usuario Augusto não foi encontrado.')
    }  
})

mypromise2.then((dado) => {
   console.log(dado);
})
.catch((err) => {
    console.log('aconteceu um erro: ' + err);
})






