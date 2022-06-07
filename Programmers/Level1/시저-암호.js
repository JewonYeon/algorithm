/**
 * 링크
    - https://programmers.co.kr/learn/courses/30/lessons/12926
 * 문제
    - 어떤 문장의 각 알파벳을 일정한 거리만큼 밀어서 다른 알파벳으로 바꾸는 암호화 방식을 시저 암호라고 합니다.
      예를 들어 "AB"는 1만큼 밀면 "BC"가 되고, 3만큼 밀면 "DE"가 됩니다. "z"는 1만큼 밀면 "a"가 됩니다.
      문자열 s와 거리 n을 입력받아 s를 n만큼 민 암호문을 만드는 함수, solution을 완성해 보세요.
 * 제한 조건
    - 공백은 아무리 밀어도 공백입니다.
    - s는 알파벳 소문자, 대문자, 공백으로만 이루어져 있습니다.
    - s의 길이는 8000이하입니다.
    - n은 1 이상, 25이하인 자연수입니다.
 * 예시
    입력 (s, n)
      1. "AB", 1
      2. "z", 1
      3. "a B z", 4
    출력
      1. "BC"
      2. "a"
      3. "e F d"
 * 풀이
    1. 기존 알파벳 소문자, 대문자 문자열을 생성
    2. 
 * ETC
    -
*/

function solution(s, n) {
  const small = "abcdefghijklmnopqrstuvwxyz";
  const big = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  
  let answer = "";
  
  for(let alphabet of s) {
      if (alphabet === ' ') {
          answer += ' '
          continue;
      }
      
      const index = small.indexOf(alphabet.toLowerCase());
      const moveIndex = (index + n) % 26;
      const value = small.includes(alphabet) ? small[moveIndex] : big[moveIndex];
      answer += value;
  }
  
  return answer;
}

console.log(solution("AB", 1) === "BC");
console.log(solution("z", 1) === "a");
console.log(solution("a B z", 4) === "e F d");
