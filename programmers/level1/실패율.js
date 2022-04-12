/* 
  문제명: 실패율
  문제설명: 
    슈퍼 게임 개발자 오렐리는 큰 고민에 빠졌다. 그녀가 만든 프랜즈 오천성이 대성공을 거뒀지만, 요즘 신규 사용자의 수가 급감한 것이다. 
    원인은 신규 사용자와 기존 사용자 사이에 스테이지 차이가 너무 큰 것이 문제였다.
    이 문제를 어떻게 할까 고민 한 그녀는 동적으로 게임 시간을 늘려서 난이도를 조절하기로 했다. 
    역시 슈퍼 개발자라 대부분의 로직은 쉽게 구현했지만, 실패율을 구하는 부분에서 위기에 빠지고 말았다. 오렐리를 위해 실패율을 구하는 코드를 완성하라. 
    
    실패율은 다음과 같이 정의한다.
    스테이지에 도달했으나 아직 클리어하지 못한 플레이어의 수 / 스테이지에 도달한 플레이어 수
    전체 스테이지의 개수 N, 게임을 이용하는 사용자가 현재 멈춰있는 스테이지의 번호가 담긴 배열 stages가 매개변수로 주어질 때, 
    실패율이 높은 스테이지부터 내림차순으로 스테이지의 번호가 담겨있는 배열을 return 하도록 solution 함수를 완성하라.
    (...생략)
  링크: https://programmers.co.kr/learn/courses/30/lessons/77884
*/

// 문제풀이
function solution(N, stages) {
  var answer = [];

  let probability = new Array(N+1).fill(0);
  for(let i = 1; i <= N; i++) {
      let failure = 0;
      let challenger = 0;

      for(let j = 0; j < stages.length; j++) {
          // 스테이지 숫자와 같거나 높은 사람은 'challenger'
          if(i <= stages[j]) {
              challenger++
              // 스테이지 숫자와 같은 사람은 'failure'
              if(i === stages[j]) {
                  failure++         
              }
          }
      }
      // 실패율 예외 처리
      if(challenger === 0 || failure === 0 ) probability[i] = 0;
      else probability[i] = failure / challenger     
  }
  // 반복을 위한 count 선언
  let count = 0;
  // 확률순 정렬
  while(count < probability.length) {
    let max = -1;
    let idx = 0;
    for(let i = 1; i < probability.length; i++) {
      if(probability[i] > max) {
        max = probability[i]
        idx = i
      }
    }
    // 정답에 실패확률이 큰 값부터 push
    answer.push(idx);
    // 기존 값은 사용(-1) 처리
    probability[idx] = -1;
    // 반복값 ++
    count++
  }
  // index 정리 (마지막 값 삭제)
  return answer.slice(0, answer.length-1)
}

// test case 1 => [3,4,2,1,5]
console.log(solution(5,[2, 1, 2, 6, 2, 4, 3, 3]))

// test case 2 => [4,1,2,3]
console.log(solution(4,[4,4,4,4,4]))

// test case 2 => [3, 2, 1, 4]
console.log(solution(4, [1, 2, 3, 2, 1]))
