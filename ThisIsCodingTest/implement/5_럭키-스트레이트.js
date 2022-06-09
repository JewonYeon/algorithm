/**
 * 링크
    -
 * 문제
    - 게임의 캐릭터는 필살기인 럭키 스트레이트 기술이 있다. 특정 조건을 만족할 때만 사용할 수 있다.
      특정 조건 : 현재 캐릭터의 점수를 N이라 할때, 자릿수를 기준으로 점수 N을 반으로 나누어 왼쪽 부분의 각 자릿수 합과 오른쪽 부분의 각 자릿수의 합을 더한 값이 동일한 상황
      
      럭키 스트레이트를 사용할 수 있으면 'LUCKY'를, 아니면 'READY'를 리턴해라
 * 제한 조건
    -
 * 예시
    입력
      N: (10 <= N <= 99999999) 단, N의 자릿수는 무조건 짝수
      1. 123402
      2. 7755
    출력
      1. 'LUCKY'
      2. 'READY'
 * 풀이
    1.
 * ETC
    -
*/

// O(N^2)
function solution(N) {
  const string = `${N}`;
  const length = string.length;
  const leftSum = string.slice(0, length / 2).split('').reduce((acc, cur) => acc + parseInt(cur), 0);
  const rightSum = string.slice(length / 2).split('').reduce((acc, cur) => acc + parseInt(cur), 0);

  return leftSum === rightSum ? 'LUCKY' : 'READY';
}

// O(N)
function solution(N) {
  const arr = `${N}`.split('');
  let sum = 0;

  for (let i = 0; i < (arr.length / 2); i++) {
    sum += (parseInt(arr[i]) - parseInt(arr[i + (arr.length / 2)]));
  }

  return sum === 0 ? 'LUCKY' : 'READY';
}

console.log(solution(123402) === 'LUCKY');
console.log(solution(7755) === 'READY');