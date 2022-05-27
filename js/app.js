/*
Generare una griglia di gioco quadrata , 
in cui ogni cella contiene un numero incrementale tra quelli compresi tra 1 e 100
Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro.

- creare griglia di celle quadrate (x =  y)
- ciclo for per 100 celle
    - una cella è un div --> tramite innerhtml??
    - 

*/

// variabile globale per recuperare classe html che conterrà la griglia
const gridContainer = document.querySelector(".grid_container");

// funzione per generare la griglia da 1 a 100
function createGrid() {
    const cellsGrid = 100;

    console.log(cellsGrid);

    for (let i = 1; i <= cellsGrid; i++) {
        const cell = document.createElement("div");
        // aggiunge alla variabile cell la classe cell con gli stili necessari
        cell.classList.add("cell");
        gridContainer.append(cell);
    }

    
}

createGrid();
