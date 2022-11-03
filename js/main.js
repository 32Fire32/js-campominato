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
            console.log(i);
            scoreNumber.push(i);
            console.log(scoreNumber.length);
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
            endGame(cellNumber, bombArray, Number(cellNumber.innerHTML));
        }        
}

function endGame(cell, array, number) {
    cell.addEventListener('click', function(){
        if (cell.innerHTML === array[number]){
            cell.classList.add("bomb");
        }
        console.log("lo legge");
        console.log(cell.innerHTML, array[number]);
    }
)}

let i = 0;
let randomNumber = 0;
let randomNumberarray = [];
let bombArray = [];
let scoreNumber= [];

//mi prendo lo score
// const score = document.getElementById("score").innerHTML = scoreNumber.length;

//mi prendo il tasto play
const playButton = document.querySelector("button");

// mi prendo la board
const cellContainer = document.querySelector(".board");

// creo l'array delle bombe con 16 numeri univoci

while ( bombArray.length < 16 ){
    i++;
    randomNumber = (Math.floor(Math.random() * 16) + 1);
    randomNumberarray.push(randomNumber);
    if (bombArray.includes(randomNumber) === false ){
        bombArray.push(randomNumber);
    }
}
console.log("l'array dei numero randomici è " + randomNumberarray);
console.log("l'array delle bombe è " + bombArray);
console.log("i numeri randomici sono " + randomNumber);

// mi prendo i valori delle options
playButton.addEventListener('click', function(){
    const selectElement = document.getElementById("level").value;
    console.log(selectElement);
    if ( selectElement === "easy") {        
        startGame(cellContainer, 100, "easy");        
    } else if (selectElement === "hard") {        
        startGame(cellContainer, 81, "hard");            
    } else {        
        startGame(cellContainer, 49, "hell");
    }
    
})






