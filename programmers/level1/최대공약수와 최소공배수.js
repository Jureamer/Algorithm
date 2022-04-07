// 문제명: 최대공약수와 최소공배수
// 문제설명: 두 수를 입력받아 두 수의 최대공약수와 최소공배수를 반환하는 함수, solution을 완성해 보세요. 
// 배열의 맨 앞에 최대공약수, 그다음 최소공배수를 넣어 반환하면 됩니다. 
// 예를 들어 두 수 3, 12의 최대공약수는 3, 최소공배수는 12이므로 solution(3, 12)는 [3, 12]를 반환해야 합니다.
// 링크: https://programmers.co.kr/learn/courses/30/lessons/12940

// 문제 풀이
function solution(n, m) {
  var answer = [];
  // 유클리드 호제법 사용
  function gcd(n, m) {
      // 최대 공약수 = n을 m으로 나눠서 나눈 나머지가 0보다 크면 n을 m으로, m을 n % n으로 바꾸어서 재귀
      return n % m === 0 ? m : gcd(m, n%m)
  }
  
  function lcm(n, m) {
      return n * m / gcd(n, m)
  }
  answer.push(gcd(n, m));
  answer.push(lcm(n, m));
  return answer;
}

