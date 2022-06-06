/**
 * 링크
    - https://programmers.co.kr/learn/courses/30/lessons/12932
 * 문제
    - 자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴해주세요. 예를들어 n이 12345이면 [5,4,3,2,1]을 리턴합니다.
 * 제한 조건
    - n은 10,000,000,000이하인 자연수입니다.
 * 예시
    입력
      1. 12345
    출력
      1. [5,4,3,2,1]
 * 풀이
    1. 매개변수 숫자 -> 문자열 -> 배열 -> 뒤집기
 * ETC
    -
*/

function solution(n) {
  return String(n)
    .split("")
    .reverse()
    .map((el) => Number(el));
}

console.log(solution(12345));