  let started=0;
  let level =0;
  let gamesq=[];
  let usersq=[];
  let btns=["red","yellow","green","purple"];
  let h2=document.querySelector("h2");
  let body =document.querySelector("body");
  body.addEventListener("keypress",function(){
    console.log("game stared");
    if(started ==0){
    started =1;

    levelUp();}
  })
  
  function levelUp(){
    usersq=[];
level++;
h2.innerText=`Level ${level}`;

let randidx=Math.floor(Math.random()*3);
let randColor=btns[randidx];
let randbtn=document.querySelector(`.${randColor}`);
gamesq.push(randColor);
btnflash(randbtn);
console.log(gamesq);
  }

function checkAns(){
    let idx=usersq.length-1
    if(gamesq[idx]==usersq[idx]){
        if(gamesq.length==usersq.length){
            setTimeout(levelUp,1000) 
        }
    }
    else{
        h2.innerHTML=`game over your score was ${level-1}`;
        reset();
    }
}
function reset(){
    started=0;
    gamesq=[];
    usersq=[];
    level=0;
}




  function btnflash(btn){
    console.log(btn);
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250)

  }
  function userflash(btn){
    console.log(btn);
    btn.classList.add("usrflash");
    setTimeout(function(){
        btn.classList.remove("usrflash");
    },250)

  }
  function btnpress(){
    let btn =this;
    userflash(btn);
   let userColor=btn.getAttribute("id");
    usersq.push(userColor);
    console.log(usersq);
    checkAns();
  }
  let allbtns=document.querySelectorAll(".btn");
  for(btn of allbtns){
    btn.addEventListener("click",btnpress);
  }