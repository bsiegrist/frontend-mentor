import * as Tools from './tools.js';

const rulesbutton = document.querySelector(".rulesbutton");
const rules = document.querySelector(".rules");
const score = document.querySelector(".score__points");
const start = document.querySelector(".game__start");
const game = document.querySelector(".game");

let points = 0;
let choice_computer = 0;
let choice_player = 0;
let result = "ERROR";

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
                            <div class="game__button ${button_id}-color" id="player-${button_id}">
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
    choice_player = options.indexOf(button_id);
    console.log(choice_player)
    setTimeout(() => {
        //show final choices
        const randomElement = options[Math.floor(Math.random() * options.length)];
        console.log(randomElement);
        choice_computer = options.indexOf(randomElement);
        console.log(choice_computer);
        document.querySelector(".choice__computer").innerHTML =`<div class="game__button ${randomElement}-color" id="computer-${randomElement}">
                                        <div class="game__buttonwhite">
                                            <img src="img/icon-${randomElement}.svg" alt="${randomElement}-button">
                                        </div>
                                    </div>
                                    <h3>THE HOUSE PICKED</h3>`
        return choice_computer;
        },1000);
    setTimeout(() => {
        winner()
        show_result();
        },1750);
};



//show result
function show_result(){
    const result_message = document.querySelector('.result')
    result_message.innerHTML = `    <h2>${result}</h2>
                            <button class="reload-button">PLAY AGAIN</button>`
    result_message.style.display = "inline-block";
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


//who wins
function winner(){
    if (choice_player === choice_computer){
        result = "EVEN";
    } else if (choice_player == 0 && (choice_computer == 3 || choice_computer == 2)){
        result = "YOU WIN";
    } else if (choice_player == 1 && (choice_computer == 0 || choice_computer == 4)){
        result = "YOU WIN";
    } else if (choice_player == 2 && (choice_computer == 1 || choice_computer == 3)){
        result = "YOU WIN";
    } else if (choice_player == 3 && (choice_computer == 4 || choice_computer == 1)){
        result = "YOU WIN";
    } else if (choice_player == 4 && (choice_computer == 2 || choice_computer == 0)){
        result = "YOU WIN";
    } else {
        result = "YOU LOSE";
    }
}