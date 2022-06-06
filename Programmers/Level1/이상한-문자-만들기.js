/**
 * 링크
    - https://programmers.co.kr/learn/courses/30/lessons/12930
 * 문제
    - 문자열 s는 한 개 이상의 단어로 구성되어 있습니다. 각 단어는 하나 이상의 공백문자로 구분되어 있습니다.
      각 단어의 짝수번째 알파벳은 대문자로, 홀수번째 알파벳은 소문자로 바꾼 문자열을 리턴하는 함수, solution을 완성하세요.
 * 제한 조건
    - 문자열 전체의 짝/홀수 인덱스가 아니라, 단어(공백을 기준)별로 짝/홀수 인덱스를 판단해야합니다.
    - 첫 번째 글자는 0번째 인덱스로 보아 짝수번째 알파벳으로 처리해야 합니다.
 * 예시
    입력
      1. "try hello world"
    출력
      1. "TrY HeLlO WoRlD"
 * 풀이
    1. 문자열을 공백을 기준으로 split 한다.
    2. 각 요소에서 짝수번째 알파벳은 대문자로, 홀수번째 알파벳은 소문자로 바꾼다.
 * ETC
    -
*/

function solution(s) {
  return s
    .split(' ')
    .map((word) => word.split('').map((string, i) => i % 2 ? string.toLowerCase() : string.toUpperCase()).join(''))
    .join(' ');
}

function solution(s){
  // 정규 표현식
  // (\w) : 문자열을 그룹으로 처리한다.
  // (\w)(\w) : 문자열을 2번씩? 반복한다.
  const callback = (a) => {
    return a[0].toUpperCase() + a[1].toLowerCase();
  }
  return s.toUpperCase().replace(/(\w)(\w)/g, callback);

}

console.log(solution("try hello world"));
console.log(solution("try hello world") === "TrY HeLlO WoRlD");