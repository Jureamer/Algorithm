function solution(numbers, target) {
  // +혹은 -2가지의 경우를 numbers[i]에 모두 대입해서 
  // target이 되는 경우 return
  // 초기 값은 numbers[0]의 +, - 값
  let sumArr = [numbers[0], -numbers[0]];
  let copiedSumArr = [];
  
  // numbers[1]부터 반복한다.
  for(let i = 1; i < numbers.length; i++) {
      // copy
      copiedSumArr = sumArr.slice()
      // sumArr에 새로운 대입 값을 넣어주기 위해 초기화
      sumArr = [];
      // 복사한 copiedSumArr 길이만큼 반복
      for(let j = 0; j < copiedSumArr.length; j++) {
          // 덧셈
          let addition = copiedSumArr[j] + numbers[i]
          // 빼셈
          let subtraction = copiedSumArr[j] - numbers[i]

          // 다시 sumArr에 push 해준다. 경우의 수는 2제곱으로 늘어남
          sumArr.push(addition);
          sumArr.push(subtraction);        
      }
      copiedSumArr = [];
  }
  // 마지막 sumArr에서 target과 같은 값을 갖고있느 배열의 길이를 구함
  return sumArr.filter((each) => each === target).length;
}

// test case 1 => 5
console.log(solution([1, 1, 1, 1, 1],3))

// test case 2 =>	2
console.log(solution([4, 1, 2, 1], 4))