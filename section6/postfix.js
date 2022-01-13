/*
후위연산식이 주어지면 연산한 결과를 출력하는 프로그램을 작성하세요.
만약 3*(5+2)-9 을 후위연산식으로 표현하면 352+*9- 로 표현되며 그 결과는 12입니다.

▣ 입력설명
첫 줄에 후위연산식이 주어집니다. 연산식의 길이는 50을 넘지 않습니다. 식은 1~9의 숫자와 +, -, *, / 연산자로만 이루어진다.
*/
function solution(s){  
  let answer;
  let stack=[];

  for(let i = 0; i < s.length; i++) {
    // 숫자인 string을 Number로 변환하여 push
    if(!isNaN(s[i])) stack.push(Number(s[i]));
    else {
    // 문자일경우 stack에서 pop하여 계산한 뒤 다시 넣어준다.
    const rt = stack.pop();
    const lt = stack.pop();
    if(s[i] === '*') stack.push(lt * rt);
    else if(s[i] === '/') stack.push(lt / rt); 
    else if(s[i] === '+') stack.push(lt + rt); 
    else if(s[i] === '-') stack.push(lt - rt); 
    }
    console.log("stack ====", stack);
  }
  return stack[0];
}
let str="352+*9-";
console.log(solution(str));