/*
S문자열에서 T문자열과 아나그램이 되는 S의 부분문자열의 개수를 구하는 프로그램을 작성하 세요. 아나그램 판별시 대소문자가 구분됩니다. 부분문자열은 연속된 문자열이어야 합니다.

▣ 입력설명
첫 줄에 첫 번째 S문자열이 입력되고, 두 번째 줄에 T문자열이 입력됩니다.
S문자열의 길이는 10,000을 넘지 않으며, T문자열은 S문자열보다 길이가 작거나 같습니다.

▣ 출력설명
S단어에 T문자열과 아나그램이 되는 부분문자열의 개수를 출력합니다.
*/
function solution(s, t){
  // 문자 t의 길이만큼 s에서 연속된 글자들을 구한다.
  // 구한 글자들을 배열에 옮겨담는다.
  // 구한 글자들마다 해쉬값을 담고 t의 해쉬와 비교한다.
  // 같으면 갯수를 더 해준다.
    let answer = 0;
    let anagram = [];
    let continuousArr = [];
    let continuousStr = "";
    let N = t.length;
    let M = s.length;

    for(let i = 0; i < N; i++) {
      continuousArr.push(s[i]);
    }
    continuousStr = continuousArr.join("");
    anagram.push(continuousStr);
    
    for(let i = N; i < M; i++) {
      continuousArr.push(s[i]);
      continuousArr.shift();
      continuousStr = continuousArr.join("")
      anagram.push(continuousStr);
    }
    let anagramArr = anagram.map((v) => {
      let map = new Map;
      for(let i = 0; i < v.length; i++) {
        if(map.has(v[i])) map.set(v[i], map.get(v[i]) + 1)
        else map.set(v[i], 1)
      }
      return map
    })
    
    for(let i = 0; i < anagramArr.length; i++) {
      let isOkay = [];
      for(let j = 0; j < t.length; j++) {
        if(!anagramArr[i].has(t[j]) || anagramArr[i].get(t[j]) === 0) {
          continue;
        } else {
          isOkay.push(0);
          anagramArr[i].set(t[j], anagramArr[i].get(t[j]) - 1)
        }
        
      }
      if(isOkay.length === N) answer++
    }
    

    return answer
}

let a="bacaAacbacb";
let b="abc";
console.log(solution(a, b)); //--> 5
