/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/


// ESERCIZIO 1
/*
il ciclo stampa tutti i valori assunti da i.
è logicamente errato in quanto la condizione di partenza non viene rispettata.

for (let i = 0; i > 5; i++) {
    console.log(i);
}    
*/

for (let i = 0; i < 5; i++) {
    console.log(i);
}

// ESERCIZIO 2
/*
se il numero è pari. somma 5 e ritorna il risultato.
= 0 rappresenta un'assegnazione. un confronto richiede doppio o triplo zero a seconda del livello di confronto.
function addIfEven(num) {
    if (num % 2 = 0) {
        return num + 5;
    }
    return num;
}    
*/

function addIfEven(num) {
    if (num % 2 == 0) {
        return num + 5;
    }
    return num;
}

// ESERCIZIO 3
/*
il ciclo stampa tutti i valori assunti da i.
la sintassi è errata, va usato il ";"
function loopToFive() {
    for (let i = 0, i < 5, i++) {
        console.log(i);
    }
}
*/

function loopToFive() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }
}

// ESERCIZIO 4 (suggerimento: ci sono 7 errori)
/*
la funzione vuole restituire un array con i soli numeri pari fra quelli contenuti in un array dato.
function displayEvenNumbers() {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    let evenNumbers = [];
    for (let i = 0; i < numbers.length - 1; i++;) {
        if (numbers % 2 = 0); {
            evenNumbers.push(i);
        }
        return evenNumbers;
    }
}
displayEvenNumbers(); // dovrebbe restituire [2,4,6,8]
*/

function displayEvenNumbers() {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    let evenNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            evenNumbers.push(numbers[i]);
        }        
    }
    console.log(evenNumbers);
    return evenNumbers;    
}
displayEvenNumbers();