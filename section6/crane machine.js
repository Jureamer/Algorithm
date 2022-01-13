function solution(board, moves){
  let answer=0;
  let stack=[];
  // moves배열을 돌면서 해당 값을 board[i][?]의 ?값으로 보고
  // board[i][?]가 0보다 큰 경우에 해당 숫자를 집는다.
  // 해당 숫자를 집어 stack에 쌓고 stack[length-1], stack[length-2]가 같을 경우
  // 터뜨려준다 pop() 2번
  // move의 길이가 끝날 때까지 반복한다.

  // stack에 쌓인 마지막 2개가 같으면 터뜨려준다.
  const isPop = (stack) => {
    let N = stack.length;
    let pop = 0;
    
    while(stack[stack.length-2] === stack[stack.length-1]) {
      console.log("터뜨리기 작업 시작!!!!")
      stack.pop();
      stack.pop();
      pop += 2;
    }
    return pop
  }

  for(let i = 0; i < moves.length; i++) {
    let p = moves[i];
    
    for(let j = 0; j < board.length; j++) {
      // console.log("p ===", p, "j ====", j );
      // console.log("board[j][p-1]=====", board[j][p-1]);
      if(board[j][p-1] > 0) {
        stack.push(board[j][p-1]); // stack에 담는다.
        board[j][p-1] = 0; // board[j][p]를 빈칸으로 바꿔준다.
        answer += isPop(stack);
        break;
      }
      console.log("stack ===", stack)
    }
  }             
  return answer;
}

let a=[[0,0,0,0,0],
      [0,0,1,0,3],
      [0,2,5,0,1],
      [4,2,4,4,2],
      [3,5,1,3,1]];

let b=[1, 5, 3, 5, 1, 2, 1, 4];
console.log(solution(a, b));
