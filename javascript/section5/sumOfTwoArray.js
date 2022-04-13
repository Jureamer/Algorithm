
function solution(arr1, arr2){
    let answer=[];
    let leftIdx = 0;
    let rightIdx = 0;

    while(leftIdx < arr1.length && rightIdx < arr2.length) {
        if(arr1[leftIdx] < arr2[rightIdx]) {
            answer.push(arr1[leftIdx])
            leftIdx++
        } else {
            answer.push(arr2[rightIdx])
            rightIdx++
        }
    }
    // left나 right 둘 중 하나가 작다면 나머지 값을 다 집어넣는다.
    if(leftIdx < arr1.length) {
        while(leftIdx < arr1.length) {
            answer.push(arr1[leftIdx])
            leftIdx++
        }
    } else if(rightIdx < arr2.length) {
        while(rightIdx < arr2.length) {
            answer.push(arr1[rightIdx])
            rightIdx++
        }
    } 
    return answer;
}

let a=[1, 3, 5, 7, 9, 13];
let b=[2, 3, 6, 7, 9];
console.log(solution(a, b));
