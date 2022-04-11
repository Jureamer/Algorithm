// 문제명: 뉴스 클러스터링
// 문제설명: 여러 언론사에서 쏟아지는 뉴스, 특히 속보성 뉴스를 보면 비슷비슷한 제목의 기사가 많아
// 정작 필요한 기사를 찾기가 어렵다. Daum 뉴스의 개발 업무를 맡게 된 신입사원 튜브는
// 사용자들이 편리하게 다양한 뉴스를 찾아볼 수 있도록 문제점을 개선하는 업무를 맡게 되었다. (...생략)
// 링크: https://programmers.co.kr/learn/courses/30/lessons/17677

//문제 풀이
function solution(str1, str2) {
  // 영문 2글자 갯수 객체화 함수
  function distribute(text) {
    let obj = {};
    for (let i = 0; i < text.length - 1; i++) {
      let chr = text.substr(i, 2);
      const regExp = /[A-Za-z]{2}/;
      if (chr.match(regExp)) {
        chr = chr.toUpperCase();
        if (obj[chr]) obj[chr] = obj[chr] + 1;
        else obj[chr] = 1;
      }
    }
    return obj;
  }

  const arr1 = distribute(str1);
  const arr2 = distribute(str2);

  let intersection = [];
  let union = [];

  // 교집합 배열에 값 넣기
  for (let ele1 of Object.keys(arr1)) {
    // ele1의 요소를 str2 배열에서 찾으면
    if (Object.keys(arr2).find((el) => el === ele1)) {
      // 각 요소의 value값 중 작은 만큼 push
      let minNum = Math.min(arr1[ele1], arr2[ele1]);
      for (let i = 1; i <= minNum; i++) {
        intersection.push(ele1);
      }
    }
  }

  // 합집합 배열에 값 넣기
  for (let i = 0; i < Object.keys(arr1).length; i++) {
    for (let j = 1; j <= Object.values(arr1)[i]; j++) {
      union.push(Object.keys(arr1)[i]);
    }
  }

  for (let i = 0; i < Object.keys(arr2).length; i++) {
    for (let j = 1; j <= Object.values(arr2)[i]; j++) {
      union.push(Object.keys(arr2)[i]);
    }
  }
  // 전체 집합에서 교집합 제외
  for (let i = 0; i < intersection.length; i++) {
    const index = union.findIndex((each) => each === intersection[i]);
    if (index !== -1) {
      union.splice(index, 1);
    }
  }

  const interLength = intersection.length || 0;
  const unionLength = union.length || 0;

  return unionLength === 0
    ? 65536
    : Math.floor((interLength / unionLength) * 65536);
}

// test case 1 ==> 16384
console.log(solution('FRANCE', 'french'));

// test case 2 ==> 65536
console.log(solution('handshake', 'shake hands'));

// test case 3 ==> 43690
console.log(solution('aa1+aa2', 'AAAA12'));

// test case 4 ==> 65536
console.log(solution('E=M*C^2', 'e=m*c^2'));

// test case 5 ==> 16384
console.log(solution('abc', 'abbb'));
