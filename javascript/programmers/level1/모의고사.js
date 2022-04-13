// 문제명: 모의고사
/* 문제설명: 수포자는 수학을 포기한 사람의 준말입니다. 수포자 삼인방은 모의고사에 수학 문제를 전부 찍으려 합니다. 수포자는 1번 문제부터 마지막 문제까지 다음과 같이 찍습니다.
  1번 수포자가 찍는 방식: 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, ...
  2번 수포자가 찍는 방식: 2, 1, 2, 3, 2, 4, 2, 5, 2, 1, 2, 3, 2, 4, 2, 5, ...
  3번 수포자가 찍는 방식: 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, ...
*/
// 링크: https://programmers.co.kr/learn/courses/30/lessons/42840

// 문제풀이 1
function solution(answers) {
  var answer = [];
  let supoja1 = 0, supoja2 = 0, supoja3 = 0,
  supoja1Count = 0, supoja2Count = 0, supoja3Count = 0;
  
  for(let i = 1; i <= answers.length; i++) {

    supoja1 = i % 5 === 0 ? 5 : i % 5;
    supoja3 = [5, 3, 3, 1, 1, 2, 2, 4, 4, 5][i%10];

    // 홀수면 2
    if(i % 2 === 1) supoja2 = 2;
    // 짝수면 8으로 나눈 나머지가 
    else if(i % 8 / 2 >= 2) supoja2 = i % 8 / 2 + 1;
    else if(i % 8 / 2 === 1) supoja2 = i % 8 / 2; 
    else if(i % 8 / 2 === 0) supoja2 = 5;
    
    if(supoja1 === answers[i-1]) supoja1Count++
    if(supoja2 === answers[i-1]) supoja2Count++
    if(supoja3 === answers[i-1]) supoja3Count++
  }
  
  let maxCount = Math.max(supoja1Count, supoja2Count, supoja3Count);
  
  if(supoja1Count === maxCount) answer.push(1);
  if(supoja2Count === maxCount) answer.push(2);
  if(supoja3Count === maxCount) answer.push(3);
  
  return answer;
}

// 문제풀이2
function solution2(answers) {
  var answer = [];
  const a = [1, 2, 3, 4, 5];
  const b = [2, 1, 2, 3, 2, 4, 2, 5];
  const c = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  
  const supoja1Count = answers.filter((answer, i) => answer === a[i%a.length]).length;
  const supoja2Count = answers.filter((answer, i) => answer === b[i%b.length]).length;
  const supoja3Count = answers.filter((answer, i) => answer === c[i%c.length]).length;
  
  let maxCount = Math.max(supoja1Count, supoja2Count, supoja3Count);
  
  if(supoja1Count === maxCount) answer.push(1);
  if(supoja2Count === maxCount) answer.push(2);
  if(supoja3Count === maxCount) answer.push(3);
  
  return answer;
}

// test case 1 ==> [1]
console.log(solution([1,2,3,4,5]));

// test case 2 ==> [1, 2, 3]
console.log(solution([1,3,2,4,2]));

// test case 3 ==> [3]
console.log(solution([3, 3, 2, 1, 5]));

// test case 4 ==> [1,2,3] 
console.log(solution([5, 5, 4, 2, 3]));
