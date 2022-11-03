'strict mode'

// FUNZIONI

function startGame(board, maxNumbers, level){
        cellContainer.innerHTML ="";
        for ( let i = 1; i <=maxNumbers; i++){
            const cellNumber = document.createElement("div");
            cellNumber.innerHTML = i;
            cellNumber.classList.add("cellboard");
            cellNumber.addEventListener('click', function(){
                this.classList.add("active");
                console.log(i);
            })
            if (level === "easy") {
                cellNumber.classList.add("easy");
            } else if (level === "hard") {
                cellNumber.classList.add("hard");
            } else if (level === "hell") {
                cellNumber.classList.add("hell");
            }
            board.append(cellNumber);
        }
}

//mi prendo lo score
const score = document.getElementById("score");

//mi prendo il tasto play
const playButton = document.querySelector("button");

// mi prendo la board
const cellContainer = document.querySelector(".board");

// creo l'array delle bombe con 16 numeri univoci

let i = 0;
let randomNumberarray = [];
let bombArray = [];
while ( bombArray.length < 16 ){
    i++;
    let randomNumber = (Math.floor(Math.random() * 16) + 1);
    console.log("il numero random è " + randomNumber);
    randomNumberarray.push(randomNumber);
    console.log("l'array dei numero randomici è " + randomNumberarray);
    if (bombArray.includes(randomNumber) === false ){
        bombArray.push(randomNumber);
    }

}
console.log("l'array delle bombe è " + bombArray);

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


