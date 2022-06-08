/**
 * 링크
    - https://programmers.co.kr/learn/courses/30/lessons/12921
 * 문제
    - 1부터 입력받은 숫자 n 사이에 있는 소수의 개수를 반환하는 함수, solution을 만들어 보세요.
    - 소수는 1과 자기 자신으로만 나누어지는 수를 의미합니다.
      (1은 소수가 아닙니다.)
 * 제한 조건
    - n은 2이상 1000000이하의 자연수입니다.
 * 예시
    입력
      1. 10
      2. 5
    출력
      1. 4
      2. 3
 * 풀이
    1. 소수 판단은 n의 제곱근까지만 진행하면 된다.
 * ETC
    -
*/

function getIsPrime(n) {
  if (n % 2 === 0) return false;
  
  for (let i = 3; i <= Math.sqrt(n); i += 2) {
      if (n % i === 0) return false;
  }
  
  return true;
}

function solution(n) {
  let answer = 1; // 2는 기본적으로 소수
  
  for (let i = 3; i <= n; i += 2) {
      const isPrime = getIsPrime(i);
      if (isPrime) answer += 1;
  }
  
  return answer;
}

console.log(solution(10) === 4);
console.log(solution(4) === 3);
