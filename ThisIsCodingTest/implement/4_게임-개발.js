/**
 * 링크
    -
 * 문제
    - 캐릭터가 있는 장소는 1x1 크기의 정사각형으로 이루어진 NxM 직사각형으로, 각각의 칸은 육지 또는 바다이다
      캐릭터는 동서남북중 한 곳을 바라본다.
      맵의 각 칸은(A,B)로 나타낼 수 있고, A는 북쪽으로부터 떨어진 칸의 개수, B는 서쪽으로부터 떨어진 칸의 개수이다.
      캐릭터는 상하좌우로 움직일 수 있고, 바다로 되어 있는 공간에는 갈 수 없다.

      1. 현재 위치에서 현재 방향을 기준으로 왼쪽부터 차례대로 갈곳을 정한다.
      2. 캐릭터의 바로 왼쪽방향에 아직 가보지 않은 칸이 존재한다면, 왼쪽방향으로 회전한 다음 왼쪽으로 한칸을 전진한다.
        왼쪽 방향에 가보지 않은 칸이 없다면, 왼쪽 방향으로 회전만 수행하고 1단계로 돌아간다.
      3. 만약 네 방향 모두 이미 가본칸이거나 바다로 되어있는칸의 경우, 바라보는 방향을 유지한 채로 한칸 뒤로 가고 1단계로 돌아간다.
        단, 이때 뒤쪽방향이 바다인 칸이라 뒤로 갈 수 없는 경우에는 움직임을 멈춘다.
      
      캐릭터가 방문한 칸의 수를 구해라.
 * 제한 조건
    - 
 * 예시
    입력
      size: [N: 세로 M: 가로] (3 <= N,M <= 50)
      pos: [A, B] 현재 캐릭터의 위치
      direction: 현재 바라보는 방향 (0,1,2,3 = 북,동,남,서)
      m: 2차원 배열 (0: 육지, 1: 바다)
      1. [4,4], [1,1], 0, [[1,1,1,1],[1,0,0,1],[1,1,0,1],[1,1,1,1]]
    출력
      1. 3
 * 풀이
    1.
 * ETC
    -
*/


function solution(size, pos, direction, m) {
  let [N, M] = size;
  let [y, x] = pos;
  let d = direction;
  let map = m;
  let visit = Array.from({ length: N }, () => Array(M).fill(false));

  // 북, 동, 남, 서
  const dy = [1, 0, -1 ,0];
  const dx = [0, 1, 0 ,-1];

  const turn_left = () => {
    if (d === 0) d = 3;
    d--;
  };

  // 처음 위치 초기화
  let answer = 1;
  visit[y][x] = true;
  let turn_count = 0;
  while(true) {
    // 회전 및 다음 이동 위치
    turn_left();
    ny = y + dy[d];
    nx = x + dx[d];

    // 이동 가능할 경우
    if (map[ny][nx] === 0 && visit[ny][nx] === false) {
      visit[ny][nx] = true;
      answer++;
      y = ny;
      x = nx;
      turn_count = 0;
      continue;
    } else { // 이동 불가능할 경우 회전만
      turn_count++;
    }

    // 네번 회전 시
    if (turn_count === 4) {
      // 뒤로 갈 수 있을 경우 (방문한 곳도 가능)
      ny = y - dy[d];
      nx = x - dx[d];
      if (map[ny][nx] === 0) {
        y = ny;
        x = nx;
      } else {
      // 뒤로 갈 수 없을 경우 멈춤
        break;
      }

      turn_count = 0;
    }
  }

  return answer;
}

console.log(solution([4,4], [1,1], 0, [[1,1,1,1],[1,0,0,1],[1,1,0,1],[1,1,1,1]]) === 3);