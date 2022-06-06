/**
 * 링크
    - https://programmers.co.kr/learn/courses/30/lessons/12947
 * 문제
    - 양의 정수 x가 하샤드 수이려면 x의 자릿수의 합으로 x가 나누어져야 합니다. 예를 들어 18의 자릿수 합은 1+8=9이고, 18은 9로 나누어 떨어지므로 18은 하샤드 수입니다. 자연수 x를 입력받아 x가 하샤드 수인지 아닌지 검사하는 함수, solution을 완성해주세요.
 * 제한 조건
    - x는 1 이상, 10000 이하인 정수입니다.
 * 예시
    입력
      1. 10
      2. 12
      3. 11
      4. 13
    출력
      1. true
      2. true
      3. false
      4. false
 * 풀이
    1. 숫자를 매개변수로 받으므로, 문자열로 변환 후, 배열화한다.
    2. 각 자리를 더한 값을 구한다.
    3. 매개변수를 2에서 구한 값으로 나눈다.
    4. 나머지가 존재하면 하샤드 수가 아니고, 0이라면 하샤드 수이다. 
 * ETC
    -
*/

function solution(x) {
  const x_arr = x.toString().split('');
  const sum = x_arr.reduce((acc, cur) => acc += parseInt(cur, 10), 0);
  return !(x % sum);
}

console.log(solution(10) === true);
console.log(solution(12) === true);
console.log(solution(11) === false);
console.log(solution(13) === false);