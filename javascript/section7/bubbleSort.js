function solution(arr){
    let answer=arr;
    let N = arr.length;
    let count = N-1;
    while(count > 0) {
      for(let j = 1; j < N; j++)  {
        if(arr[j] < arr[j-1]) {
          [arr[j-1], arr[j]] = [arr[j], arr[j-1]]
        }
      }
      count--;
    }
    return answer;
}

let arr=[13, 5, 11, 7, 23, 15];
console.log(solution(arr));
