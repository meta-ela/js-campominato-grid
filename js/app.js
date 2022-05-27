/*
Generare una griglia di gioco quadrata , 
in cui ogni cella contiene un numero incrementale tra quelli compresi tra 1 e 100
Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro.

- creare griglia di celle grandi 40px x 40px 
- ciclo for per 100 celle
    - una cella è un div --> tramite innerhtml??
    - 

*/

// variabile globale per recuperare classe html che conterrà la griglia
const gridContainer = document.querySelector(".grid_container");

// funzione per generare la griglia
function createGrid(xCells, yCells) {
    const cellsGrid = xCells * yCells;

    console.log(cellsGrid);

    for (let i = 1; i <= cellsGrid; i++) {
        const cell = document.createElement("div");
        gridContainer.append(cell);
    }
}

createGrid(1,100);
