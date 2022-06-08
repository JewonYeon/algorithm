/**
 * 링크
    -
 * 문제
    - 각 자리가 숫자(0~9)로만 이루어진 문자열 S가 주어졌을때, 왼쪽부터 오른쪽으로 하나씩 모든 숫자를 확인하며 숫자 사이에 'x'혹은 '+' 연산자를 넣어
      결과적으로 만들 수 있는 가장 큰 수를 구해라
 * 제한 조건
    - + 보다 x를 먼저 계산하는 일반적인 방식과는 달리, 모든 연산은 왼쪽부터 순서대로 이루어진다.
    - 만들어질 수 있는 가장 큰 수는 20억 이하의 정수가 되도록 주어진다.
 * 예시
    입력
      1. '02984'
      2. '567'
    출력
      1. 576
      3. 210
 * 풀이
    1. 0, 1은 더하기, 나머지는 곱셈을 한다.
 * ETC
    -
*/

function solution(n) {
  let answer = 0;

  for(let s of n) {
    const number = Number(s);

    if (number <= 1 || answer === 0) { // 초기값이 0일때 고려
      answer += number;
    } else {
      answer *= number;
    }
  }

  return answer;
}

console.log(solution('02984'))
console.log(solution('567'))