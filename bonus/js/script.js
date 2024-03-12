// Chiedi un numero di 4 cifre all’utente e calcola la somma di tutte le cifre che compongono il numero 

// btn preso da html 
const btn = document.querySelector('#btn')

// posto dove visualizzare il risultato nell'html
const visualResult = document.querySelector('#result')

// ciclare il numero attraverso il click
btn.addEventListener('click', function() {
    // chiedere un numero a 4 cifre 
    let userNum = document.querySelector('#user-num').value;
    let sum = 0;
    for (let i = 0; i < userNum.length; i++) {
        sum += parseInt(userNum[i]);
    }
    visualResult.innerHTML += sum;
});