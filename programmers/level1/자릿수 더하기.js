/*
  문제명: 자릿수 더하기
  문제 설명
    자연수 N이 주어지면, N의 각 자릿수의 합을 구해서 return 하는 solution 함수를 만들어 주세요.
    예를들어 N = 123이면 1 + 2 + 3 = 6을 return 하면 됩니다.

  제한사항
    N의 범위 : 100,000,000 이하의 자연수
  링크: https://programmers.co.kr/learn/courses/30/lessons/12931
*/

// 문제 풀이 1
function solution(n){
  let answer = 0;
  let str = n.toString()
  for(let i = 0; i < str.length; i++) {
      answer += Number(str[i])
  }
  return answer
}

// 문제 풀이 2
function solution2(n){
  
  return (n + "").split("").reduce((acc, cur) => acc + Number(cur), 0);
}

// test case 1 => 6
console.log(solution(123));

// test case 2 => 24
console.log(solution(987));


