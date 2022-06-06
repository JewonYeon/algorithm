/**
 * 링크
    - https://programmers.co.kr/learn/courses/30/lessons/12937
 * 문제
    - 정수 num이 짝수일 경우 "Even"을 반환하고 홀수인 경우 "Odd"를 반환하는 함수, solution을 완성해주세요.
 * 제한 조건
    - num은 int 범위의 정수입니다.
    - 0은 짝수입니다.
 * 예시
    입력
      1. 3
      2. 4
    출력
      1. 'Odd'
      2. 'Even'
 * 풀이
    1. 2로 나눈 나머지가 0일 경우 'Even', 아닐 경우 'Odd'를 리턴한다. 
 * ETC
    -
*/

function solution(num) {
  return num % 2 ? "Odd" : "Even"
}
