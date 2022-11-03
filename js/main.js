'strict mode'

// FUNZIONI

function startGame(board, cells, maxNumbers, level){
        board.innerHTML ="";
        for ( let i = 1; i <=maxNumbers; i++){
            cells = document.createElement("div");
            cells.innerHTML = i;
            cells.classList.add("cellboard");
            cells.addEventListener('click', function(){
                scoreNumber.push(i);
                document.getElementById("score").innerHTML = scoreNumber.length;
                this.classList.add("active");
                })
                if (level === "easy") {
                    cells.classList.add("easy");
                } else if (level === "hard") {
                    cells.classList.add("hard");
                } else if (level === "hell") {
                    cells.classList.add("hell");
                }
                // console.log(Number(cells.innerHTML));
                board.append(cells);
                endGame(cells, bombArray);
        }        
}

function endGame(cell, array) {
    cell.addEventListener('click', function(){
        if (array.indexOf(Number(cell.innerHTML)) != -1){
            cell.classList.add("bomb");
            console.log(cell.innerHTML);
            document.getElementById("finalscore").innerHTML = "Mi dispiace hai perso! Il tuo punteggio è " + (scoreNumber.length - 1);
            document.getElementById("reload").innerHTML = "Clicca QUI per riavviare";
        } else {
            console.log("nessuna bomba");
        }
        console.log(cell.innerHTML, array.indexOf(Number(cell.innerHTML)), typeof(Number(cell.innerHTML)));
    }
)}

// creo la funzione delle bombe con 16 numeri univoci

function createBombs(array, random, randomarray, number){
    while ( array.length < 16 ){
        i++;
        random = (Math.floor(Math.random() * number) + 1);
        randomarray.push(random);
        if (array.includes(random) === false ){
            array.push(random);
            // console.log(randomNumber);
        }
    }
    console.log("l'array delle bombe è " + array);
}


//mi prendo il tasto play
const playButton = document.querySelector("button");

// mi prendo la board
const cellContainer = document.querySelector(".board");

//mi prendo il tasto reload

const reloadButton = document.getElementById("reload");

let i = 1;
let randomNumber = 0;
let randomNumberarray = [];
let bombArray = [];
let scoreNumber= [];
let cellNumber;

// mi prendo i valori delle options
playButton.addEventListener('click', function(){
    const selectElement = document.getElementById("level").value;
    console.log(selectElement);
    if ( selectElement === "easy") {        
        startGame(cellContainer, cellNumber, 100, "easy");   
        createBombs(bombArray, randomNumber, randomNumberarray, 100);     
    } else if (selectElement === "hard") {        
        startGame(cellContainer, cellNumber, 81, "hard");  
        createBombs(bombArray, randomNumber, randomNumberarray, 81);           
    } else {        
        startGame(cellContainer, cellNumber, 49, "hell");
        createBombs(bombArray, randomNumber, randomNumberarray, 49); 
    }
    
})

//reload della pagina
reloadButton.addEventListener('click', function(){
    window.location.reload();
})






