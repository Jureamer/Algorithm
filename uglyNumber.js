//::CodeStates Toy Problem 36번 문제

// 문제
// 아래와 같이 정의된 ugly numbers 중 n번째 수를 리턴해야 합니다.
// ugly number는 2, 3, 5로만 나누어 떨어지는 수이다.
// 1은 1번째 ugly number 이다.
// 1, 2, 3, 4, 5, 6, 8, 9, 10, 12, 15, 16, ...

// 입력
// 인자 1 : n
// number 타입의 자연수 (n >= 1)

// 출력
// number 타입을 리턴해야 합니다.

// 주의사항
// ugly numbers를 배열에 저장했을 때, n번째 ugly number의 위치는 인덱스 n-1 입니다.

// 입출력 예시
// let result = uglyNumbers(1);
// console.log(result); // --> 1

// result = uglyNumbers(3);
// console.log(result); // --> 3


// ================풀이========================

const uglyNumbers = function (n) {
  let uglyNumber = [1]; // uglyNumber 초기값 1을 세팅해준다.
  let count = 0; // uglyNumber 배열의 index
  let idx2 = 0; // uglyNumber(n)에 들어갈 각각 인덱스 세팅
  let idx3 = 0;
  let idx5 = 0;
  let uglyNumber2 = 0;
  let uglyNumber3 = 0;
  let uglyNumber5 = 0;

  while (count < n) {
    uglyNumber2 = uglyNumber[idx2] * 2 
    uglyNumber3 = uglyNumber[idx3] * 3
    uglyNumber5 = uglyNumber[idx5] * 5
    
    let minNumber = Math.min(uglyNumber2, uglyNumber3, uglyNumber5);
    uglyNumber.push(minNumber);

    if(minNumber === uglyNumber2) idx2++;
    if(minNumber === uglyNumber3) idx3++;
    if(minNumber === uglyNumber5) idx5++;
    count++
  }

  return uglyNumber[count-1]
};

//////////////////// test case 1 => 9
// let result = uglyNumbers(8);
// console.log(result);



//////////////////// test case 2 => 24
// let result = uglyNumbers(15);
// console.log(result);