// 문제명: 숫자 문자열과 영단어
// 문제설명: 네오와 프로도가 숫자놀이를 하고 있습니다. 네오가 프로도에게 숫자를 건넬 때 일부 자릿수를 영단어로 바꾼 카드를 건네주면 프로도는 원래 숫자를 찾는 게임입니다.... (생략)
// 링크: https://programmers.co.kr/learn/courses/30/lessons/81301

function solution(s) {
  // 숫자 - 영어 매칭 문자 배열 선언 및 할당
  const alphabet = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']

  for (let i = 0; i < alphabet.length; i++) {
    // 프로그래머스는 replaceAll 문법 지원이 안되므로 정규식을 선언하고
    // 여러 개의 영어가 있을 수 있으므로 g옵션을 사용해 할당해준다.
      const regex = new RegExp(alphabet[i], "g"); 
      s = s.replace(regex, String(i))
  }
  const answer = Number(s);
  return answer;
}