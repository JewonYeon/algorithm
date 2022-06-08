/**
 * 링크
    -
 * 문제
    - 당신은 음식점의 계산을 도와주는 점원이다. 카운터에는 거스름돈으로 사용할 500원, 100원, 50원, 10원짜리 동전이 무한히 존재한다고 가정한다.
      손님에게 거슬러 줘야 할 돈이 N원일 때 거슬러 줘야 할 동전의 최소 개수를 구하라.
 * 제한 조건
    - 거슬러 줘야 할 돈 N은 항상 10의 배수이다.
 * 예시
    입력
      1. 1260
    출력
      1. 6
 * 풀이
    1. 동전을 큰 순대로 나열 [500, 100, 50, 10]
    2. 가장 큰 단위부터 돈을 거슬러준다. (그리디)
 * ETC
    -
*/

function solution(N) {
  const coins = [500, 100, 50, 10];
  let count = 0;

  for (let coin of coins) {
    count += parseInt((N / coin), 10);
    N %= coin;
  }

  return count;
};

console.log(solution(1260));
console.log(solution(1260) === 6);