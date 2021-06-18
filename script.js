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
            document.getElementById("btns").style.display = "none";
            document.getElementById("X").style.display = "block";
            document.getElementById("controls").style.display = "block";
            document.getElementById("scoreT").style.display = "none";
            document.getElementById("btn").style.display = "none";
            document.getElementById("scoretxt").style.display = "none";
            document.getElementById("cred").style.display = "block";
            document.getElementById("volume").style.display = "block";
});
var back = document.getElementById("X");
back.addEventListener("click", () => {
    document.getElementById("scoreT").style.display = "block";
    document.getElementById("controls").style.display = "none";
    document.getElementById("X").style.display = "none";
    document.getElementById("btns").style.display = "block";
    document.getElementById("btn").style.display = "block";
    document.getElementById("scoretxt").style.display = "block";
    document.getElementById("mobile").style.display = "none";
    document.getElementById("pc").style.display = "none";
    document.getElementById("mobileH").style.display = "none";
    document.getElementById("pcH").style.display = "none";
    document.getElementById("cred").style.display = "none";
    document.getElementById("credH").style.display = "none";
    document.getElementById("volume").style.display = "none";
});

controls.addEventListener("click", () => {
    document.getElementById("controls").style.display = "none";
    document.getElementById("mobile").style.display = "block";
    document.getElementById("pc").style.display = "block";
    document.getElementById("cred").style.display = "none";
    document.getElementById("volume").style.display = "none";
});

mobile.addEventListener("click", () => {
    document.getElementById("mobileH").style.display = "block";
    document.getElementById("mobile").style.display = "none";
    document.getElementById("pc").style.display = "none";
    document.getElementById("volume").style.display = "none";
});

pc.addEventListener("click", () => {
    document.getElementById("pcH").style.display = "block";
    document.getElementById("mobile").style.display = "none";
    document.getElementById("pc").style.display = "none";
    document.getElementById("volume").style.display = "none";
});

cred.addEventListener("click", () => {
    document.getElementById("controls").style.display = "none";
    document.getElementById("cred").style.display = "none";
    document.getElementById("credH").style.display = "block";
    document.getElementById("mobile").style.display = "none";
    document.getElementById("pc").style.display = "none";
    document.getElementById("volume").style.display = "none";
});

volume.addEventListener("click", () => {
  ///  document.getElementById("controls").style.display = "none";
  ///  document.getElementById("cred").style.display = "none";
  ///  document.getElementById("volume").style.display = "none";
  ///  document.getElementById("mobile").style.display = "none";
  ///  document.getElementById("pc").style.display = "none";
  alert("ARTHUR LINDBLOM: WORK IN PROGRESS");
});