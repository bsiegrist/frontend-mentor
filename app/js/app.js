import * as Tools from './tools.js';

const rulesbutton = document.querySelector(".rulesbutton");
const rules = document.querySelector(".rules");
const score = document.querySelector(".score__points");
const game = document.querySelector(".game");

let points = 0;


//show rules
rulesbutton.addEventListener('click', () => {
    rules.style.display = "flex";
});

//hide rules
rules.addEventListener('click', () => {
    rules.style.display = "none";
})

//show points
score.innerText = points;

//step 2
game.addEventListener('click', Tools.delegate('.game__button', (event)=>{
    console.log("click");
    game.style.backgroundImage = "none";
    game.innerHTML =    `<div class="choice">
                        </div>
                        <div class="computer">
                        </div>`

}))
