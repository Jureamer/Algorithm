// 문제명: 가장 큰 수
// 문제설명: 0 또는 양의 정수가 주어졌을 때, 정수를 이어 붙여 만들 수 있는 가장 큰 수를 알아내 주세요.
// 예를 들어, 주어진 정수가 [6, 10, 2]라면 [6102, 6210, 1062, 1026, 2610, 2106]를 만들 수 있고, 이중 가장 큰 수는 6210입니다. (...생략)
// 링크: https://programmers.co.kr/learn/courses/30/lessons/42746#


// 문제풀이: sorting 함수를 이용해 두 문자의 합을 비교해 정렬함.
function solution(numbers) {
  var answer = '';
  for(let i = 0; i < numbers.length; i++) {
    numbers[i] = numbers[i].toString();
  }
  numbers.sort((sorting)); //정렬
  numbers.forEach((number)=>{
      answer+=number;
  })
  
  if(answer[0] === "0") return '0';
  return answer;
}

function sorting(a, b) {
  if(a + b > b + a) return -1;
  if(a + b < b + a) return 1;
  if(a + b === b + a) return 0;
}

console.log(solution([6, 10, 2]))