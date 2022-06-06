/**
 * 링크
    - https://programmers.co.kr/learn/courses/30/lessons/12944
 * 문제
    - 정수를 담고 있는 배열 arr의 평균값을 return하는 함수, solution을 완성해보세요.
 * 제한 조건
    - arr은 길이 1 이상, 100 이하인 배열입니다.
    - arr의 원소는 -10,000 이상 10,000 이하인 정수입니다.
 * 예시
    입력
      1. [1,2,3,4]
      2. [5,5]
    출력
      1. 2.5
      2. 5
 * 풀이
    1. arr요소의 총합 / arr.length
 * ETC
    -
*/

function solution(arr) {
  return arr.reduce((acc, cur) => acc + cur, 0) / arr.length;
}

console.log(solution([1,2,3,4]) === 2.5);
console.log(solution([5,5]) === 5);