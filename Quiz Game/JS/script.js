const questionList = ["1. HTML stands for?",
    "2. Father of Java?",
    "3. Which of the following is not an HTML tag?",
    "4. Dynamic web page:",
    "5. Which of the following colors contain equal amounts of RGB?",
    "6. What is the correct syntax to write an HTML comment?",
    "7. What is the effect of the &lt;b&gt; tag?",
    "8. What is the select tag used for?",
    "9. Which HTML attribute is used to make a &lt;div&gt; element editable by the user?",
    "10. Which CSS property aligns items horizontally within container?"];

const optionList = [["Higher Text Markup Language", "Hyper Text Markup Language", "Hyper Text Marker Language", "Higher Text Marker Language"],
["Sir Brendan Eich", "Sir Guido van Rossum", "Sir James Gosling", "Sir Tim Berners Lee"],
["&lt;a&gt;", "&lt;div&gt;", "&lt;span&gt;", "&lt;heading&gt;"],
["Is same every time whenever it displays", "Generates on demand by a program or a request from browser", "Both", "None"],
["White", "Gray", "Black", "All of the above"],
["&lt;!-- Comment --&gt;", "// Comment", "# Comment", "/* Comment */"],
["It converts the text within it to bold font", "It is used to write black-colored font", "It is used to change font size", "None of the above"],
["Change text font", "Select some attributes and change their style", "Creates a combo box", "None of the above"],
["editable-content", "editable", "contenteditable", "user-editable"],
["align-items", "justify-content", "align-content", "align-self"]];

const correctAnswerList = ["2", "3", "4", "2", "4", "1", "1", "3", "3", "2"];

const main = document.getElementById("container");
const question = document.getElementById("question");
const currentQues = document.getElementById("currentQues");
const totalQues = document.getElementById("totalQues");
const submit = document.getElementById("submit");
const life = document.getElementById("life_counter");
const emoji = document.getElementById("mood");
const resultTitle = document.getElementById("resultTitle");

let i = 0, option;
let total_life = 3;

function startingQuiz() {
    for (let r = 1; r <= 4; r++) {
        document.getElementById(r).style.borderColor = "";
        document.getElementById(r).style.backgroundColor = "";
        document.getElementById(r).classList.remove('disabled');
    }
    question.innerHTML = questionList[i];
    for (let r = 1; r <= 4; r++) {
        document.getElementById(r).innerHTML = optionList[i][r - 1];
    }
    currentQues.innerHTML = i + 1;
    totalQues.innerHTML = questionList.length;
    submit.classList.add('disabled');
    submit.style.backgroundColor = "lightgray";
    submit.innerHTML = "CHECK";
    submit.style.display = "inline-flex";
    submit.onclick = submitFun;
}

function selectOption(opt) {
    for (let j = 1; j <= 4; j++) {
        if (j != opt) {
            document.getElementById(j).style.borderColor = "";
            document.getElementById(j).style.backgroundColor = "";
        }
    }
    document.getElementById(opt).style.borderColor = "rgba(44, 153, 242)";
    document.getElementById(opt).style.backgroundColor = "rgba(44, 153, 242, 0.1)";
    submit.classList.remove('disabled');
    submit.style.backgroundColor = "rgba(44, 153, 242)";
    option = opt;
}

function submitFun() {

    if (option === correctAnswerList[i]) {
        document.getElementById(correctAnswerList[i]).style.borderColor = "rgb(60, 221, 60)";
        document.getElementById(correctAnswerList[i]).style.backgroundColor = "rgb(60, 221, 60, 0.1)";
    }
    else {
        document.getElementById(option).style.borderColor = "rgb(254, 52, 52)";
        document.getElementById(option).style.backgroundColor = "rgb(254, 52, 52, 0.1)";
        total_life--;
    }
    for (let k = 1; k <= 4; k++) {
        document.getElementById(k).classList.add('disabled');
    }
    life.innerHTML = " " + total_life;
    if (option === correctAnswerList[i]) {
        submit.innerHTML = "CONTINUE";
        submit.style.backgroundColor = "rgb(60, 221, 60)";
        submit.onclick = nextQues;
        if (i == questionList.length - 1) {
            main.classList.add('disabled');
            main.style.animation = "blurAnim 1s ease forwards";
            mood.innerHTML = '<i class="fa-solid fa-face-smile" style="color: #FFD43B;"></i>';
            resultTitle.innerHTML = "You  Won";
            resultBox.style.display = "inline-flex";
        }
    }
    else {
        submit.innerHTML = "RETRY";
        submit.style.backgroundColor = "rgb(254, 52, 52)";
        submit.onclick = startingQuiz;
        if (total_life == 0) {
            main.classList.add('disabled');
            main.style.animation = "blurAnim 1s ease forwards";
            mood.innerHTML = '<i class="fa-solid fa-face-sad-tear" style="color: #FFD43B;"></i>';
            resultTitle.innerHTML = "You  Lost";
            resultBox.style.display = "inline-flex";
        }
    }
}

function nextQues() {
    if (i < questionList.length - 1) {
        i++;
        startingQuiz();

    }
}

function replayFun() {
    location.reload();
}