/**
 * 링크
    -
 * 문제
    - 숫자 카드 게임은 여러 개의 숫자 카드 중에서 가장 높은 숫자가 쓰인 카드 한 장을 뽑는 게임이다.
      숫자가 쓰인 카드들이 N x M 형태로 놓여있다. 이때 N은 행의 개수를 의미하며, M은 열의 개수를 의미한다.
      먼저 뽑고자 하는 카드가 포함되어 있는 행을 선택한다.
      그 다음 선택된 행에 포함된 카드들 중 가장 숫자가 낮은 카드를 뽑아야 한다.
      따라서 처음에 카드를 골라낼 행을 선택할때, 이후에 해당 행에서 가장 숫자가 낮은 카드를 뽑을 것을 고려하여 최종적으로 가장 높은 숫자의 카드를 뽑을 수 있도록 전략을 세우자
 * 제한 조건
    -
 * 예시
    입력 (N, M, 카드들) / 1 <= N, M <= 100, 1 <= 카드 숫자 <= 10000
      1. 3, 3, [[3,1,2], [4,1,4], [2,2,2]]
      2. 2, 4, [[7,3,1,8], [3,3,3,4]]
    출력
      1. 2
      2. 3
 * 풀이
    1. 행마다 가장 작은 수를 찾아낸 후, 그 중 가장 큰수를 찾는다.
 * ETC
    -
*/

function solution(n, m, arr) {
  return arr.reduce((acc, cur) => acc.concat(cur.sort((a, b) => a - b)[0]), []).sort((a, b) => b - a)[0];
};

function solution(n, m, arr) {
  let result = 0;

  for (let cards of arr) {
    let min = 10001;
    for (let card of cards) {
      min = Math.min(min, card);
    }
    result = Math.max(result, min);
  } 
  return result;
}

console.log(solution(3, 3, [[3,1,2], [4,1,4], [2,2,2]]));
console.log(solution(2, 4, [[7,3,1,8], [3,3,3,4]]));
