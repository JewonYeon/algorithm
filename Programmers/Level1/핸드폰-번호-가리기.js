/**
 * 링크
    - https://programmers.co.kr/learn/courses/30/lessons/12948
 * 문제
    - 프로그래머스 모바일은 개인정보 보호를 위해 고지서를 보낼 때 고객들의 전화번호의 일부를 가립니다.
      전화번호가 문자열 phone_number로 주어졌을 때, 전화번호의 뒷 4자리를 제외한 나머지 숫자를 전부 *으로 가린 문자열을 리턴하는 함수, solution을 완성해주세요.
 * 제한 조건
    - phone_number는 길이 4 이상, 20이하인 문자열입니다.
 * 예시
    입력
      1. "01033334444"
      2. "027778888"
    출력
      1. "*******4444"
      2. "*****8888"
 * 풀이
    1. phone_number을 배열로 만든 후, 길이를 바탕으로 for문을 돌린다.
    2. if문으로 현재 index < phone_number.length - 4 일 경우 '*'를, 그 외엔 기존 문자열을 넣는다.
 * ETC
    -
*/

function solution(phone_number) {
  const length = phone_number.length;
  const phone_number_array = phone_number.split('');

  let answer = '';
  for (let i = 0; i < length; i++) {
    if (i < length - 4) {
      answer += '*';
    } else {
      answer += phone_number_array[i];
    }
  }
  return answer;
}

function solution_with_regex(phone_number) {
  // \d : 모든 숫자를 찾는다.
  // (?=pattern) : pattern 전방에서 탐색한다.
  // \d{4} : 정확히 숫자 4개를 찾는다.
  // => (?=\d{4}) : 숫자 4개를 찾고, 그 전방에서 탐색한다.
  // => replace(/\d(?=\d{4})/g, "*") : 숫자 4개를 찾고, 그 전방에서 모든 숫자를 '*'로 변환한다.
  
  return phone_number.replace(/\d(?=\d{4})/g, "*");
}

function another_solution(phone_number) {
  return "*".repeat(phone_number.length - 4) + phone_number.slice(-4);
}

console.log(solution("01033334444") === "*******4444");
console.log(solution("027778888") === "*****8888");
