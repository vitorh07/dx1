function palavras(){
    var palavraA = document.getElementById('palavraA').value;
    var palavraB = document.getElementById('palavraB').value;
    const texto = document.querySelector("h3");

    if(palavraA.length > palavraB.length && palavraA.length < 20) {
        texto.innerHTML = "A";
    } else if(palavraB.length > palavraA.length && palavraB.length < 20) {
        texto.innerHTML = "B";
    }
    else {
        texto.innerHTML = "Algo deu errado, tente novamente."
    }
}