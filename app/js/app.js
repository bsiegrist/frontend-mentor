import * as Tools from './tools.js';

const rulesbutton = document.querySelector(".rulesbutton");
const rules = document.querySelector(".rules");
const score = document.querySelector(".score__points");
const start = document.querySelector(".game__start");
const game = document.querySelector(".game");

let points = 0;

const options = ["rock", "paper", "scissors", "lizard", "spock"];

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


//show user choice
function choice(button_id){
    game.innerHTML =    `<div class="choice choice__player">
                            <div class="game__button" id="${button_id}">
                                <div class="game__buttonwhite">
                                    <img src="img/icon-${button_id}.svg" alt="${button_id}-button">
                                </div>
                            </div>
                            <h3>YOU PICKED</h3>
                        </div>

                        <div class="choice choice__computer">
                            <div class="choice__computer--calculating">
                            </div>
                            <h3>THE HOUSE PICKED</h3>
                        </div>
                                                
                        <div class="result">
                        </div>`
    setTimeout(() => {
        finalchoice();
        },1000);
    setTimeout(() => {
            show_result();
            },1750);
};

//show final choices
function finalchoice(){
    const randomElement = options[Math.floor(Math.random() * options.length)];
    console.log(randomElement);
    const choice__computer = document.querySelector(".choice__computer");
    choice__computer.innerHTML =`<div class="game__button" id="${randomElement}">
                                    <div class="game__buttonwhite">
                                        <img src="img/icon-${randomElement}.svg" alt="${randomElement}-button">
                                    </div>
                                 </div>
                                 <h3>THE HOUSE PICKED</h3>`   
};

//show result
function show_result(){
    const result = document.querySelector('.result')
    result.innerHTML = `    <h2>YOU WIN</h2>
                            <button class="reload-button">PLAY AGAIN</button>`
    result.style.display = "inline-block";
    //eventlistener replay button
    document.querySelector(".reload-button").addEventListener('click', ()=>{
        location.reload();
    })
}


//eventlistener gamebutton color
start.addEventListener('click', Tools.delegate('.game__button', (event)=>{
    console.log(event.target.id);
    let button_id = event.target.id;
    choice(button_id);
}))

//eventlistener gamebutton white
start.addEventListener('click', Tools.delegate('.game__buttonwhite', (event)=>{
    console.log(event.target.parentNode.id);
    let button_id = event.target.parentNode.id;
    choice(button_id);
}))

//eventlistener gamebutton img
start.addEventListener('click', Tools.delegate('.game__buttonwhite img', (event)=>{
    console.log(event.target.parentNode.parentNode.id);
    let button_id = event.target.parentNode.parentNode.id;
    choice(button_id);
}))

