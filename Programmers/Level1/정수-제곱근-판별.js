/**
 * 링크
    - https://programmers.co.kr/learn/courses/30/lessons/12934
 * 문제
    - 임의의 양의 정수 n에 대해, n이 어떤 양의 정수 x의 제곱인지 아닌지 판단하려 합니다.
      n이 양의 정수 x의 제곱이라면 x+1의 제곱을 리턴하고, n이 양의 정수 x의 제곱이 아니라면 -1을 리턴하는 함수를 완성하세요.
 * 제한 조건
    - n은 1이상, 50000000000000 이하인 양의 정수입니다.
 * 예시
    입력
      1. 121
      2. 3
    출력
      1. 144
      2. -1
 * 풀이
    1. 제곱근을 구하는 Math.sqrt(num) 을 사용하여 제곱근이 정수인지 아닌지를 판별한다.
 * ETC
    -
*/

function solution(n) {
  const sqrt = Math.sqrt(n);
  return sqrt === parseInt(sqrt) ? Math.pow(sqrt + 1, 2) : -1;
}

console.log(solution(121) === 144);
console.log(solution(3) === -1);
