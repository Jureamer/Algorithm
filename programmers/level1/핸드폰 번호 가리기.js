// 문제명: 핸드폰 번호 가리기
// 문제설명: 프로그래머스 모바일은 개인정보 보호를 위해 고지서를 보낼 때 고객들의 전화번호의 일부를 가립니다.
// 전화번호가 문자열 phone_number로 주어졌을 때, 전화번호의 뒷 4자리를 제외한 나머지 숫자를 전부 *으로 가린 문자열을 리턴하는 함수, solution을 완성해주세요.
// 링크: https://programmers.co.kr/learn/courses/30/lessons/12948

//문제풀이

// 속도 0.1~0.2ms정도 느림
function solution(phone_number) {
  return phone_number.split("").map((each, idx, origin) => idx < origin.length - 4 ? "*" : each).join("")
}

// 속도 0.1~0.2ms정도 빠름
function solution2(phone_number) {
  return "*".repeat(phone_number.length - 4) + phone_number.slice(-4);
}

// test case 1 => "*******4444"
console.log(solution("01033334444"));

// test case 2 => "***8888"
console.log(solution("027778888"));