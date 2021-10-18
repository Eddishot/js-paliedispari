
// creo un prompt per far scegliere un numero all'utente

let userNumber =prompt("inserisci un numero da 1 a 5");


// creo una funziona per generare un unmero random tra 1 e 5
// function numCasuale() {
    // return Math.ceil(Math.random() * 5);
// }


function generateRandomNum (minNumber =1, maxNumber=5){

    const numRandom = Math.floor(Math.random() *(maxNumber - minNumber +1) + minNumber);

    return numRandom
}

// creo una funzione per generare un numero generato e vedere  se è pari o dispari

function pariODispari(number){
    if(number % 2 === 0){
        return `pari`

    }else{
        return `dispari`
    }
}


// creo delle variabili per identificare il numero random generato e una per la sommad

const computerNumber = generateRandomNum (1, 5);
const sum = computerNumber + userNumber;

const result = pariODispari(sum);




if(result === pariODispari){
        alert(`Complimenti hai vinto. Il  tuo numero è ${result} ;  ${sum}`)
}   else{
        alert(`Mi dispaice hai perso. Il  tuo numero è ${result} ;  ${sum}`)
}