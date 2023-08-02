let gameSeq=[];
let userSeq=[];
let started= false;
let level = 0;
let highscore = document.querySelector("h3");
let max = 0;


//btns array on the basis of colors class

let btns = ["yellow","green","red","blue"];

let h2 = document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("Game is started");
        started = true;
        levelUp();
    }
    
});
function flashbtn(btn){
    btn.classList.add("flash");
    setTimeout(()=>{
        btn.classList.remove("flash");
    },250);
  
}

function userflashbtn(btn){
    btn.classList.add("userflash");
    setTimeout(()=>{
        btn.classList.remove("userflash");
    },250);
  
}

function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;
    let randomIdx = Math.floor(Math.random()*4);
    let randomColor = btns[randomIdx];
    let randombtn = document.querySelector(`.${randomColor}`);
    flashbtn(randombtn);
    gameSeq.push(randomColor);
    console.log(gameSeq);
    // console.log(randomIdx);
    // console.log(randomColor);



}
function checkAns(idx){
    console.log(`curr level is: ${level}`);
    // let idx= level-1;

    if(gameSeq[idx] === userSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,1000);
        }

    }else{
        
       h2.innerHTML=`Game Over!! your score was: <b>${level}</b> <br/> press any key to restart`;
       let score= level;
       if(max<score){
        max=score;
        highscore.innerText=`High Score: ${max}`;
        
       }
        console.log("not same");
        document.querySelector("body").style.backgroundColor ="red";
        
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor ="white";
        },300);

        
        reset();
    }

}
function btnpress(){

    let btn =this;
    console.log(btn);
    userflashbtn(btn);
    let usercolor = btn.getAttribute("id");
    userSeq.push(usercolor);
    console.log(userSeq);
    checkAns(userSeq.length-1);

    
    
}
let allbtns = document.querySelectorAll(".btn");
for(btn of allbtns){
   btn.addEventListener("click",btnpress);
   
}
function reset(){
   
    started =false;
    userSeq=[];
    gameSeq=[];
    level=0;
    
}
