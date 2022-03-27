// 문제명: 문자열 압축
// 문제설명: 데이터 처리 전문가가 되고 싶은 "어피치"는 문자열을 압축하는 방법에 대해 공부를 하고 있습니다. 
// 최근에 대량의 데이터 처리를 위한 간단한 비손실 압축 방법에 대해 공부를 하고 있는데, 문자열에서 같은 값이 연속해서 나타나는 것을 
// 그 문자의 개수와 반복되는 값으로 표현하여 더 짧은 문자열로 줄여서 표현하는 알고리즘을 공부하고 있습니다.(...생략)
// 링크: https://programmers.co.kr/learn/courses/30/lessons/60057

function solution(s) {
  let answer = 0;
  let lengthArr = [];

  for(let i = 1; i <= s.length; i++) {
    lengthArr.push(compressedString(s, i).length);
  }

  answer = Math.min(...lengthArr);
  return answer;
}

function compressedString(str, digit){
  let count = 1;
  let result = [''];
  for(let num = 0; num <= str.length / digit; num++) {
    const chr = str.slice(digit * num, digit * num + digit);
    if(result[result.length - 1] === chr) {
      count++
    } else {
      // count가 2 이상이면 count + 문자 합친 값을 할당
      if(count > 1) {
        result[result.length - 1] = count + result[result.length - 1]
      }
      result.push(chr)
      count = 1;
    }
  }
  return result.join('');
}
// 테스트
console.log(solution("aabbaccc"));