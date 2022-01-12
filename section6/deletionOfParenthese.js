/*
입력된 문자열에서 소괄호 ( ) 사이에 존재하는 모든 문자를 제거하고 남은 문자만 출력하는 프로그램을 작성하세요.

▣ 입력설명
첫 줄에 문자열이 주어진다. 문자열의 길이는 100을 넘지 않는다.

▣ 출력설명
남은 문자만 출력한다.
*/

function solution(s){  
    let answer ="";
    let stack=[];
    
    for(let i = 0; i < s.length; i++) {
      if(s[i] === '(') stack.push(s[i])
      else if(s[i] === ')') stack.pop()
      else if(stack.length === 0) {
        answer += s[i];
      }
    }

    return answer
}
let str="(A(BC)D)EF(G(H)(IJ)K)LM(N)";
console.log(solution(str));
