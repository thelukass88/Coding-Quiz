
const startButton = document.getElementById("start");
const startPage = document.getElementById("start-screen");

function hideStart(_event){
    document.getElementById("start-screen").style.display="none";

}

startButton.addEventListener("click", hideStart);

//quiz timer
let timer