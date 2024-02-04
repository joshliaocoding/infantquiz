const questions =[
    {
        question: "下列何者不是藍色小寶寶會聽得Podcast節目？",
        answers: [
            {text: "文森說書", correct: false},
            {text: "財報狗", correct: true},
            {text: "下一本讀什麼", correct: false},
            {text: "股癌", correct: false},
        ]
    },
    {
        question: "嬰兒平常讀研究所看線上影片抄筆記，是哪一科的內容？",
        answers: [
            {text: "線性代數", correct: false},
            {text: "計算機概論", correct: true},
            {text: "微積分", correct: false},
            {text: "程式語言", correct: false},
        ]
    },
    {
        question: "藍色小嬰兒最喜歡喝哪一牌的奶茶？",
        answers: [
            {text: "金選奶茶", correct: true},
            {text: "立頓奶茶", correct: false},
            {text: "伯朗奶茶", correct: false},
            {text: "約克夏奶茶", correct: false},
        ]
    },
    {
        question: "請問嬰兒有那個奇怪的習慣？",
        answers: [
            {text: "睡前刷牙比白天久", correct: false},
            {text: "電腦不可以放在床上", correct: false},
            {text: "睡前不可以聽音樂", correct: false},
            {text: "擠番茄醬會擠出笑臉", correct: true},
        ]
    },
    {
        question: "請問嬰兒本人沒有下列哪項物品？",
        answers: [
            {text: "有笑臉的豆腐頭", correct: false},
            {text: "一顆地球儀", correct: false},
            {text: "黑色長袍大衣", correct: true},
            {text: "電影海報", correct: false}
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;


function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while (answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectAnswer = e.target;
    const isCorrect = selectBtn.dataset.correct === "true";
    if (isCorrect){
        selectBtn.classList.add("Correct");
    }else{
        selectBtn.classList.add("incorrect");
    }
}

startQuiz();