function moveLeft() {
    let left = parseInt(window.getComputedStyle(player).getPropertyValue("left"));
    left -= 100;
    if(left>-100){
    player.style.left = left + "px";
    }
}
function moveRight() {
    let left = parseInt(window.getComputedStyle(player).getPropertyValue("left"));
    left += 100;
    if(left<300){
    player.style.left = left + "px";
    }
}
document.addEventListener("keydown", event => {
    if(event.key==="ArrowLeft"){moveLeft();}
    if(event.key==="ArrowRight"){moveRight();}
});
var block = document.getElementById("block");
var score = 0;
var score2 = 0;
var scoreT = document.getElementById("scoreT");
var sl = document.getElementById("scoreLive");
scoreT = 0;
block.addEventListener('animationiteration', () => {
   var random = Math.floor(Math.random() * 3);
   left = random * 100;
   block.style.left = left + "px";
   score++;
   score2++;
});
setInterval(function(){
    var playerLeft = parseInt(window.getComputedStyle(player)
    .getPropertyValue("left"));
    var BlockLeft = parseInt(window.getComputedStyle(block)
    .getPropertyValue("left"));
    var BlockTop = parseInt(window.getComputedStyle(block)
    .getPropertyValue("top"));
       scoreT = parseInt(score2)+1;
       scoreLive = parseInt(score)+1;
  
    if(playerLeft === BlockLeft &&
        BlockTop<500&&
        BlockTop>300) {
        block.style.animation = "none";
        GO.classList.remove("hide");
        document.getElementById("scoreLive").style.display = "none";
        document.getElementById("scoreT").innerHTML = parseInt(score2);
    }
    document.getElementById("scoreLive").innerHTML = parseInt(score);
},1);

document.getElementById("right").addEventListener("touchstart", moveRight);
document.getElementById("left").addEventListener("touchstart", moveLeft);
var buttonSettings = document.getElementById("btns");

buttonSettings.addEventListener("click",() => {
            alert("Arthur LIndblom is working on settings: (releaseDete somDay maybe!)")
});