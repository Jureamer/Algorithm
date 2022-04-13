// 문제명: 크레인 인형뽑기
// 문제설명: 게임개발자인 "죠르디"는 크레인 인형뽑기 기계를 모바일 게임으로 만들려고 합니다.
// "죠르디"는 게임의 재미를 높이기 위해 화면 구성과 규칙을 다음과 같이 게임 로직에 반영하려고 합니다. (...생략)
// 링크: https://programmers.co.kr/learn/courses/30/lessons/64061

function solution(board, moves) {
  var answer = 0;
  let bucket = [];
  // borad는 2차원 배열로 5x5 ~ 30x30
  // moves의 배열 크기는 1,000 이하
  // board[] 값이 0이면 빈 값
  for (const each of moves) {
    let count = 0;
    let height = board.length - 1;
    let doll = board[count][each - 1];

    while (doll === 0 && count < height) {
      count++;
      doll = board[count][each - 1];
    }

    // 인형이 결국 마지막까지 빈값이라면 다음 for문을 돌게한다.
    if (doll === 0) continue;
    // 사용했으면 0으로 변경
    board[count][each - 1] = 0;

    // doll값이 빈값인지 체크
    if (bucket.length > 0 && bucket[bucket.length - 1] === doll) {
      // 바구니에 든 마지막 값과 doll가 같다면 바구니 마지막 값을 터뜨려준다.
      bucket.pop();
      answer = answer + 2;
    } else {
      // 아니라면 push
      bucket.push(doll);
    }
  }
  return answer;
}

console.log(
  solution(
    [
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 3],
      [0, 2, 5, 0, 1],
      [4, 2, 4, 4, 2],
      [3, 5, 1, 3, 1],
    ],
    [1, 5, 3, 5, 1, 2, 5, 1, 4, 3]
  )
);

// [-1, -1, -1, -1, -1],
// [-1, 0, 1, 0, -1],
// [-1, 2, 5, 0, 1],
// [4, 2, 4, 4, 2],
// [3, 5, 1, 3, 1],
