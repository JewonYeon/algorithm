/**
 * 링크
    - https://programmers.co.kr/learn/courses/30/lessons/12931
 * 문제
    - 자연수 N이 주어지면, N의 각 자릿수의 합을 구해서 return 하는 solution 함수를 만들어 주세요. 예를들어 N = 123이면 1 + 2 + 3 = 6을 return 하면 됩니다.
 * 제한 조건
    - N의 범위 : 100,000,000 이하의 자연수
 * 예시
    입력
      1. 123
      2. 987
    출력
      1. 6
      2. 24
 * 풀이
    1. 
 * ETC
    -
*/

function solution(n) {
    return n.toString().split('').reduce((acc, cur) => acc += Number(cur), 0);
}

console.log(solution(123) === 6);
console.log(solution(987) === 24);