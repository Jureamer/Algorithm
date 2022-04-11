// 문제명: [카카오 인턴] 키패드 누르기
// 문제설명: 스마트폰 전화 키패드의 각 칸에 다음과 같이 숫자들이 적혀 있습니다...(생략)
// 링크: https://programmers.co.kr/learn/courses/30/lessons/67256

function solution(numbers, hand) {
  var answer = '';
  // 147 왼손 369 오른손
  // 그 외는 가까운 손가락 or 같은 거리일 땐 주 손으로 이용
  const rows = 3, 
        columns = 3;
  const keypad = [...Array(rows)].map((_, r)=>[...Array(columns)].map((_, c)=>r*columns+c+1));
  keypad.push(["*", 0, "#"]);
  const coordinate = {}
  for(let i = 0; i < keypad.length; i++) {
    for(let j = 0; j < keypad[0].length; j++) {
      coordinate[keypad[i][j]] = [i, j];
    }
  }
  
  let leftHand = "*";
  let rightHand = "#";
  
  function pushWithLeftHand (num) {
      answer = answer.concat('L');
      leftHand = num;
  }
  
  function pushWithRightHand (num) {
      answer = answer.concat('R');
      rightHand = num;
  }

  function calculateDist (num, numToPush) {
    const IdxOfNum = Object.keys(coordinate).findIndex((each) => each === String(num));
    const coordinateOfNum = Object.values(coordinate)[IdxOfNum];
    const IdxOfNumToPush = Object.keys(coordinate).findIndex((each) => each === String(numToPush));
    const coordinateOfNumToPush = Object.values(coordinate)[IdxOfNumToPush];
    const diffOfDist = Math.abs(coordinateOfNum[0]-coordinateOfNumToPush[0])+Math.abs(coordinateOfNum[1]-coordinateOfNumToPush[1]);
    return diffOfDist;
  }
  
  for(const num of numbers) {
    if(num === 1 || num === 4 || num === 7) {
        pushWithLeftHand(num)
    } else if(num === 3 || num === 6 || num === 9) {
        pushWithRightHand(num)
    } else {
      const leftDist = calculateDist(num, leftHand);
      const rightDist = calculateDist(num, rightHand);
      // 왼쪽이 더 가깝다면 
      if(leftDist < rightDist) {
        pushWithLeftHand(num)
      // 오른쪽이 더 가깝다면
      } else if(leftDist > rightDist) {
        pushWithRightHand(num)
      // 거리가 같다면
      } else {
        if(hand === 'left') {
        pushWithLeftHand(num)
        } else {
        pushWithRightHand(num)
        }
      }
    }
  }
  return answer;
}

// test case 1 =>  LRLLLRLLRRL
console.log(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right"));

// test case 2 => "LRLLRRLLLRR"
console.log(solution([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2],"left"));

// // test case 3 => 	"LLRLLRLLRL"
console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], "right"));