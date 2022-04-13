const isPrime = (num) => {
  let isTrueOrFalse = true;
  if(num === 2) return true // 2는 소수이기에 true를 return
  if(num <= 1 || num % 2 === 0) return false; //1 이하거나, 2로 나눴을 때 0이면 false return

  for(let i = 3; i < num / 2; i++) {
    if(num % i === 0) return false;  // num / 2까지 계속 나눠서 0으로 나누어떨어지지 않으면 소수다
  }

  return isTrueOrFalse
}



function solution(arr){
  let answer=[];

  for(let i = 0; i < arr.length; i++) {
    let convertToNum = Number(String(arr[i]).split("").reverse().join("")); // 숫자를 배열로 바꾸면서 => reverse => 다시 string => num으로 변환
    
    if(isPrime(convertToNum)) answer.push(convertToNum) 
  }
  return answer;
  }

let arr=[32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr));
