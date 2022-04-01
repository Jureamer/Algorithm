// 문제명: 로또의 최고 순위와 최저 순위
// 문제설명: 로또 6/45(이하 '로또'로 표기)는 1부터 45까지의 숫자 중 6개를 찍어서 맞히는 대표적인 복권입니다. 아래는 로또의 순위를 정하는 방식입니다... (생략)
// 링크: https://programmers.co.kr/learn/courses/30/lessons/77484?language=javascript

function solution(lottos, win_nums) {
  var answer = [];
  // 지워진 숫자 갯수 count
  let erased = 0;
  // 맞은 갯수 count
  let right = 0;
  
  // 순위를 구하는 함수
  function rank(number) {
      switch(number) {
        // 여러 조건을 걸 때는 아래와 같이 
          case 0 : case 1 :
              return 6;
              break;
          case 2 :
              return 5;
              break;
              
          case 3 : 
              return 4;
              break;
              
          case 4 : 
              return 3;
              break;
              
          case 5 : 
              return 2;
              break;
          case 6 : 
              return 1;
              break;
      }
  }
  
  lottos.forEach((select) => {
      // 해당 숫자가 0이라면 지워진 숫자에 count한다.
      if(select === 0) {
          erased++
      } else {
          win_nums.forEach((num) => {
              // select과 num이 같으면 맞춘 숫자에 1을 더 해주고 다음 숫자를 비교한다.
              if(select === num) {
                right++;
              }
          })  
      }
  })
  // 최고 순위는 맞은 갯수와 지워진 갯수의 합산
  answer[0] = rank(right + erased);
  // 최저 순위는 맞은 갯수로 계산
  answer[1] = rank(right);
  
  return answer;
}

console.log(solution([0, 0, 0, 0, 0, 0], [38, 19, 20, 40, 15, 25]))