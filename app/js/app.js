import * as Tools from './tools.js';

const rulesbutton = document.querySelector(".rulesbutton");
const rules = document.querySelector(".rules");
const score = document.querySelector(".score__points");
const start = document.querySelector(".game__start");
const game = document.querySelector(".game");
const game__button = document.querySelector(".game__button");

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
start.addEventListener('click', Tools.delegate('.game__button', (event)=>{
    console.log(event.target.id);
    let button_id = event.target.id;
    game.innerHTML =    `<div class="choice choice__player">
                            <div class="game__button" id="${button_id}">
                                <div class="game__buttonwhite">
                                    <img src="img/icon-${button_id}.svg" alt="${button_id}-button">
                                </div>
                            </div>
                            <h3>YOU PICKED</h3>
                        </div>

                        <div class="choice choice_computer">
                            <div class="game__button" id="paper">
                                <div class="game__buttonwhite">
                                    <img src="img/icon-paper.svg" alt="paper-button">
                                </div>
                            </div>
                            <h3>THE HOUSE PICKED</h3>
                        </div>`
    game.style.justifyContent = "space-between";
    game__button.style.width = "8rem";
    game__button.style.height = "8rem";

}))
