// 문제명: 문자열 다루기 기본
// 문제 설명: 문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인해주는 함수, solution을 완성하세요. 
// 예를 들어 s가 "a234"이면 False를 리턴하고 "1234"라면 True를 리턴하면 됩니다.
// 링크: https://programmers.co.kr/learn/courses/30/lessons/12918

// 문제풀이
function solution(s) {
  // ^, $ 값을 같이 넣을 경우 전체를 의미
  // d${4} | ${6} 숫자이고 길이가 4 또는 6을 의미
  return /^\d{4}$|^\d{6}$/.test(s)
}
