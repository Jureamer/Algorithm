// 문제명: 행렬의 곱셈
// 문제설명: 2차원 행렬 arr1과 arr2를 입력받아, arr1에 arr2를 곱한 결과를 반환하는 함수, solution을 완성해주세요.
// 링크: https://programmers.co.kr/learn/courses/30/lessons/12949

// 문제풀이
/*  이 문제를 풀기 위해서는 기본적인 선형대수에 대한 지식이 필요함
    A는 m*n 행렬, B는 n*k 행렬이라고 가정한다면, A의 열의 수와 B의 행의 수가 같을 때만 두 행렬을 곱할 수 있다.
    그러면 일반적으로 행렬 A와 행렬 B를 곱한 행렬 C=AB는 m*k 행렬이 되고 C의 i행 j열의 원소를 다음과 같이 구한다.
    C[i][j] = A[i][1]B[1][j] + A[i][2]B[2][j] + ... + A[i][n]*B[n][j]
*/ 

function solution(arr1, arr2) {
  // answer 2차원 배열 초기화 (0으로 초기화해야 덧셈이 제대로 됨)
  let answer = Array.from(Array(arr1.length), () => new Array(arr2[0].length).fill(0));
  
  for(let i = 0; i < arr1.length; i++) {
    for(let j = 0; j < arr2[0].length; j++) {
      for(let count = 0; count < arr1[0].length; count++) {
        answer[i][j] += arr1[i][count] * arr2[count][j]    
      }
    }
  }
  return answer
};
// test case 1 =>	[[15, 15], [15, 15], [15, 15]]
console.log(solution([[1, 4], [3, 2], [4, 1]], [[3, 3], [3, 3]]));	

// test case 2 => [[22, 22, 11], [36, 28, 18], [29, 20, 14]]
console.log(solution([[2,3,2], [4,2,4], [3,1,4]], [[5,4,3], [2,4,1], [3,1,1]]));	