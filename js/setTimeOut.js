function myFunction(){
    alert('Olá turma futuroDev. Hoje infelizmente é nossa última aula.')
}

let pararHora = setInterval(myTimer ,1000);

function myTimer(){
    const date = new Date();
    document.getElementById("hora").innerHTML = date.toLocaleTimeString();
}

myTimer();
