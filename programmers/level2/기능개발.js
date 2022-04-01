// 문제명: 기능개발
// 문제설명: 프로그래머스 팀에서는 기능 개선 작업을 수행 중입니다. 각 기능은 진도가 100%일 때 서비스에 반영할 수 있습니다.
// 또, 각 기능의 개발속도는 모두 다르기 때문에 뒤에 있는 기능이 앞에 있는 기능보다 먼저 개발될 수 있고, 이때 뒤에 있는 기능은 앞에 있는 기능이 배포될 때 함께 배포됩니다. (...생략)
// 링크: https://programmers.co.kr/learn/courses/30/lessons/42586

function solution(progresses, speeds) {
    
  const result = progresses.reduce((results, progress, idx) => {
      const speed = speeds[idx];
      const remainDays = Math.ceil((100 - progress) / speed);
      const result = results[results.length-1];
      
      if(result && result[0] >= remainDays) {
          result.push(remainDays);
      } else {
          results.push([remainDays])
      }
      
      return results;
  }, []).map(result => result.length)
  
  return result;
}