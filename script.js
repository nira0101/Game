let human = document.querySelector("#player1");
let computer = document.querySelector("#player2");
start();

function start(){
    
    console.log("start")
    //yourSelection(a);
    //computerSelection(b);
    //compare(a,b);
}
//Ask for your selection of items
//function yourSelection(a){};

//Random Selection by computer
//function computerSelection(b){};


//Compares those selection and gives output
//function compare(a,b){};

function shaking(){
    console.log("shaking")
    human.classList.add(".player.shake");
    computer.classList.add(".player.shake");
}