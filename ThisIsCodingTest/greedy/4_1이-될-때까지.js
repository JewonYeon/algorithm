/**
 * 링크
    -
 * 문제
    - 어떠한 수 N이 1이 될 때까지 다음의 두 과정 중 하나를 반복적으로 선택하여 수행하려고 한다. 단 두 번째 연산은 N이 K로 나누어떨어질 때만 선택할 수 있다.
      1. N에서 1을 뺀다.
      2. N을 K로 나눈다.
      N과 K가 주어질 때 N이 1이 될때까지 수행해야 하는 최소 횟수를 구해라
 * 제한 조건
    -
 * 예시
    입력 N, K (2 <= N, K <= 100000)
      1. 25, 5
    출력
      1. 2
 * 풀이
    1. Key: K가 2 이상이므로 나눌 수 있다면 무조건적으로 나눈다.
 * ETC
    -
*/

function solution(N, K) {
  let count = 0;

  while (N > 1) {
    if (N % K === 0) {
      N /= K;
      count++;
      continue;
    }

    N -= 1;
    count++;
  }
  
  return count;
}

console.log(solution(25, 5));
console.log(solution(25, 5) === 2);
console.log(solution(123, 3));