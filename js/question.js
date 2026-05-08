import { questions } from "../data/data.js";

// 사용할 태그를 변수에 지정
// ProgressBar의 value
const progressValue = document.querySelector(".progress .value");
const numberEl = document.querySelector(".number");
const questionEl = document.querySelector(".question");
const choice1El = document.querySelector(".choice1");
const choice2El = document.querySelector(".choice2");
// 1. EventListener를 두 개 붙인다.
choice1El.addEventListener("click", function () {
  nextQuestion(0);
});
choice2El.addEventListener("click", function () {
  nextQuestion(1);
});

// 현재의 질문 번호 생성
let currentNumber = 0;
// mbti 타입을 저장하는 변수
let mbti = "";

// 2. 질문 번호를 클릭하면 nextQuestion(누른 번호-색인)을 실행
function nextQuestion(choiceNumber) {
  // 먼저 현재 질문을 가져온다.
  const question = questions[currentNumber];
  // - 마지막 질문인지 검사해서 currentNumber를 하나 증가시킨다.
  if (currentNumber < questions.length - 1) {
    // - 결과를 mbti 변수에 저장한다.
    mbti = mbti + question.choices[choiceNumber].value;
    console.log(`mbti = ${mbti}`);
    // currentNumber를 하나 증가
    currentNumber = currentNumber + 1;
    // 다음 문제 그려주기
    renderQuestion();
  } else {
    // 3. 마지막 질문인지 확인해서 결과 페이지로 이동시킨다.
    // result.html - 출력: console: result.html로 이동
    // 마지막 문제인 경우 result.html?mbti=istj 이런 형식으로 보낸다
    showResultpage();
    return;
  }
}

function showResultpage() {
  // 쿼리 스트링을 만들어서 result.html에 전송... 호출
  location.href = `../result.html?mbti=${mbti}`;
}

function renderQuestion() {
  const question = questions[currentNumber];
  numberEl.innerHTML = question.number;
  questionEl.innerHTML = question.question;
  choice1El.innerHTML = question.choices[0].text;
  choice2El.innerHTML = question.choices[1].text;
  // style="width: 50%;"
  progressValue.style.width = (currentNumber + 1) * 10 + "%";
}

// 렌더 함수 호출
renderQuestion();
