// L'utente inserisce un numero nel prompt, se è pari stampa il numero,se è dispari stampa il numero successivo

// chiedere all'utente 1 numero 
const userNum = parseInt(prompt('inserisci un numero'))

// creare una condizione dove se è pari stampa il numero in consol se e dispari stampa in consol il numero succesivo 
if (userNum % 2 !== 0){
    console.log(userNum + 1)
}else{
    console.log(userNum)
}
