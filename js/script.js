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

- seleziono il bottone dal DOM e lo memorizzo in una variabile
- seleziono il contenutore della mia griglia dal DOM e lo memorizzo in una variabile
- AL CLICK del bottone: 
    - Creo 100 <div> 
    - Assegno una classe .square ad ogni elemento creato
    - Appendo ogni <div> al contenitore letto dal DOM
    - Assegno ad ogni <div> un numero progressivo da 1 a 100
    - AL CLICK della cella: 
        - assegno all'elemento una classe che la colorerà di azzurro 
        - stampo in console il numero della cella cliccata

*/