/* 
L'utente indica un livello di difficoltà in base al quale viene generata una griglia 
di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:

con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49

Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.
*/


document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault();

    const level = document.getElementById('level').value
    console.log(level);

    if (level == 'facile') {

        generateGrid('.cells', 'div', 'cell', 100, 10) 

    } else if (level == 'medio') {

        generateGrid('.cells', 'div', 'cell', 81, 9)  

    } else if (level == 'difficile') {

        generateGrid('.cells', 'div', 'cell', 49, 7) 

    }

    color()

});


//creo una funzione generica che mi serve per creare le varie griglie
function generateGrid(selector, tag_name, class_name, limit, cols_number) {
    const cellsElement = document.querySelector(selector)
    cellsElement.innerHTML = '';
    for (let i = 1; i <= limit; i++) {
        const cellItem = document.createElement(tag_name);
        cellItem.classList.add(class_name);

        // larghezza delle celle nel css dinamica
        cellItem.style.width = `calc(100% / ${cols_number})`

        cellItem.innerHTML = i;
        cellsElement.append(cellItem)
    }
};

    




// funzione colore azzurro
function color() {
//selezionare tutte le celle
   const cells = document.querySelectorAll('.cell');
   console.log(cells);

//ciclare gli elementi della dom
   for (let i = 0; i < cells.length; i++) {
       const cellElement = cells[i];

// event listener
    cellElement.addEventListener('click', function() {
        //console.log(this);
        //colorare la cella
        this.style.backgroundColor = 'cornflowerBlue'

    });
       
   }
};


/* 
Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe
I numeri nella lista delle bombe non possono essere duplicati.

In seguito l'utente clicca su una cella:
-se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba
-la cella si colora di rosso e la partita termina,
-altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.

La partita termina quando:
-il giocatore clicca su una bomba
-o raggiunge il numero massimo possibile di numeri consentiti.

Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che 
l’utente ha cliccato su una cella che non era una bomba.
*/

// prendere la funzione che genera i numeri casuali
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

// generare 16 numeri casuali per fare le bombe

function randomNumbers (number1, number2) {
    const bombe = [];

    for (let i = 0; i < 17; i++) {
        const randomNumber = getRndInteger(number1, number2)

        if (!bombe.includes(randomNumber)) {
            bombe.push(randomNumber)
        }
    }
    console.log(bombe);
    return bombe;       
}






