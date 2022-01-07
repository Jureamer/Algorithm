
function solution(test){
  // 일단 첫번째에서 모두 잘하는 경우의 수를 저장.
  // 다음 라운드에서 잘하는 사람이 바뀔 경우 바로 없앤다.
  // 첫번째 시험에서 꼴등은 절대 멘토를 할 수 없다
  // brute force로 문제를 풀어보자.
  let answer=0;
    let N = test.length; // 테스트 횟수
    let M = test[0].length; // 인원
    
    // 멘티, 멘토가 될 수 있는 경우의 수: 12 [i, j]
    for(let i = 1; i <= M; i++) {
      for(let j = 1; j <= N; j++) {
        if(i === j) continue; // 같은 사람이 멘토, 멘티를 할 수 없으니 제외
        let cnt = 0; // 등수 횟수 카운트
        for(let k = 0; k < N; k++) {
          let ri = rj = 0; // 등수 초기화
          for(let l = 0; l < M; l++) {
            if(test[k][l] === i) pi = l // l이 인원의 index
            if(test[k][l] === j) pj = l
          }
          if(pi < pj) cnt++
        }
        if(cnt === N) {
          console.log([i, j]);
          answer++
        }
      }
    }
    return answer;
}

let arr=[[3, 4, 1, 2], [4, 3, 2, 1], [3, 1, 4, 2]];
console.log(solution(arr));
