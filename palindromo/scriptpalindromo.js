// creo una variabile prompt in cui chiedo all'utente di inserire una parola

let utentWord = prompt("Inserisci una qui una parola");


// creo una variabile per la parola invertita

let reverseWord = reverseTheWord(utentWord);


// creo una funziona per far invertire la parola


function reverseTheWord(str) {
    let reverseWordArr = str.split("").reverse().join("");
    console.log(str.split("").reverse().join(""))
    return reverseWordArr;
}


// creo un if per fare la comparazione

if(utentWord===reverseWord){

    alert("Complimenti la tua parola è palindroma")

}else{
    alert("Mi dispiace la parola non è palindroma")
}