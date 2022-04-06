// 문제명: 소수 더하기
// 문제설명: 주어진 숫자 중 3개의 수를 더했을 때 소수가 되는 경우의 개수를 구하려고 합니다.
// 숫자들이 들어있는 배열 nums가 매개변수로 주어질 때, nums에 있는 숫자들 중 서로 다른 3개를 골라 더했을 때
// 소수가 되는 경우의 개수를 return 하도록 solution 함수를 완성해주세요.
// 링크: https://programmers.co.kr/learn/courses/30/lessons/12977

function solution(nums) {
  var answer = 0;

  // 소수는  1과 자기 이외에는 나누어지지 않는 수
  // nums의 숫자 중 3개로 조합할 수 있는 경우의 수를 구함.
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        sum = nums[i] + nums[j] + nums[k];
        if (isPrime(sum)) answer++;
      }
    }
  }
  return answer;
}

function isPrime(sum) {
  let isPrime = true;
  if (sum === 1) return false;
  if (sum === 2) return true;
  for (let i = 2; i <= Math.sqrt(sum); i++) {
    if (sum % i === 0) isPrime = false;
  }
  return isPrime;
}

// test case 1 ==> 1
console.log(solution([1, 2, 3, 4]));
// test case 2 ==> 4
console.log(solution([1, 2, 7, 6, 4]));
