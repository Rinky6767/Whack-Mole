let Container = document.querySelector("#Container");
let time = document.querySelector("#time-left");
let scoredis= document.getElementById("score");
let start= document.getElementById("start").addEventListener("click",startGame);
let restart= document.getElementById("reset").addEventListener("click",startGame);
let left = 30;
let countcell = -1;
let timerid;
let random;
let score=0;
createGrid();
timer();
console.log("left: "+left);

function startGame(){
    window.location.reload();
}
function createGrid() {
    let table = document.createElement("table");
    for (let i = 1; i <= 3; i++) {
        let tr = document.createElement("tr");
        for (let j = 1; j <= 3; j++) {
            countcell = countcell + 1;
            let td = document.createElement("td");
            td.className = "square";
            td.setAttribute("id", countcell);
            td.addEventListener("click",updateScore);
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    Container.appendChild(table);
}

function timer() {
    timerid = setInterval(function () {
        if(left==0){
            let td= document.querySelectorAll("td");
            for(let i=0; i<td.length; i++){
                td[i].removeEventListener("click",updateScore);
            }
        }
        if (left != 0) {
            left = left - 1;
            molePosition();
            let place = document.getElementById(random);
               place.classList.add("mole");
            time.textContent = "Time Left: " + left + "s";
        } else { clearInterval(timerid); }
    }, 1000);
   
}

function molePosition() {
    let id = document.getElementById(random);
    if (random != undefined) {
        id.classList.remove("mole");
    }
    random = parseInt(Math.random() * 9);
}

function updateScore(e){
    let isclass= e.target.getAttribute("class");
    if(isclass.includes("mole")){
        score= score+1;
        scoredis.textContent= "Score: "+score;
    }
}

