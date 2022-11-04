'strict mode'

// FUNZIONI

function startGame(board, maxNumbers, level){
        let cellNumber;
        board.innerHTML ="";
        for ( let i = 1; i <=maxNumbers; i++){
            cellNumber = document.createElement("div");
            cellNumber.innerHTML = i;
            cellNumber.classList.add("cellboard");
            cellNumber.classList.add(level);
            board.append(cellNumber);
            Game(cellNumber, bombArray);
        }        
    }

function Game(cell, array) {
    cell.addEventListener('click', function(){
        if(gameOver){
            return
        }
        if (array.indexOf(Number(cell.innerHTML)) != -1){
            cell.classList.add("bomb");
            console.log(cell.innerHTML);
            document.getElementById("finalscore").innerHTML = "Mi dispiace hai perso! Il tuo punteggio è " + scoreNumber.length;
            document.getElementById("reload").innerHTML = "Clicca QUI per riavviare";
            console.log(scoreNumber);
            gameOver = true;
        } else {
            scoreNumber.push(i);
            document.getElementById("score").innerHTML = scoreNumber.length;
            this.classList.add("active");
        }
        // console.log(cell.innerHTML, array.indexOf(Number(cell.innerHTML)), typeof(Number(cell.innerHTML)))
    });
}

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

/////////////////////
/////// MAIN/////////
/////////////////////


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
let TotalCellTabs;
let gameOver = false;


// mi prendo i valori delle options
playButton.addEventListener('click', function(){
    const selectElement = document.getElementById("level").value;
    console.log(selectElement);
    if ( selectElement === "easy") { 
        let TotalCellTabs = 100;   
        createBombs(bombArray, randomNumber, randomNumberarray, 100);    
        startGame(cellContainer, TotalCellTabs, "easy");   
    } else if (selectElement === "hard") {  
        let TotalCellTabs = 81;    
        createBombs(bombArray, randomNumber, randomNumberarray, 81);           
        startGame(cellContainer, TotalCellTabs, "hard");  
    } else {        
        let TotalCellTabs = 49; 
        createBombs(bombArray, randomNumber, randomNumberarray, 49); 
        startGame(cellContainer, TotalCellTabs, "hell");
    }
    
})

//reload della pagina
reloadButton.addEventListener('click', function(){
    window.location.reload();
})

//vittoria

if(scoreNumber.length === TotalCellTabs - 16) {
    alert("bravissimo hai terminato il gioco");
}



