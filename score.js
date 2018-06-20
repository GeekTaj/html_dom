<!--两个按钮元素-->
var player1 = document.getElementById("p1");
var player2 = document.getElementById("p2");
<!--分数初始化-->
var p1Score = 0;
var p2Score = 0;
var maxScore = 5;
var isWin = false;
<!--记分牌的两个ID-->
var P1 = document.getElementById("showP1");
var P2 = document.getElementById("showP2");

<!--函数-->
player1.addEventListener("click",function(){
    if(p1Score === maxScore){
        isWin = true;
        P1.classList.add("winner");
    }
    if(!isWin){
        p1Score += 1;
        P1.textContent = p1Score;        
    }

   
})

player2.addEventListener("click",function(){
 if(p2Score === maxScore){
        isWin = true;
        P2.classList.add("winner");
    }
    if(!isWin){
        p2Score += 1;
        P2.textContent = p2Score;        
    }

})