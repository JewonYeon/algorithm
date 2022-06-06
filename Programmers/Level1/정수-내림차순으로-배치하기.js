/**
 * 링크
    - https://programmers.co.kr/learn/courses/30/lessons/12933
 * 문제
    - 함수 solution은 정수 n을 매개변수로 입력받습니다. n의 각 자릿수를 큰것부터 작은 순으로 정렬한 새로운 정수를 리턴해주세요. 예를들어 n이 118372면 873211을 리턴하면 됩니다.
 * 제한 조건
    - n은 1이상 8000000000 이하인 자연수입니다.
 * 예시
    입력
      1. 118372
    출력
      1. 873211
 * 풀이
    1. 매개변수 n을 배열로 만든 후, 정렬을 진행
      - 이때 숫자인지, 문자열인지 유의
 * ETC
    -
*/

function solution(n) {
  const answer = n
    .toString()
    .split('')
    .sort((a, b) => Number(b) - Number(a))
    .join('')
  return Number(answer);
}

console.log(solution(118372));