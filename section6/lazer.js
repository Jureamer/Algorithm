function solution(s){
    let answer=0;
    let stack=[];
    // '()'는 레이저를 뜻한다.
    // '(, )'가 각 양 끝점을 의미한다.
    // '((((() <-- 는 4개를 자른 것.
    for(let x of s) {
      if(x === '(') {
        stack.push(x);
      } else if(x === ')' && stack[stack.length - 1] === '(') { // 마지막 스택이 ')'면 pop을 하고 아니라면 스택에 쌓는다.
        stack.pop()
        answer += stack.length
      } else {
        stack.pop()
        answer++
      } 
    }
    return answer;
}



let a="(((()(()()))(())()))(()())";
console.log(solution(a));
