console.log("hello");

function rollDice(){
    let dice = document.getElementById("dice");
    let sound = document.getElementById("sound");
    let random = Math.floor(Math.random() * 6) + 1;
    dice.classList.add("roll");
    sound.play();
    setTimeout(function(){
        dice.classList.remove("roll");
        dice.innerHTML = random;
    }, 1000);
}