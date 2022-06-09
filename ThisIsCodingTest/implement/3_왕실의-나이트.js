/**
 * 링크
    -
 * 문제
    - 체스판은 8x8이다.
      나이트는 L자 형태로만 이동할 수 있다. (체스판을 벗어날 수 없음)
      1. 수평으로 두칸 이동 후 수직으로 한칸이동
      2. 수직으로 두칸 이동 후 수평으로 한칸이동

      특정 좌표가 주어졌을 때, 나이트가 이동할 수 잇는 모든 경우의 수를 구해라
 * 제한 조건
    - 행은 1 ~ 8
    - 열은 a ~ h
 * 예시
    입력
      1. 'a1'
    출력
      1. 2
 * 풀이
    1. 이동 경우의 수를 전부 나열
    2. 현재 위치에서 이동할 수 있는지만 판단 (체스판을 안벗어나도록)
 * ETC
    -
*/

function solution(p) {
  const moves = [
    [-1, 2],
    [-1, -2],
    [1, 2],
    [1, -2],
    [-2, 1],
    [-2, -1],
    [2, 1],
    [2, -1],
  ];

  const col = p[0].charCodeAt() - 96;
  const row = parseInt(p[1]);

  let answer = 0;

  for(let move of moves) {
    const nextCol = col + move[0];
    const nextRow = row + move[1];

    if ((nextCol >= 1 && nextCol <= 8) && (nextRow >= 1 && nextRow <= 8)) {
      answer++;
    }
  }
  return answer;
}

console.log(solution('a1') === 2);