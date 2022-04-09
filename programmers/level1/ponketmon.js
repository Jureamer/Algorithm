function solution(nums) {
  var answer = 0;
  // nums를 반복하면서 sort 배열에 포함시킨다.
  // 배열에 없는 값이 있으면 answer에 1씩 더 해준다.
  
  let sort = [];
  // nums를 반복한다.
  for(const each of nums) {    
      // sort 배열에 값 중복 여부를 확인한다
      if(!sort.includes(each)) {
          // 없다면 sort에 값을 넣어준다.
          sort.push(each);
          // answer값을 더 해준다.
          answer++
      }
      // nums값의 반 이상이라면 break 한다.
      if(sort.length >= nums.length / 2) break;
          
  }
  return answer;
}


// 테스트 1 => 2
console.log(solution([3, 1, 2, 3]));

// 테스트 2 => 3
console.log(solution([3, 3, 3, 2, 2, 4]));

// 테스트 3 => 2
console.log(solution([3, 3, 3, 2, 2, 2]));

