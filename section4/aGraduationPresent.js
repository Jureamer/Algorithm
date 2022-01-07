function solution(m, product){

  // 조합 문제
  // brute force
  let n = product.length; // 상품 가짓 수
  let answer = []; // 살 수 있는 상품 갯수 저장
  let productArr = []
  
  for(let i = 0; i < n; i++) {
    let sum = 0; // 합계를 저장할 변수 선언
    let temp = [];
    temp.push(product[i]);
    sum += product[i][0] + product[i][1]; // 합계에 i번째 배송비 + 상품 집어넣기
    for(let j = i + 1; j < n; j++) {
      sum += (product[j][0] / 2) + product[j][1] // 반값 할인한 금액 + 배송비 집어넣기
      if(sum <= m) {
        answer.push(j+1-i) // 살 수 있는 상품 갯수 저장
        temp.push(product[j])
      }      
    }
    productArr.push(temp);
  }
return Math.max(...answer);
}
  
let arr=[[6, 6], [2, 2], [4, 3], [4, 5], [10, 3]];
console.log(solution(28, arr));