const rulesbutton = document.querySelector(".rulesbutton");
const rules = document.querySelector(".rules");
const score = document.querySelector(".score__points");

let points = 0;


//show rules
rulesbutton.addEventListener('click', function(){
    rules.style.display = "flex";
});

//hide rules
rules.addEventListener('click', function(){
    rules.style.display = "none";
})

//show points
score.innerText = points;