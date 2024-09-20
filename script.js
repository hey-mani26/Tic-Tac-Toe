let head = document.getElementById("heading");
let btn = document.getElementById("reset");
let boxes = Array.from( document.getElementsByClassName("box") );
let winnnerName = document.getElementById("winner");

let winning_indicator= getComputedStyle(document.body).getPropertyValue('--winning-color');


let x_move = "⭕";
let o_move = "❌";

let current_player =  x_move;

let spaces = new Array(9).fill(null);

const startGame = () => {

    boxes.map((box) => {
        box.addEventListener('click',boxClick)
    })

    reset.addEventListener('click',resetCommand);
}

const  boxClick = (e) => {

console.log(e.target.id)
let id = e.target.id

if(!spaces[id])
    {
        spaces[id] = current_player
        e.target.innerText = current_player

        current_player =   current_player == x_move ? o_move : x_move;
        
    }

    let isWin = checkWin() 
    if(isWin)
        {

           isWin.map((box) => {
            winnnerName.innerText = spaces[box] + " You are winner" ;
            boxes[box].style.backgroundColor = winning_indicator ; })
        }

}

 const winningCombination = [

    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
 ]

 

 const checkWin = () => {

    for (const iterator of winningCombination) {

        let [a,b,c] = iterator; 

        if(spaces[a] && spaces[a]==spaces[b] && spaces[a]==spaces[c]){
            return [a,b,c]
        }
    }
    return false;
 }

 const resetCommand = () => {

     spaces.fill(null)

     boxes.map((box)=> {
      
         box.innerText = "";
         box.style.backgroundColor = "";
         winnnerName.innerText ="";
         
     } )

 }



startGame();

