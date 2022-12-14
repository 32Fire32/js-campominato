'strict mode'

// FUNZIONI

function startGame(board, maxNumbers, level){
        let cellNumber;
        board.innerHTML ="";
        for ( let i = 1; i <=maxNumbers; i++){
            cellNumber = document.createElement("div");
            cellNumber.innerHTML = i;
            cellNumber.classList.add("cellboard");
            cellNumber.addEventListener('click', work);
            if (level === "easy") {
                cellNumber.classList.add("easy");
            } else if (level === "hard") {
                cellNumber.classList.add("hard");
            } else if (level === "hell") {
                cellNumber.classList.add("hell");
            }
            function work(){
                scoreNumber.push(i);
                document.getElementById("score").innerHTML = scoreNumber.length;
                this.classList.add("active");
                }
               
                // console.log(Number(cellNumber.innerHTML));
            board.append(cellNumber);
            endGame(cellNumber, bombArray);
        }        
}

function endGame(cell, array) {
    cell.addEventListener('click', on);
    function on(){
        if (array.indexOf(Number(cell.innerHTML)) != -1){
            cell.classList.add("bomb");
            console.log(cell.innerHTML);
            document.getElementById("finalscore").innerHTML = "Mi dispiace hai perso! Il tuo punteggio è " + (scoreNumber.length - 1);
            document.getElementById("reload").innerHTML = "Clicca QUI per riavviare";
            cellNumber.removeEventListener('click', work());
        } else {
            console.log("nessuna bomba");
        }
        console.log(cell.innerHTML, array.indexOf(Number(cell.innerHTML)), typeof(Number(cell.innerHTML)))
    };
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


// mi prendo i valori delle options
playButton.addEventListener('click', function(){
    const selectElement = document.getElementById("level").value;
    console.log(selectElement);
    if ( selectElement === "easy") { 
        let TotalCellTabs = 100;       
        startGame(cellContainer, TotalCellTabs, "easy");   
        createBombs(bombArray, randomNumber, randomNumberarray, 100);     
    } else if (selectElement === "hard") {  
        let TotalCellTabs = 81;       
        startGame(cellContainer, TotalCellTabs, "hard");  
        createBombs(bombArray, randomNumber, randomNumberarray, 81);           
    } else {        
        let TotalCellTabs = 49;       
        startGame(cellContainer, TotalCellTabs, "hell");
        createBombs(bombArray, randomNumber, randomNumberarray, 49); 
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




