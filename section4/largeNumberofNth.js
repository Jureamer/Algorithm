function solution(n, k, card){
    let answer;
    let tmp = new Set();
    let length = card.length;

    for(let i = 0; i < length; i++) {
        for(let j = i + 1; j < length; j++) {
            for(let k = j + 1; j < length; j++) {
                tmp.add(card[i] + card[j] + card[k]);
            }
        }
    }
    answer = [...tmp].sort((a, b) => b - a);

    return answer[k-1];
        }

let arr=[13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
console.log(solution(10, 3, arr));