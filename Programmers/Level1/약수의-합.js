/**
 * 링크
    - https://programmers.co.kr/learn/courses/30/lessons/12928
 * 문제
    - 정수 n을 입력받아 n의 약수를 모두 더한 값을 리턴하는 함수, solution을 완성해주세요.
 * 제한 조건
    - n은 0 이상 3000이하인 정수입니다.
 * 예시
    입력
      1. 12
      2. 5
    출력
      1. 28
      2. 6
 * 풀이
    1. 단순히 1부터 n까지 전부 나눠서 나머지가 0인 경우로 계산
    2. 1부터 n의 제곱근까지만 계산 -> 시간복잡도가 줄지않을까?
 * ETC
    -
*/

function solution(n) {
  let answer = 0;
  for(let divisor = 1; divisor <= Math.sqrt(n); divisor++) {
    if (n % divisor === 0) {
      answer += (divisor + n / divisor);

      if (divisor === Math.sqrt(n)) {
        answer -= divisor;
      }
    }
  }

  return answer;
}

console.log(solution(12) === 28);
console.log(solution(5) === 6);
