/* 
문제명:  (2021 KAKAO BLIND RECRUITMENT) 메뉴 리뉴얼 
문제설명:
  레스토랑을 운영하던 스카피는 코로나19로 인한 불경기를 극복하고자 메뉴를 새로 구성하려고 고민하고 있습니다.
  기존에는 단품으로만 제공하던 메뉴를 조합해서 코스요리 형태로 재구성해서 새로운 메뉴를 제공하기로 결정했습니다. 어떤 단품메뉴들을 조합해서 코스요리 메뉴로 구성하면 좋을 지 고민하던 "스카피"는 이전에 각 손님들이 주문할 때 가장 많이 함께 주문한 단품메뉴들을 코스요리 메뉴로 구성하기로 했습니다.
  단, 코스요리 메뉴는 최소 2가지 이상의 단품메뉴로 구성하려고 합니다. 또한, 최소 2명 이상의 손님으로부터 주문된 단품메뉴 조합에 대해서만 코스요리 메뉴 후보에 포함하기로 했습니다.
  예를 들어, 손님 6명이 주문한 단품메뉴들의 조합이 다음과 같다면,
  (각 손님은 단품메뉴를 2개 이상 주문해야 하며, 각 단품메뉴는 A ~ Z의 알파벳 대문자로 표기합니다.)
  (...생략)
링크: https://programmers.co.kr/learn/courses/30/lessons/72411
*/

// 문제풀이
function solution(orders, course) {
  var answer = [];
  let storageOfOrderMapping = {};

  for (let i = 0; i < course.length; i++) {
    let numOfBranch = course[i];
    for (let j = 0; j < orders.length; j++) {
      let menus = orders[j].split('');
      // 주문받은 메뉴 길이가 선택할 메뉴 갯수보다 작을 경우
      if (menus.length < numOfBranch) continue;
      // 메뉴 갯수로 조합
      const combinationOfMenus = combination(menus, numOfBranch);

      for (let i = 0; i < combinationOfMenus.length; i++) {
        // 조합이 되는 메뉴들
        let combi = combinationOfMenus[i].join('');
        if (!Object.keys(storageOfOrderMapping).includes(combi)) {
          // 객체에 없으면 생성
          storageOfOrderMapping[combi] = 1;
        } else {
          // 있으면 + 1
          storageOfOrderMapping[combi] = storageOfOrderMapping[combi] + 1;
        }
      }
    }
  }

  // 손님이 주문한 메뉴와, 가짓 수
  function combination(menus, num) {
    // 메뉴가 1개만 남았으면 menu를 return
    if (num === 1) return menus.map((menu) => menu);
    let result = [];

    menus.forEach((menu, idx, origin) => {
      const fixed = menu;
      const rest = origin.slice(idx + 1);
      const combinations = combination(rest, num - 1);
      const attached = combinations.map((v) => [fixed, ...v].sort());
      result.push(...attached);
    });
    return result;
  }

  for (let i = 0; i < course.length; i++) {
    let courseNum = course[i];
    let newObj = {};
    // 기존 객체에서 해당하는 부분만 따로 뺄 수 있는 지 없는 지? map으로 가능한 지?
    // 2이하면 저장 안함
    let maxNum = Object.keys(storageOfOrderMapping).reduce(
      (maxNum, cur, idx) => {
        let length = cur.length;
        if (length === courseNum) {
          const key = Object.keys(storageOfOrderMapping)[idx];
          const val = Object.values(storageOfOrderMapping)[idx];

          newObj[key] = val;
          if (maxNum < val) return val;
          else return maxNum;
        }
        return maxNum;
      },
      0
    );
    // 0일 경우 종료
    if (maxNum === 0) break;

    Object.values(newObj).forEach((val, idx) => {
      if (val === maxNum && val >= 2) {
        const target = Object.keys(newObj)[idx];
        answer.push(target);
      }
    });
  }
  // 정답을 사전 순으로 적용 sort()는 code순 정렬
  return answer.sort();
}
