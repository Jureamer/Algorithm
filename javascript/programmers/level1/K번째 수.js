/* 
  문제명: K번째 수
  문제설명: 
    배열 array의 i번째 숫자부터 j번째 숫자까지 자르고 정렬했을 때, k번째에 있는 수를 구하려 합니다.
    예를 들어 array가 [1, 5, 2, 6, 3, 7, 4], i = 2, j = 5, k = 3이라면
    array의 2번째부터 5번째까지 자르면 [5, 2, 6, 3]입니다.
    1에서 나온 배열을 정렬하면 [2, 3, 5, 6]입니다.
    2에서 나온 배열의 3번째 숫자는 5입니다.
    배열 array, [i, j, k]를 원소로 가진 2차원 배열 commands가 매개변수로 주어질 때, commands의 모든 원소에 대해 앞서 설명한 연산을 적용했을 때 나온 결과를 배열에 담아 return 하도록 solution 함수를 작성해주세요.
  링크: https://programmers.co.kr/learn/courses/30/lessons/42748
*/ 

// 문제 풀이
function solution(array, commands) {
  let answer = [];
  
  for(let i = 0; i < commands.length; i++) {
      // 배열에서 자를 숫자의 시작
      const startNum = commands[i][0]; 
      // 배열에서 자를 숫자의 끝
      const endNum = commands[i][1]; 
      // 정렬된 arr의 index
      const cuttingNum = commands[i][2]; 
      
      // 자르기
      const cuttedArr = array.slice(startNum -1, endNum); 
      // 오름차순 정렬 sort()로만 했을 경우, 문자열의 유니코드 코드 포인트순으로 정렬
      const sortedArr = cuttedArr.sort((a, b) => a- b); 
      // 정렬된 배열에서 더할 숫자
      const numToAdd = sortedArr[cuttingNum - 1];
      answer.push(numToAdd);
  }
  return answer;
}

// test case =>  [5, 6, 3]
console.log(solution([1, 5, 2, 6, 3, 7, 4],[[2, 5, 3], [4, 4, 1], [1, 7, 3]]))