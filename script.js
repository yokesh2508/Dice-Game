let myplayer1h1=document.querySelectorAll("h1")[0]
let myplayer2h1=document.querySelectorAll("h1")[1]
let playerbt1=document.querySelectorAll("button")[0]
let playerbt2=document.querySelectorAll("button")[1]
let myresult=document.querySelectorAll("button")[2]
let myp=document.querySelectorAll("p")[0]

console.log(myplayer1h1,myplayer2h1,playerbt1,playerbt2,myp);

let player1=null;
playerbt1.addEventListener("click",()=>{
   player1=Math.ceil( Math.random()*6)
   myplayer1h1.innerHTML=player1;
   playerbt1.disabled=true;
   playerbt2.disabled=false;

})

let player2=null;
playerbt2.addEventListener("click",()=>{
    player2=Math.ceil(Math.random()*6)
    myplayer2h1.innerHTML=player2;
    playerbt2.disabled=true;

    if(player1>player2){
        myp.innerHTML="Player 1 wins"
    }
    else if(player1<player2){
        myp.innerHTML="Player 2 wins"
    }
    else{
        myp.innerHTML="Draw"
    }
})

myresult.addEventListener("click",()=>{
    player1=null;
    player2=null;

    myplayer1h1.innerHTML=""
    myplayer2h1.innerHTML=""

    myp.innerHTML=""

    playerbt1.disabled=false;
    playerbt2.disabled=true;
})

