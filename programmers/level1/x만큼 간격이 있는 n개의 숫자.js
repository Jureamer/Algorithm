// 문제명: x만큼 간격이 있는 n개의 숫자
// 문제설명: 함수 solution은 정수 x와 자연수 n을 입력 받아, x부터 시작해 x씩 증가하는 숫자를 n개 지니는 리스트를 리턴해야 합니다. 다음 제한 조건을 보고, 조건을 만족하는 함수, solution을 완성해주세요.
// 링크: https://programmers.co.kr/learn/courses/30/lessons/12954

// 문제풀이
function solution(x, n) {
  var answer = [];
  for(let i = 0; i < n; i++) {
      answer.push(x * (i + 1))
  }
  return answer;
}

function solution2(x, n) {
  return Array(n).fill(x).map((value, index) => value * (index + 1));
}

// test case 1 => [2,4,6,8,10]
console.log(solution2(2,5));	

// test case 2 => [4,8,12]
console.log(solution2(4, 3));	

// test case 3 => [-4,-8]
console.log(solution2(-4,2));	