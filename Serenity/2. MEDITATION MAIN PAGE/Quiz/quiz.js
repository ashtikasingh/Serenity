const quizData = [
    {
        question: "Cleanliness, physical exercise, rest and sleep are a part of ________.",
        a: "Hygiene",
        b: "Social hygiene",
        c: "Personal hygiene",
        d: "None of the above",
        correct: "c",
    },
    {
        question: "Which one of the following is an unhealthy habit?",
        a: "Sharing food",
        b: "Bathing twice a day",
        c: "Drinking boiled water",
        d: "Eating without washing one’s hand",
        correct: "d",
    },
    {
        question: "Which of the following factors is necessary for a healthy person?",
        a: "Vaccination",
        b: "Balanced diet",
        c: "Personal hygiene",
        d: "All of the above",
        correct: "d",
    },
    {
        question: "What is one of the best ways to help calm yourself down when you feel angry/stressed/sad, etc?",
        a: "Practice mindful breathing",
        b: "Close your eyes",
        c: "Go to a safe space",
        d: "All of the above.",
        correct: "d",
    },
    {
        question: "Mindfulness has also been found to boost which important coping mechanism for positive emotional wellness",
        a: "Avoidance",
        b: "Resilience",
        c: "Crying",
        d: "Denial",
        correct: "b",
    },
    {
        question: "If your mind wanders during meditation, you should",
        a: "Start over from the beginning",
        b: "Think about why it keeps happening",
        c: "Refocus on your breathing",
        d: "Try a different meditation pose",
        correct: "c",
    },
    {
        question: "Mindfulness helps us focus on:",
        a: "The past",
        b: "The present ",
        c: "The future",
        d: "All of these",
        correct: "b",
    },
    {
        question: "Similar to playing a musical instrument, mindful meditation",
        a: "Requires special equipment",
        b: "Should be done alone ",
        c: "Is too difficult for most people",
        d: "Can improve the more you do it ",
        correct: "d",
    },
    {
        question: "Mindful practice can help you ___ strong emotions in difficult situations",
        a: "Ignore",
        b: "Push Down ",
        c: "Deal with",
        d: "Boost",
        correct: "c",
    },
    {
        question: "Mindfulness is...",
        a: "having a mind full of thoughts",
        b: "paying attention, on purpose, in the present moment ",
        c: "being calm all the time",
        d: "paying attention to only negative stuff and just ignoring it",
        correct: "b",
    },


];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered correctly at <br> ${score}/${quizData.length} <br> questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});