// L’utente inserisce due parole in successione, con due prompt.Il software stampa prima la parola più corta, poi la parola più lunga.

// far inserire 2 parole all'utente
let wordsOne = prompt('scrivi una qualsiasi parola')
console.log(wordsOne)

let wordsTwo = prompt("scrivi un'altra parola")
console.log(wordsTwo)

// scrivere una condizione per dire che se è piu unga la parola allora la stampoin consol sennò stampo l'atra
if(wordsOne.length > wordsTwo.length){
    console.log('la parola piu lunga è: ', wordsOne)
}else{
    console.log('la parola piu lunga è: ', wordsTwo)

}