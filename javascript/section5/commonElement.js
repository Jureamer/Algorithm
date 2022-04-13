function solution(arr1, arr2){
    let answer=[];
    arr1.sort();
    arr2.sort();
    let leftIdx = 0;
    let rightIdx = 0;

    while(leftIdx < arr1.length && rightIdx < arr2.length) {
      if(arr1[leftIdx] === arr2[rightIdx]) {
        answer.push(arr1[leftIdx]);
        leftIdx++
        rightIdx++
      } else if(arr1[leftIdx] < arr2[rightIdx]) {
        leftIdx++
      } else {
        rightIdx++
      }
    }

    // console.log("leftIdx = ", leftIdx, "rightIdx = ", rightIdx);
    // console.log(answer);
    return answer
}

let a=[1, 3, 9, 5, 2];
let b=[3, 2, 5, 7, 8];
console.log(solution(a, b));