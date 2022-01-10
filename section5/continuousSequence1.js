function solution(m, arr) {
  let answer = 0;
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      sum += arr[j];
      if (sum === m) {
        answer++;
        console.log("i = ", i, " j =", j, "sum = ", sum);
      } else if (sum > m) break;
    }
    sum = 0;
  }
  return answer;
}

let a = [1, 2, 1, 3, 1, 1, 1, 2, 3, 3];
console.log(solution(6, a));
