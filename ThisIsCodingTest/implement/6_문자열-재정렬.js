/**
 * 링크
    -
 * 문제
    - 알파벳 대문자와 숫자(0~9)로만 구성된 문자열이 입력으로 주어진다.
      모든 알파벳을 오름차순으로 정렬하여 이어서 출력한뒤에, 그 뒤에 모든 숫자를 더한값을 이어서 출력해라
 * 제한 조건
    -
 * 예시
    입력
      1. 'K1KA5CB7'
      2. 'AJKDLSI412K4JSJ9D'
    출력
      1. 'ABCKK13'
      2. 'ADDIJJJKKLSS20'
 * 풀이
    1.
 * ETC
    -
*/

function solution(s) {
  let sum = 0;
  let string = '';
  for (let str of s) {
    if (str.charCodeAt() >= 65 && str.charCodeAt() <= 90) {
      string += str;
    } else {
      sum += parseInt(str);
    }
  }

  return string.split('').sort().join('') + `${sum}`;
}

console.log(solution('K1KA5CB7') === 'ABCKK13');
console.log(solution('AJKDLSI412K4JSJ9D') === 'ADDIJJJKKLSS20');