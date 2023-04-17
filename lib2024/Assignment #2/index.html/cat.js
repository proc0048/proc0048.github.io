
function darkMode(){
    let element = document.body
    element.classList.toggle("dark-mode");
}
function switcherButtons(){
    let resume = document.getElementById("resume");
    let stationary = document.getElementById("stationary");
    let businessCard = document.getElementById("businessCard");
    
    resume.classList.toggle("hiddenElement");
    stationary.classList.toggle("currentElement");
    businessCard.classList.toggle("currentElement");
}

function userPref(){
    let phone = document.getElementById("phone");
    let email = document.getElementById("email");

}

function ageGame(){
    let userNum = document.getElementById("userNum");
    let correctAge = document.getElementById("correctAge");
    let gameMessage = document.getElementById("gameMsg");
    
    let numGuess = document.getElementById("numGuess").value

    userNum.innerHTML = numGuess;
    correctAge.innerHTML = correctAge;

    if(numGuess === 6){
    gameMessage.innerHTML = "Yes! She is 6 years old! &#11088;"
    }else{
    gameMessage.innerHTML = "Sorry, that is not how old she is. "
    }
}
document.getElementById("btnResume").addEventListener("click", switcherButtons);
document.getElementById("btnStationary").addEventListener("click", switcherButtons);
document.getElementById("btnBusinessCard").addEventListener("click", switcherButtons);

document.getElementById("guessGame").addEventListener("click", ageGame);