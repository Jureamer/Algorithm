// 문제명: 없는 숫자 더하기
// 문제설명: 0부터 9까지의 숫자 중 일부가 들어있는 정수 배열 numbers가 매개변수로 주어집니다. 
// numbers에서 찾을 수 없는 0부터 9까지의 숫자를 모두 찾아 더한 수를 return 하도록 solution 함수를 완성해주세요.
// 링크: https://programmers.co.kr/learn/courses/30/lessons/86051

function solution(numbers) {
  var answer = -1
  // 0~9까지 포함한 배열을 선언하고 할당한다.
  let numberArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  
  // filter 메소드를 이용해 0~9까지의 숫자가 numbers에 포함되어있는 지 체크
  answer = numberArr.filter((each) => {
      return !numbers.includes(each)
  // filter된 값을 reduce를 이용하여 더 해준뒤 return한다.
  }).reduce((acc, cur) => acc + cur)
  
  return answer;
}


// 좋았던 다른사람의 풀이
// 해석: 0~9까지의 합이 45라는 점과, numbers에는 0~9까지 각 하나씩만 들어가기때문에 바로 reduce를 사용하여 빼주었다.
// 문제를 정확히 인지하고 이해한 뒤 나온 깔끔한 풀이였던 것 같다..! 
function solution(numbers) {
  return 45 - numbers.reduce((cur, acc) => cur + acc, 0);
}