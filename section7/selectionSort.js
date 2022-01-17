function solution(arr){
  let answer = arr;
  for(let i = 0; i < arr.length; i++) {
    let tmp = i;
    for(let j = i + 1; j < arr.length; j++) {
      if(arr[tmp] > arr[j]) {
        tmp = j
      }
    }
    [arr[i], arr[tmp]] = [arr[tmp], arr[i]]
  }
  return answer;
}

let arr=[13, 5, 11, 7, 23, 15];
console.log(solution(arr));
