/*
  문제명: 체육복
  문제설명:
    점심시간에 도둑이 들어, 일부 학생이 체육복을 도난당했습니다. 다행히 여벌 체육복이 있는 학생이 이들에게 체육복을 빌려주려 합니다. 
    학생들의 번호는 체격 순으로 매겨져 있어, 바로 앞번호의 학생이나 바로 뒷번호의 학생에게만 체육복을 빌려줄 수 있습니다. 
    예를 들어, 4번 학생은 3번 학생이나 5번 학생에게만 체육복을 빌려줄 수 있습니다. 체육복이 없으면 수업을 들을 수 없기 때문에 체육복을 적절히 빌려 최대한 많은 학생이 체육수업을 들어야 합니다.
    전체 학생의 수 n, 체육복을 도난당한 학생들의 번호가 담긴 배열 lost, 여벌의 체육복을 가져온 학생들의 번호가 담긴 배열 reserve가 매개변수로 주어질 때, 
    체육수업을 들을 수 있는 학생의 최댓값을 return 하도록 solution 함수를 작성해주세요.
  링크: https://programmers.co.kr/learn/courses/30/lessons/42862
*/

// 문제풀이
function solution(n, lost, reserve) {
  var answer = 0;
  let gymClothes = new Array(n).fill(1)
  
  // 도난 처리 
  for(let i = 0; i < lost.length; i++) {
      // 도난 당한 학생의 순번
      const lostIdx = lost[i]-1;
      // 도난처리 gymclothes-1
      gymClothes[lostIdx] = gymClothes[lostIdx] - 1
  }
  
  // 여분 처리
  for(let i = 0; i < reserve.length; i++) {
      const reserveIdx = reserve[i]-1;
      gymClothes[reserveIdx] = gymClothes[reserveIdx] + 1
  }
  
  // 체육복 나눠주기
  for(let i = 0; i < gymClothes.length; i++) {
      if(gymClothes[i] === 0) {
          if(gymClothes[i-1] >= 2) {
              gymClothes[i] = gymClothes[i] + 1
              gymClothes[i-1] = gymClothes[i-1] - 1
          } else if(gymClothes[i+1] >= 2) {
              gymClothes[i] = gymClothes[i] + 1
              gymClothes[i+1] = gymClothes[i+1] - 1
          }
      }
  }
  
  return gymClothes.filter((num, _) => num >= 1).length
}

// test case 1 => 5
console.log(solution(5,[2, 4],[1, 3, 5]))

// test case 2 => 4
console.log(solution(5,[2, 4],[3]))

// test case 3 => 2
console.log(solution(3,[3],[1]))