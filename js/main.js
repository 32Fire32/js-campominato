'strict mode'

// FUNZIONI

function startGame(board, maxNumbers, level){
        cellContainer.innerHTML ="";
        let cellNumber;
        for ( let i = 1; i <=maxNumbers; i++){
            cellNumber = document.createElement("div");
            cellNumber.innerHTML = i;
            cellNumber.classList.add("cellboard");
            cellNumber.addEventListener('click', function(){
                scoreNumber.push(i);
                document.getElementById("score").innerHTML = scoreNumber.length;
                this.classList.add("active");
                })
                if (level === "easy") {
                    cellNumber.classList.add("easy");
                } else if (level === "hard") {
                    cellNumber.classList.add("hard");
                } else if (level === "hell") {
                    cellNumber.classList.add("hell");
                }
                // console.log(Number(cellNumber.innerHTML));
                board.append(cellNumber);
                endGame(cellNumber, bombArray, randomNumber);
        }        
}

function endGame(cell, array, number) {
    cell.addEventListener('click', function(){
        if (array.indexOf(Number(cell.innerHTML)) != -1){
            cell.classList.add("bomb");
            console.log(cell.innerHTML);
            alert("hai perso");
        } else {
            console.log("nessuna bomba");
        }
        console.log(cell.innerHTML, array.indexOf(Number(cell.innerHTML)), typeof(Number(cell.innerHTML)));
    }
)}

// creo la funzione delle bombe con 16 numeri univoci

function createBombs(number){
    while ( bombArray.length < 16 ){
        i++;
        randomNumber = (Math.floor(Math.random() * number) + 1);
        randomNumberarray.push(randomNumber);
        if (bombArray.includes(randomNumber) === false ){
            bombArray.push(randomNumber);
            // console.log(randomNumber);
        }
    }
    console.log("l'array delle bombe è " + bombArray);
}


//mi prendo il tasto play
const playButton = document.querySelector("button");

// mi prendo la board
const cellContainer = document.querySelector(".board");

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
        startGame(cellContainer, 100, "easy");   
        createBombs(100);     
    } else if (selectElement === "hard") {        
        startGame(cellContainer, 81, "hard");  
        createBombs(81);           
    } else {        
        startGame(cellContainer, 49, "hell");
        createBombs(49); 
    }
    
})






