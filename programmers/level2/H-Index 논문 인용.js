/*
  문제명: H-Index
  문제설명: H-Index는 과학자의 생산성과 영향력을 나타내는 지표입니다. 
          어느 과학자의 H-Index를 나타내는 값인 h를 구하려고 합니다. 위키백과1에 따르면, H-Index는 다음과 같이 구합니다.
          어떤 과학자가 발표한 논문 n편 중, h번 이상 인용된 논문이 h편 이상이고 나머지 논문이 h번 이하 인용되었다면 h의 최댓값이 이 과학자의 H-Index입니다. (...생략)
  링크: https://programmers.co.kr/learn/courses/30/lessons/42747
*/

// 문제풀이
function solution(citations) {
  var answer = 0;
  // H-Index 변수
  // 오름차순 정렬
  citations = citations.sort((a, b) => b-a);
  
  for(let i = 0; i < citations.length; i++) {
    if(answer >= citations[i]) return answer
    else answer++
  }
  return answer
}

// test case 1 => 1
console.log(solution([3, 0, 6, 1, 5]))

// test case 2 => 7
console.log(solution([3, 4, 5, 11, 15, 16, 17, 18, 19, 20]))
