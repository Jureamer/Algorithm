  // 한 변의 길이가 '2'의 제곱수인 정사각형의 흑백이미지가 2차원 배열로 주어짐...
  // 좌표 0(백), 1(흑)
  // 이미지에 포함된 데이터가 모두 1이면 '1', 모두 0이면 '0', 그렇지 않으면 'X'
  // 전체를 4등분하여 재귀적으로 압축. 
  // 영역순서는 좌상, 우상, 좌하, 우하

const decompression = function (image) {

  const aux = (rs, re, cs, ce, image) => { // 재귀함수 사용
  
  if(rs === re) return String(image[rs][cs]) // 이게 왜 base case인지는 확인 필요

  // 정사각형으로 만들기 계속 2로 나눠줌
  const rMid = Math.floor((rs + re) / 2);
  const cMid = Math.floor((cs + ce) / 2);

  const leftUp = aux(rs, rMid, cs, cMid, image); // 좌측상단 재귀
  const rightUp = aux(rs, rMid, cMid + 1, ce, image); // 우측상단 재귀  
  const leftDown = aux(rMid + 1, re, cs, cMid, image); // 좌측하단 재귀
  const rightDown = aux(rMid + 1, re, cMid + 1, ce, image); // 우측하단 재귀

  const result = leftUp + rightUp + leftDown + rightDown;
  if(result === '1111') return '1' // 해당 단위 사각형의 값이 모두 1이면 1로 decomp
  else if(result === '0000') return '0' // 해당 단위 사각형의 값이 모두 0이면 0으로 decomp
  else return 'X' + result; // 아니라면 X
 }

  return aux(0, image.length - 1, 0, image.length - 1, image);
};

let image = [
  [1, 0, 1, 1],
  [0, 1, 1, 1],
  [0, 0, 1, 1],
  [0, 0, 0, 0],
];
let result = decompression(image);
console.log(result); // --> 'XX100110X1100​'

image = [
  [0, 0, 0, 0, 1, 1, 0, 0],
  [0, 0, 0, 0, 1, 1, 0, 0],
  [0, 0, 0, 0, 1, 1, 1, 0],
  [0, 0, 0, 0, 1, 1, 1, 0],
  [1, 1, 1, 1, 0, 0, 0, 0],
  [1, 1, 1, 1, 0, 0, 0, 0],
  [1, 1, 1, 1, 1, 0, 1, 1],
  [1, 1, 1, 1, 0, 1, 1, 1],
];
result = decompression(image);
console.log(result); // --> 'X0X101X10101X00X10011'

image = [
  [1, 0, 1, 1, 1, 1, 0, 0],
  [0, 0, 1, 1, 1, 1, 0, 0],
  [0, 0, 0, 0, 1, 1, 1, 0],
  [0, 1, 0, 0, 1, 1, 1, 0],
  [1, 1, 1, 1, 1, 1, 0, 0],
  [1, 1, 1, 1, 0, 0, 1, 0],
  [1, 1, 0, 0, 1, 0, 1, 1],
  [1, 1, 0, 0, 0, 1, 1, 1],
];
result = decompression(image);
console.log(result); // --> 'XXX10001X00010X101X1010X1110XX1100X0010X10011'