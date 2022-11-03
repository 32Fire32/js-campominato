'strict mode'

// FUNZIONI

function startGame(board, maxNumbers, level){
        cellContainer.innerHTML ="";
        for ( let i = 1; i <=maxNumbers; i++){
            const cellNumber = document.createElement("div");
            cellNumber.innerHTML = i;
            cellNumber.classList.add("cellboard");
            cellNumber.addEventListener('click', function(){
                cellNumber.classList.add("active");
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

//mi prendo il tasto play
const playButton = document.querySelector("button");

// mi prendo la board
const cellContainer = document.querySelector(".board");

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
