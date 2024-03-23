let gameSeq = [];
let userSeq = [];

let btns = ["red","yellow","purple","blue"];

let started = false;
let level = 0;
let highestScore = 0;

let h2 = document.querySelector("h2");
let h3 = document.querySelector("h3");




document.addEventListener("keypress", function(){
    if(started == false){
        console.log("game is stared");
        started = true;

        levelup();
    }
 
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 250);
}
function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    }, 250);
}



function levelup(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;
    
    let randIdx = Math.floor(Math.random()*3);
    let randcolor = btns[randIdx];
    let randbtn = document.querySelector(`.${randcolor}`);
    gameSeq.push(randcolor);
    console.log(gameSeq);
    gameFlash(randbtn);

}

function checkAns(idx){
    // console.log("curr level:", level);
    if(userSeq[idx]==gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelup , 1000);
        } 
        
    }
    else{
        h2.innerHTML = `Game Over! Your score was <b>${level}</b> <br> Press Any Key To Start`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "purple";
        },150);
        if (level > highestScore) {
            highestScore = level;
            h3.innerText=`Your highest Score is ${highestScore}`;
        }
        reset();
        
    }
    
}

function btnPressed(){
    let btn = this;
    // console.log(btn);
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);

    
}

let allbtns = document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnPressed);
}

function reset(){
    started = false;
    gameSeq=[];
    userSeq=[];
    level=0;
}

// function heigh(){
//     h3.innerText=`Your heighest Score is ${level}`;
    
// }