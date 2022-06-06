/**
 * 링크
    - https://programmers.co.kr/learn/courses/30/lessons/12954
 * 문제
    - 함수 solution은 정수 x와 자연수 n을 입력 받아, x부터 시작해 x씩 증가하는 숫자를 n개 지니는 리스트를 리턴해야 합니다. 다음 제한 조건을 보고, 조건을 만족하는 함수, solution을 완성해주세요.
 * 제한 조건
    - x는 -10000000 이상, 10000000 이하인 정수입니다.
    - n은 1000 이하인 자연수입니다.
 * 예시
    입력 (x, n)
      1. 2, 5
      2. 4, 3
      3. -4, 2
    출력 (answer)
      1. [2,4,6,8,10]
      2. [4,8,12]
      3. [-4, -8]
 * 풀이
    1. i = 1 ~ n 만큼 for문을 돈다.
    2. 정답 array에 x * i를 push한다.
 * ETC
    - 다른 풀이
      1. Array(n).fill(x) : n개의 길이를 가진 배열을 생성 후 x 값을 각각 할당한다.
      2. map을 돌려 index + 1 씩 곱해준다. (index는 0부터 시작하므로)
*/

function solution(x, n) {
  const answer = [];
  for (let i = 1; i <= n; i++) {
      answer.push(x * i);
  }
  return answer;
}

function solution(x, n) {
  return Array(n).fill(x).map((v, i) => (i + 1) * v)
}

console.log(solution(2, 5));
console.log(solution(4, 3));
console.log(solution(-4, 2));