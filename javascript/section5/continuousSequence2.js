function solution(m, arr) {
  let answer = 0;
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum = 0;
    sum += arr[i];
    if (sum <= m) {
      answer++;
    }
    for (let j = i + 1; j < arr.length; j++) {
      sum += arr[j];
      if (sum <= m) {
        answer++;
      } else break;
    }
  }

  return answer;
}

let a = [1, 3, 1, 2, 3];
console.log(solution(5, a));
