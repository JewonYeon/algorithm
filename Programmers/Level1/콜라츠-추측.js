/**
 * 링크
    - https://programmers.co.kr/learn/courses/30/lessons/12943
 * 문제
    - 1937년 Collatz란 사람에 의해 제기된 이 추측은, 주어진 수가 1이 될때까지 다음 작업을 반복하면, 모든 수를 1로 만들 수 있다는 추측입니다. 작업은 다음과 같습니다.
      1-1. 입력된 수가 짝수라면 2로 나눕니다. 
      1-2. 입력된 수가 홀수라면 3을 곱하고 1을 더합니다.
      2. 결과로 나온 수에 같은 작업을 1이 될 때까지 반복합니다.

      예를 들어, 입력된 수가 6이라면 6→3→10→5→16→8→4→2→1 이 되어 총 8번 만에 1이 됩니다. 위 작업을 몇 번이나 반복해야하는지 반환하는 함수, solution을 완성해 주세요. 단, 작업을 500번을 반복해도 1이 되지 않는다면 –1을 반환해 주세요.
 * 제한 조건
    - 입력된 수, num은 1 이상 8000000 미만인 정수입니다.
 * 예시
    입력
      1. 6
      2. 16
      3. 626331
    출력
      1. 8
      2. 4
      3. -1
 * 풀이
    1. 총 횟수를 answer(초기값 1)로 둔다.
    2. while문을 500까지 돌며 이때도 1이 되지 않을 경우 -1을, 이전에 1이 될 경우 answer을 리턴한다.
 * ETC
    -
*/

function solution(num) {
  let operator = num;
  let answer = 0;

  while(answer <= 500) {
    if (operator === 1) {
      return answer;
    }
    if (operator % 2) {
      // 홀수
      operator = (operator * 3) + 1;
    } else {
      // 짝수
      operator /= 2;
    }
    answer += 1;
  }
  return -1;
}

console.log(solution(6) === 8);
console.log(solution(16) === 4);
console.log(solution(626331) === -1);