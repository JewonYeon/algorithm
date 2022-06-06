/**
 * 링크
    - https://programmers.co.kr/learn/courses/30/lessons/12940
 * 문제
    - 두 수를 입력받아 두 수의 최대공약수와 최소공배수를 반환하는 함수, solution을 완성해 보세요.
      배열의 맨 앞에 최대공약수, 그다음 최소공배수를 넣어 반환하면 됩니다.
      예를 들어 두 수 3, 12의 최대공약수는 3, 최소공배수는 12이므로 solution(3, 12)는 [3, 12]를 반환해야 합니다.
 * 제한 조건
    - 두 수는 1이상 1000000이하의 자연수입니다.
 * 예시
    입력 (n, m)
      1. 3, 12
      2. 2, 5
    출력
      1. [3, 12]
      2. [1, 10]
 * 풀이
    1. 최대공약수(gcd)의 경우 '유클리드 호제법'을 이용한다.
      - a,b 를 서로 나눌때, 나누어진다면 b가 최대공약수 이다. (a > b)
      - 만약 a,b가 나누어지지 않으면 b와 a % b를 다시 나눈다
      - 서로가 나누어지면 a % b 가 최대공약수이다. 나누어지지 않는다면 b와 a % b를 다시 나눈다.
    2. 최소공배수는 두 수의 곱을 최대공약수로 나눈 값과 같다.
 * ETC
    -
*/

// 최소 공배수
function gcd(a, b) {
  return (a % b) === 0 ? b : gcd(b, a % b);
}

function lcm(a, b) {
  return a * b / gcd(a, b);
}

function solution(n, m) {
  return [gcd(n, m), lcm(n, m)];
}

console.log(solution(3, 12));
console.log(solution(2, 5));