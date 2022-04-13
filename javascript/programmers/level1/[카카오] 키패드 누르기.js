function solution(numbers, hand) {
  var answer = '';
  // 147 왼손 369 오른손
  // 그 외는 가까운 손가락 or 같은 거리일 땐 주 손으로 이용
  const rows = 3, 
    columns = 3;
  const keypad = [...Array(rows)].map((_, r)=>[...Array(columns)].map((_, c)=>r*columns+c+1));
  keypad.push(["*", 0, "#"]);
  
  const map = [...keypad];
  console.log(map);
  let leftHand = [4, 0];
  let rightHand = [4, 2];
  
  console.log(keypad)
  
  function leftPush (num) {
      answer = answer.concat('L');
      leftHand = num;
      console.log("왼쪽 손을 이동합니다.");
  }
  
  function rightPush (num) {
      answer = answer.concat('R');
      rightHand = num;
      console.log("오른쪽 손을 이동합니다.");
  }
  
  for(const num of numbers) {
      const leftDist = Math.abs(num - leftHand);
      const rightDist = Math.abs(num - rightHand);
      console.log("----------------계산시작-----------------");
      console.log("눌러야할 숫자 ===", num);
      console.log("왼쪽 현재위치: ", leftHand, "왼쪽과의 거리 ===", leftDist)
      console.log("오른쪽 현재위치: ", rightHand, "오른쪽과의 거리 ===", rightDist)
      if(num === 1 || num === 4 || num === 7) {
          leftPush(num)
      } else if(num === 3 || num === 6 || num === 9) {
          rightPush(num)
      } else {
        // 왼쪽이 더 가깝다면 
        if(leftDist < rightDist) {
          leftPush(num)
        // 오른쪽이 더 가깝다면
        } else if(leftDist > rightDist) {
          rightPush(num)
        // 거리가 같다면
        } else {
          if(hand === 'left') {
          leftPush(num)
          } else {
          rightPush(num)
          }
        }
      }
  }
  return answer;
}

console.log(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right"));