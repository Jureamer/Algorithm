/*
  문제명: 신규 아이디 추천
  
  문제설명:
    카카오에 입사한 신입 개발자 네오는 "카카오계정개발팀"에 배치되어, 카카오 서비스에 가입하는 유저들의 아이디를 생성하는 업무를 담당하게 되었습니다. "네오"에게 주어진 첫 업무는 새로 가입하는 유저들이 카카오 아이디 규칙에 맞지 않는 아이디를 입력했을 때, 입력된 아이디와 유사하면서 규칙에 맞는 아이디를 추천해주는 프로그램을 개발하는 것입니다.
    다음은 카카오 아이디의 규칙입니다.
    아이디의 길이는 3자 이상 15자 이하여야 합니다.
    아이디는 알파벳 소문자, 숫자, 빼기(-), 밑줄(_), 마침표(.) 문자만 사용할 수 있습니다.
    단, 마침표(.)는 처음과 끝에 사용할 수 없으며 또한 연속으로 사용할 수 없습니다.
    (...생략)
  링크: https://programmers.co.kr/learn/courses/30/lessons/72410?language=javascript
*/

// 문제풀이
function solution(new_id) {
  var answer = '';
  // 1단계 new_id의 모든 대문자를 대응되는 소문자로 치환합니다.
  answer = new_id.toLowerCase()
  
  // 2단계 new_id에서 알파벳 소문자, 숫자, 빼기(-), 밑줄(_), 마침표(.)를 제외한 모든 문자를 제거합니다.
  let step2 = new RegExp(/[^a-z0-9-_.]/,"g")
  answer = answer.replace(step2, "");
  
  // 3단계 new_id에서 마침표(.)가 2번 이상 연속된 부분을 하나의 마침표(.)로 치환합니다.
  let step3 = new RegExp(/[\.]{2,}/, "g")
  answer = answer.replace(step3,".");
  
  // 4단계 new_id에서 마침표(.)가 처음이나 끝에 위치한다면 제거합니다.
  let step4 = new RegExp(/^[.]|[.]$/, "g")
  answer = answer.replace(step4,"");
  
  // 5단계 new_id가 빈 문자열이라면, new_id에 "a"를 대입합니다.
  if(answer.length === 0) answer = 'a'
  
  // 6단계 new_id의 길이가 16자 이상이면, new_id의 첫 15개의 문자를 제외한 나머지 문자들을 모두 제거합니다.
  // 만약 제거 후 마침표(.)가 new_id의 끝에 위치한다면 끝에 위치한 마침표(.) 문자를 제거합니다.
  if(answer.length >= 16) answer = answer.substr(0, 15);
  answer = answer.replace(/\.$/,"");
  
  // 7단계 new_id의 길이가 2자 이하라면, new_id의 마지막 문자를 new_id의 길이가 3이 될 때까지 반복해서 끝에 붙입니다.
  let lastString = answer[answer.length-1]
  if(answer.length === 1) answer = answer.concat(lastString, lastString)
  else if(answer.length === 2) answer = answer.concat(lastString)

  return answer;
}

// test case 1 => "bat.y.abcdefghi"
console.log(solution("...!@BaT#*..y.abcdefghijklm"))

// test case 2 => "z--"
console.log(solution("z-+.^."))

// test case 3 => "aaa"
console.log(solution("=.="))

// test case 4 => "123_.def"
console.log(solution("123_.def"))

// test case 5 => "abcdefghijklmn"
console.log(solution("abcdefghijklmn.p"	))
