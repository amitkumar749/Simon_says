let gameSeq = [];
let userSeq = [];

let btns = ["yellow", "red", "purple", "green"];

let started = false;
let level = 0;

let h2 = document.querySelector ("h2");

document.addEventListener("keypress",function ( ) {
   if (started == false) {
     console.log("Game started");
     started=true;


     levelUp();
   }

});

function gameFlash (btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250);


};

function userflash (btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 250);
    

};

function levelUp() {
    userSeq= [];
    level ++ ;
    h2.innerText = `Level ${level}`;

    let randidx = Math.floor(Math.random()*3);
    let randColor = btns[randidx];
    let randbtn = document.querySelector(`.${randColor}`);
    // console.log(randColor);
    // console.log(randbtn);
    //  console.log(randidx);
    gameSeq.push(randColor);
   

    // random btn choose
    gameFlash(randbtn);


};

function checkAns(idx) {
    // console.log("curr. level:", level);
    // let idx = level - 1;

    if (userSeq[idx] == gameSeq[idx]) {
        if (userSeq.length == gameSeq.length) {
            setTimeout(levelUp,1000);
        }
    } else{
        h2.innerHTML=`Game Over! Your score was <b> ${level} </b> <br> Press any key to start.`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function() {
             document.querySelector("body").style.backgroundColor = "white";
        },250);
        reset();
    }
};

function btnpress() {
    console.log(this);

    let btn = this;
    userflash(btn);

    userColor = btn.getAttribute("id");
    // console.log(userColor);
    userSeq.push(userColor);
    checkAns( userSeq.length-1);

};

let allbtns = document.querySelectorAll(".btn");
for (btn of allbtns) {
    btn.addEventListener("click", btnpress)
};
function reset () {
    started= false;
    gameSeq = [];
    userSeq = [];
    level=0;
}