// 문제명: 124나라의 숫자
// 문제설명: 124 나라가 있습니다. 124 나라에서는 10진법이 아닌 다음과 같은 자신들만의 규칙으로 수를 표현합니다.
// 124 나라에는 자연수만 존재합니다.
// 124 나라에는 모든 수를 표현할 때 1, 2, 4만 사용합니다.
// 예를 들어서 124 나라에서 사용하는 숫자는 다음과 같이 변환됩니다.
// 링크: https://programmers.co.kr/learn/courses/30/lessons/12899


function solution(n) {
  var answer = '';
  // 나머지가 0이면 4, 1이면 1, 2면 2
  const oneTwoFour = ['4','1','2']
  
  // n이 0이 되면 종료
  while (n > 0) {
      // 나머지
      const remainder = n % 3
      // string으로 변환
      answer = oneTwoFour[remainder] + answer;
      n = Math.floor((n-1)/3) //나누어떨어지지 않을 때에도 -1해도 상관없음
  }
  return answer;
}