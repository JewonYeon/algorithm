/**
 * 링크
    -
 * 문제
    - 여행가 A는 NxN 크기의 정사각형 공간 위에 서 있다.
      이 공간은 1x1 크기의 정사각형으로 나누어져있다.
      가장 왼쪽 위 좌표는 (1,1)이며, 가장 오른쪽 아래 좌표는 (N,N)에 해당한다.
      여행가 A는 상하좌우 방향으로 이동할 수 있으며, 시작 좌표는 항상(1,1)이다.
      
      여행 계획서에는 L(왼쪽이동),R(오른쪽이동),U(위이동),D(아래이동)중 하나의 문자가 반복적으로 적혀있다.
      NxN 를 벗어날 시에 움직임은 무시된다.
      여행 계획서에 따라 최종적으로 도착할 지점을 구해라
 * 제한 조건
    -
 * 예시
    입력
      N: 배열의 크기
      arr: 여행 계획서
      1. 5, ['R', 'R', 'R', 'U', 'D', 'D']
    출력
      1. [3,4]
 * 풀이
    1. 이동 후 좌표를 구한다.
    2. 0,0 ~ N,N을 벗어날 시 현재 위치를 유지한다.
 * ETC
    -
*/

function solution(N, arr) {
  // 위, 우, 아래, 왼 
  const dy = [-1, 0, 1, 0];
  const dx = [0, 1, 0, -1];
  const dict = {
    'U': 0,
    'R': 1,
    'D': 2,
    'L': 3, 
  };
  

  const position = [1, 1];
  for(let command of arr) {
    const nextY = position[0] + dy[dict[command]];
    const nextX = position[1] + dx[dict[command]];

    if (nextX < 1 || nextX > N || nextY < 1 || nextY > N) {
      continue;
    }
    position[0] = nextY;
    position[1] = nextX;
  }

  return position;
}

console.log(solution(5, ['R', 'R', 'R', 'U', 'D', 'D']));