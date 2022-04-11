/* 
  문제명: 약수의 합
  문제설명: 
    정수 n을 입력받아 n의 약수를 모두 더한 값을 리턴하는 함수, solution을 완성해주세요.
  링크: https://programmers.co.kr/learn/courses/30/lessons/42840
*/

// 문제풀이 1
function solution(n) {
  var answer = n
  for(let i = 1; i <= n / 2; i++) {
      if(n % i === 0) answer += i
  }
  return answer;
}

// test case 1 ==> 28
console.log(solution(12));

// test case 2 ==> 6
console.log(solution(5));
