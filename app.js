let gameseq=[];
var userseq=[];

let btns=["red","green","yellow","purple"]

let started=false;
let level=0;
let highestscore=0;

let h2=document.querySelector("h2")
let scoredisplay = document.querySelector("#high-score");

document.addEventListener("keypress",function(){
    console.log("game started")
    if(started==false) //abhi tak game start nii hua hai
        {
            started=true;
            level=0;
            gameseq=[];
            userseq=[];
            started=true
            levelup()
        }
    
});

function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
        },200);
}

function levelup(){
    userseq=[];
    level++;
    h2.innerText=`Level ${level}`;
    console.log("level up");

    let randidx=Math.floor(Math.random()*4)
    let randcolor=btns[randidx]
    let randbtn=document.querySelector(`.${randcolor}`)

    gameseq.push(randcolor);
    console.log("Game Sequence ,index:",randidx)
    // console.log(randcolor)
    // console.log(randbtn)
    console.log(gameseq)
    btnflash(randbtn);
}

function reset() {
    started = false;
    gameseq = [];
    userseq = [];
    level = 0;
}

function checkans(idx) {
    if (userseq[idx] === gameseq[idx]) {
        // correct ans case
        if (userseq.length === gameseq.length) {
            setTimeout(levelup,500)
        }
    } else {
        //wrong ans case
        if (level > highestscore) {
            highestscore = level;
            scoredisplay.innerText = `🏆 Highest Score: ${highestscore}`;
        }

        h2.innerHTML = `Game Over! Your score was <b>${level}</b>.<br>Press any key to start.</br>`;
        reset();
    }
}



function btnpress(){
    console.log("Button was pressed")
    let btn=this
    btnflash(btn);
    
    let usercolor=btn.getAttribute("id")
    // console.log(usercolor)
    // console.log(this)
    userseq.push(usercolor)
    checkans(userseq.length-1)
}

let allbtns=document.querySelectorAll(".btn")
for(let i=0;i<allbtns.length;i++){
    allbtns[i].addEventListener("click",btnpress)
}


/*or we can write like this also inline
let allbtns = document.querySelectorAll(".btn");

for (let i = 0; i < allbtns.length; i++) {
    allbtns[i].addEventListener("click", function () {
        console.log("Button was pressed");
    });
}
*/
