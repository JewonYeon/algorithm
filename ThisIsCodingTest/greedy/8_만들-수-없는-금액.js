/**
 * 링크
    -
 * 문제
    - 동네 편의점 주인이 N개의 동전을 가지고 있다. 이때 N개의 동전을 이용하여 만들 수 없는 양의 정수 금액 중 최솟값을 구해라
      예를 들어, N = 5이고 각 동전 [3, 2, 1, 1, 9](원)을 가지고 있을때, 최솟값은 8이다.
      N = 3이고 [3, 5, 7]을 가지고 있을 때, 최솟값은 1원이다.
 * 제한 조건
    -
 * 예시
    입력
      N: 동전 개수 (1<= N <= 1000)
      coins: [] (각 코인은 1000000이하 자연수)
      1. 5, [3,2,1,1,9]
      2. 3, [3,5,7]
    출력
      1. 8
      2. 1
 * 풀이
    1. 
 * ETC
    -
*/

function solution(N, coins) {
  let target = 1;
  const sorting_coins = coins.sort((a, b) => a - b);

  for (let coin of sorting_coins) {
    if (target < coin) {
      break;
    }

    target += coin;
  }

  return target;
}

console.log(solution(5, [3,2,1,1,9]) === 8);
console.log(solution(3, [3,5,7]) === 1);