let boxes= document.querySelectorAll(".box");
let newButton= document.querySelector(".NewButton");
let resetButton= document.querySelector(".resetBtn");
let container= document.querySelector(".msg-container");
let message=document.querySelector("#msg")
let turnO=true;



const winPattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerText="O";
            turnO=false;
        }
        else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        checkWinner();
    });
});

const GameStartAgain=()=>{
    turnO=true;
    enableBox();
    container.classList.add("hide");
}

const checkWinner=()=>{
    for(let pattern of winPattern){
        let pos1val= boxes[pattern[0]].innerText;
        let pos2val= boxes[pattern[1]].innerText;
        let pos3val= boxes[pattern[2]].innerText;

        if(pos1val!==""&&pos2val!==""&&pos3val!==""){
            if(pos1val===pos2val&&pos2val===pos3val){
                showWinner(pos1val);
            }
        }
    }
    let filledBoxes=0;
    for(let box of boxes){
        if(box.innerText!==""){
            filledBoxes++;
        }
    }
    if(filledBoxes===9){
        showDraw();
    }
};

showWinner=(winner)=>{
    message.innerText=`Congratulations,The winner is ${winner}`;
    container.classList.remove("hide");
    disableBox();
}

const disableBox=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}

const enableBox=()=>{
for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};

const showDraw=()=>{
    message.innerText="It's a Draw. Play Again!!";
    container.classList.remove("hide");
    disableBox();
}

newButton.addEventListener("click",GameStartAgain);
resetButton.addEventListener("click",GameStartAgain);