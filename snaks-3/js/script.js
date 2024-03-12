// Crea due tag div con due id diversi:
// un div avrà il testo colorato di rosso mentre l’altro di verde.
// Partendo da un array di numeri, stampiamo nell’id rosso i numeri dispari e in verde i numeri pari.


// creare array di numeri casuali
const numCasual = [1,4,77,44,76,45,65,87,3,42,12,98,6,34]

// creo 2 variabili che prendono ul selezionato 
let greenEven = document.querySelector('#even')
console.log(greenEven)
let redShots = document.querySelector('#shots')
console.log(redShots)



// creare ciclo for per lavorare con ogni singolo elemento 
for (let i = 0 ; i < numCasual.length ; i++){
    let numEvenShots = numCasual[i]
    // console.log(numEvenShots)
    
    // creare condizione se è pari finisce nel quadrato verde senno nel rosso 
    if(numEvenShots % 2 === 0){
        // creo una variabile per creare un elemento li con dentro un numero pari 
        const list = `<li>${numEvenShots}</li>`
        // aggiungo l'elementi li dentro ul 
        greenEven.innerHTML += list;
       
    }else{
        // creo una variabile per creare un elemento li con dentro un numero dispari
        const list = `<li>${numEvenShots}</li>`
        // aggiungo l'elementi li dentro ul
        redShots.innerHTML += list;
    }

   

}  
