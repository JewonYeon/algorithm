/**
 * 링크
    - https://programmers.co.kr/learn/courses/30/lessons/12922
 * 문제
    - 길이가 n이고, "수박수박수박수...."와 같은 패턴을 유지하는 문자열을 리턴하는 함수, solution을 완성하세요.
      예를들어 n이 4이면 "수박수박"을 리턴하고 3이라면 "수박수"를 리턴하면 됩니다.
 * 제한 조건
    - n은 길이 10,000이하인 자연수입니다.
 * 예시
    입력
      1. 3
      2. 4
    출력
      1. "수박수"
      2. "수박수박"
 * 풀이
    1. n을 2로 나누어 몫과 나머지를 구한다.
    2. 몫만큼 '수박'을 반복하고, 나머지가 1일 경우 '수'를 붙인다.
 * ETC
    -
*/

function solution(n) {
  return n % 2 ? '수박'.repeat(n / 2) + '수' : '수박'.repeat(n / 2);
}

console.log(solution(3) === '수박수');
console.log(solution(4) === '수박수박');