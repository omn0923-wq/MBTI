import { results, mbtis } from "../data/data.js";

// 쿼리 스트링을 가져와서 변수에 저장
const mbti = new URLSearchParams(location.search).get("mbti");
console.log(mbti);
// 클래스 접근자 중 문자열로 접근하기 위해서 []를 사용
console.log(results[mbtis[mbti]]);
const result = results[mbtis[mbti]];

// 변경할 태그를 읽어서 변수로 할당
const title = document.querySelector(".page-title");
const characterEl = document.querySelector(".character");

// 강의태그
const lectureEl = document.querySelector(".lecture");

// 강의 및 이미지 태그
const lectureImgEl = document.querySelector(".lecture img");

// 여러 개 읽어서 한꺼번에 배열에 넣어준다.
// 우리는 forEach 돌려서 처리한다.
const jobElements = document.querySelectorAll(".job");
const boxEls = document.querySelectorAll(".box");

title.innerHTML = result.title;
// 1. 결과의 메인 캐릭터 수정
characterEl.src = result.character;
// 2. result 결과 4개 자리
boxEls.forEach((box, index) => {
  box.innerHTML = result.results[index];
});

jobElements.forEach((job, index) => {
  job.innerHTML = result.jobs[index];
});

// 3. 강의 URL 수정
lectureEl.href = result.lectureUrl;
// 4. 강의 이미지 수정
lectureImgEl.src = result.lectureImg;
