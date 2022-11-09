const playBtn = document.getElementById("playbtn");
const dLeft = document.getElementById("left");
const dRight = document.getElementById("right");
const show = document.getElementById("result");

const dice = ["one","two","three","four","five","six"];


playBtn.addEventListener("click",()=>{
    reset();
    Random();
})


Random = () =>{
    let leftS = (Math.random()*5).toFixed(); //0
    let rightS = (Math.random()*5).toFixed();
    Check(leftS,rightS);
    changeStyle(leftS,rightS);
}

Check = (l,r) =>{
    if (l>r){
        show.innerHTML = "Player 1 win!" ;
        dLeft.classList.add("win");

    } else if (r>l){
        show.innerHTML = "Player 2 win!" ;
        dRight.classList.add("win");
    }else {
        show.innerHTML = "Draw!" ;
    }
}

changeStyle = (l,r) =>{
    dLeft.classList.add(dice[l]);// add style name one
    dRight.classList.add(dice[r]);
}

reset = () => {
    dLeft.className = "dice";
    dRight.className = "dice";
} 

