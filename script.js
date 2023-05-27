let gamesound = new Audio("videoplayback.mp4");
let turn = "X";
let reset = document.querySelector("#reset");
let gameOver = false;




// Function to change the Turn
const changeTurn = () => {
  turn =  turn === "X" ? "0" : "X";
};






//Function to a win
const checkWin = () =>{
    let boxTexts = document.querySelectorAll(".boxtext")
    let wins = [
        [0,1,2 , 5 , 5 , 0],
        [3,4,5 ,5 , 15 ,0],
        [6,7,8, 5 , 25 ,0],
        [0,3,6 , -5 , 5 , 90],
        [1,4,7 , 5 , 15 , 90],
        [2,5,8 , 15 , 15 , 90],
        [0,4,8,  5 , 15 , 45],
        [2,4,6 , 5 , 15 ,135],
    ];
    wins.forEach((e) =>{
        if(
            boxTexts[e[0]].innerText === boxTexts[e[1]].innerText && 
            boxTexts[e[2]].innerText === boxTexts[e[1]].innerText && 
            boxTexts[e[0]].innerText !== "" 

        ) {
            document.querySelector(".info").innerText = boxTexts[e[0]].innerText + " is win "
            gameOver = true;
            document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width = "359px"
            document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
            document.querySelector(".line").style.width = "20vw"
        }
    })
}




//Game Logic
let box = document.getElementsByClassName("box");
Array.from(box).forEach((element) =>{
    let boxText = element.querySelector(".boxtext");
    element.addEventListener("click",()=>{
        if(boxText.innerText === ""){
            boxText.innerText = turn;
            changeTurn();
            gamesound.play();
            checkWin();
            if(!gameOver){
                document.querySelector(".info").innerText = "The turn for " + turn ;
            }

        }
    })
});






// Add onclick listener to reset button 
reset.addEventListener("click",()=>{
    let boxText = document.querySelectorAll(".boxtext");
    Array.from(boxText).forEach((element)=>{
        element.innerText = ""
    });
    turn = "X";
    gameOver = false;
    document.querySelector(".info").innerText = "The turn for " + turn ;
    document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width = 0;
    document.querySelector(".line").style.width = "0vw"  

})