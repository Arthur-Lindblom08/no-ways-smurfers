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
block.addEventListener('animationiteration', () => {
   var random = Math.floor(Math.random() * 3);
   left = random * 100;
   block.style.left = left + "px";
   score++;
});


setInterval(function(){
    var playerLeft = parseInt(window.getComputedStyle(player)
    .getPropertyValue("left"));
    var BlockLeft = parseInt(window.getComputedStyle(block)
    .getPropertyValue("left"));
    var BlockTop = parseInt(window.getComputedStyle(block)
    .getPropertyValue("top"));

    if(playerLeft === BlockLeft &&
        BlockTop<500&&
        BlockTop>300) {
            document.getElementById("player").style.display = "none";
        alert('YOU! got just käkad av en grön ferrari! din poäng: ' +score );
        block.style.animation = "none";
        btn.classList.remove("hide");
    }

},1);

document.getElementById("right").addEventListener("touchstart", moveRight);
document.getElementById("left").addEventListener("touchstart", moveLeft);