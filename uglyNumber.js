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