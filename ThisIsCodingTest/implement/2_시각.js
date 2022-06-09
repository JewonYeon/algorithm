/**
 * 링크
    -
 * 문제
    -정수 N이 입력되면 00시00분00초부터 N시59분59초까지의 모든 시각중 3이 하나라도 포함되는 모든 경우의 수를 구하라
 * 제한 조건
    -
 * 예시
    입력
      1. 5
    출력 
      1. 11475
 * 풀이
    1. 완전 탐색
 * ETC
    -
*/

function solution(N) {
  let answer = 0;
  
  for(let h = 0; h <= N; h++) {
    for(let m = 0; m <= 59; m++) {
      for(let s = 0; s <= 59; s++) {
        if(`${h}${m}${s}`.includes('3')) {
          answer++;
        }
      }
    }
  }

  return answer;
}


console.log(solution(5));