/* 
  문제명: 행렬의 덧셈
  문제설명: 행렬의 덧셈은 행과 열의 크기가 같은 두 행렬의 같은 행, 같은 열의 값을 서로 더한 결과가 됩니다. 
          2개의 행렬 arr1과 arr2를 입력받아, 행렬 덧셈의 결과를 반환하는 함수, solution을 완성해주세요.

  링크: https://programmers.co.kr/learn/courses/30/lessons/12950
*/ 

// 문제풀이
function solution(arr1, arr2) {
  return arr1.map((value, index) => {
      return value.map((val, idx) => val + arr2[index][idx])
  })
}

// 좀 더 느림
function solution2(arr1, arr2) {
  const row = arr1.length;
  const col = arr1[0].length;
  let answer = Array.from(Array(row), () => new Array(col));

  for(let i = 0; i < arr1.length; i++) {
      for(let j = 0; j < arr1[i].length; j++) {
          answer[i][j] = arr1[i][j] + arr2[i][j]
      }
  }
  return answer;
}

// test case 1 => [[4,6],[7,9]]
console.log(solution([[1,2],[2,3]],[[3,4],[5,6]]));

// test case 2 =>	[[4],[6]]
console.log(solution([[1],[2]], [[3],[4]]));