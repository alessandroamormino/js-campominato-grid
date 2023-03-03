// Consegna
// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

// Bonus
// Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
// - con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
// - con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
// - con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;


// PSEUDOCODICE

/*

x seleziono il bottone dal DOM e lo memorizzo in una variabile
x seleziono il contenutore della mia griglia dal DOM e lo memorizzo in una variabile
- AL CLICK del bottone: 
    x Creo 100 <div>
    x Assegno una classe .square ad ogni elemento creato
    x Assegno ad ogni <div> un numero progressivo da 1 a 100
    x Appendo ogni <div> al contenitore letto dal DOM
    
    - AL CLICK della cella: 
        x assegno all'elemento una classe che la colorerà di azzurro 
        x stampo in console il numero della cella cliccata

*/


// CODE


// - seleziono il bottone dal DOM e lo memorizzo in una variabile
const btnGenerateEl = document.getElementById('generate-grid');

// - seleziono il contenutore della mia griglia dal DOM e lo memorizzo in una variabile
const gridContainerEl = document.getElementById('grid-container');

// - AL CLICK del bottone: 

btnGenerateEl.addEventListener('click', function(){
    // inizializzo un contatore per il mio ciclo
    let i = 0;

    while(i<100){
        // memorizzo una variabile contatore
        let count = i;

        // - Creo 100 <div> 
        let newDivEl = document.createElement('div');

        // - Assegno una classe .square ad ogni elemento creato
        newDivEl.classList.add('square');
        
        // - Assegno ad ogni <div> un numero progressivo da 1 a 100
        newDivEl.innerText = i+1;
        
        // - AL CLICK della cella:
        newDivEl.addEventListener('click', function(){
            // - assegno all'elemento una classe che la colorerà di azzurro 
            newDivEl.classList.toggle('light-blue');

            // - stampo in console il numero della cella cliccata
            console.log(`Hai cliccato la cella n. ${count+1}`);
        });


        // - Appendo ogni <div> al contenitore letto dal DOM
        gridContainerEl.append(newDivEl);

        // aggiorno il contatore per uscire dal loop
        i++;
    }
});