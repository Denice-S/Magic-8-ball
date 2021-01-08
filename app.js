const answers = ["It's Cupcakes and Rainbows!",
    "You've totally got this",
    "You are awesome!",
    "Absolutely!",
    "Think Positive.",
    "Marvellous!",
    "Most likely",
    "Outlook good",
    "Sunshine is on its way!",
    "Don't be so negative",
    "Smile!",
    "There's always a bright side!",
    "It's an Adventure!",
    "Open that door...who knows!",
    " You are special !",
    "Keep Smiling!",
    "Follow that rainbow!",
    "Its perfect.",
    "Believe in yourself!"];


let eight = document.getElementById("eight");
let answer = document.getElementById("answer");
let start = document.getElementById("start");
let retry = document.getElementById("reset");
let question = document.getElementById("question");

start.addEventListener("click", shake);
retry.addEventListener("click", again);

function shake() {
    if (question.value.length < 1) {
        alert('Enter a question!');
    } else {
        eight.innerText = "";
        document.getElementById("eight-ball").classList.add("shake");
        setTimeout(function () {
            document.getElementById("eight-ball").classList.remove("shake");
        }, 1200);
        setTimeout(function () {
            answer.classList.add("fade-in");
            let num = Math.floor(Math.random() * Math.floor(answers.length));
            answer.innerText = answers[num];
        }, 2000);
        start.classList.add("hide");
    }
};

//this needs to clear the input box, clear the answer message and set the ball back to 8 and unhide shake button
function again() {
    eight.innerText = "8";
    question.value = "";
    answer.textContent = "";
    start.classList.remove("hide");

}