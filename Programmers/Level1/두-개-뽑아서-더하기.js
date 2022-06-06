/**
 * 링크
    - https://programmers.co.kr/learn/courses/30/lessons/12969
 * 문제
    - 이 문제에는 표준 입력으로 두 개의 정수 n과 m이 주어집니다.
      별(*) 문자를 이용해 가로의 길이가 n, 세로의 길이가 m인 직사각형 형태를 출력해보세요.
 * 제한 조건
    - n과 m은 각각 1000 이하인 자연수입니다.
 * 예시
    입력
      1.'5 3'
    출력
      1. *****
         *****
         *****
 * 풀이
    1. 문자열을 반복하여 붙인다.
 * ETC
    - String.repeat(count) : 문자열을 주어진 횟수(count) 만큼 반복해 붙인 새로운 문자열을 반환
*/

function answer(data) {
  const n = data.split(" ");
  const a = Number(n[0]), b = Number(n[1]);
  for (let i = 0; i < b; i++) {
    let c = '';
    for(let j = 0; j < a; j++) {
        c += '*';
    }
    console.log(c);
  }
};

function answer(data) {
  const n = data.split(" ");
  const a = Number(n[0]), b = Number(n[1]);

  const row = '*'.repeat(a);
  for(let i =0; i < b; i++){
      console.log(row);
  }
}

console.log(answer('5 3'));
