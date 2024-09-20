console.log("Welcome to Tic Tac Toe")

let music = new Audio("music.mp3")
let ting = new Audio("ting.mp3")
let gameover = new Audio("gameover.mp3")
let isgameover=false;

let turn = "X";

//function to change the turn

const changeTurn = () => {
    if (turn === "X") {
        return "O";
    }
    else {
        return "X";
    }
}


const checkWin = () => {
    let boxtexts = document.getElementsByClassName("text");
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],  
        [0, 4, 8],
        [2, 4, 6]
    ]
    wins.forEach(e => {
        if ((boxtexts[e[0]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[0]].innerHTML === boxtexts[e[2]].innerText) && (boxtexts[e[0]].innerText !== "")) {
            document.querySelector(".turnfor").innerText = boxtexts[e[0]].innerText + " won"
            isgameover=true;
            gameover.play();
            document.querySelector(".gif").style.display="block";
            
            // alert( boxtexts[e[0]].innerText + " won")
        }
    })
}

//Game Logic
// music.play()
let boxes = document.getElementsByClassName("box");
// console.log(boxes)
Array.from(boxes).forEach(element => {
    // console.log(element);
    let boxText = element.querySelector(".text");
    element.addEventListener("click", () => {
        if (boxText.innerText === "") {
            boxText.innerText = turn;
            turn = changeTurn();
            ting.play();
            checkWin();
            if(!isgameover){

                document.getElementsByClassName("turnfor")[0].innerText = "Turn for " + turn;
            }
        }
    })
}); 


let reset=document.querySelector("#reset");

reset.addEventListener("click", ()=>{
    // alert("clicked")
    Array.from(boxes).forEach(element => {
        // console.log(element);
        element.querySelector(".text").innerText="";
        document.querySelector(".turnfor").innerText = "Turn for X";
        document.querySelector(".gif").style.display="none";
        gameover.pause();
    });
})