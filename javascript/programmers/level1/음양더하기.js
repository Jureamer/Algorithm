// 문제명: 음양더하기
// 문제설명: 어떤 정수들이 있습니다. 이 정수들의 절댓값을 차례대로 담은 정수 배열 absolutes와
// 이 정수들의 부호를 차례대로 담은 불리언 배열 signs가 매개변수로 주어집니다.
// 실제 정수들의 합을 구하여 return 하도록 solution 함수를 완성해주세요.
// 링크: https://programmers.co.kr/learn/courses/30/lessons/76501

function solution(absolutes, signs) {
  return signs.reduce((acc, cur, i) => acc + (cur ? absolutes[i] : -absolutes[i]), 0);
}

// test case 1 ==> 9
console.log(solution([4, 7, 12], [true, false, true]));
// test case 2 == > 0
console.log(solution([1, 2, 3], [false, false, true]));
