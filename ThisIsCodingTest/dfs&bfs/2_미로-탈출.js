/**
 * 링크
    -
 * 문제
    - n x m 크기의 직사각형 미로가 있다.
      미로에는 여러 괴물이 있어 이를 피해 탈출해야한다.
      현재 위치는 (1, 1)이고, 미로의 출구는 (N,M)의 위치에 존재하며 한 번에 한 칸씩 이동할 수 있다.
      이때 괴물이 있는 부분은 0으로, 없는 부분은 1로 표시되어 있다.
      미로는 반드시 탈출할 수 있는 형태로 제시된다.
      탈출하기 위해 움직여야하는 최소 칸의 개수를 구하시오 (시작 칸, 마지막 칸을 모두 포함해서 계산)
 * 제한 조건
    -
 * 예시
    입력
      1. 5, 6,
        [
          [1,0,1,0,1,0],
          [1,1,1,1,1,1],
          [0,0,0,0,0,1],
          [1,1,1,1,1,1],
          [1,1,1,1,1,1],
        ]
    출력
      1. 10
 * 풀이
    1. 최소 거리 : BFS 이용
 * ETC
    -
*/

function solution (n, m, miro) {
  let queue = [[0, 0, 1]];

  // 북 동 남 서
  const dy = [-1, 0, 1, 0];
  const dx = [0, 1, 0, -1];
  while (true) {
    const [y, x, count] = queue.shift();
    if (y === n - 1 && x === m - 1) {
      return count;
    }

    for (let i = 0; i < 4; i++) {
      const ny = y + dy[i];
      const nx = x + dx[i];

      if (ny >= 0 && ny < n && nx >= 0 && nx < m) {
        queue.push([ny, nx, count + 1]);
      }
    }
  }
}

function solution (n, m, miro) {
  let queue = [[0, 0, 1]];

  // 북 동 남 서
  const dy = [-1, 0, 1, 0];
  const dx = [0, 1, 0, -1];
  while (queue.length > 0) {
    const [y, x, count] = queue.shift();

    for (let i = 0; i < 4; i++) {
      const ny = y + dy[i];
      const nx = x + dx[i];

      if (ny < 0 || ny >= n || nx < 0 || nx >= m) {
        continue;
      }

      if (miro[ny][nx] === 0) {
        continue;
      }

      // 처음 방문할 경우에만 최단 거리 기록
      if (miro[ny][nx] === 1) {
        miro[ny][nx] = miro[y][x] + 1;
        queue.push([ny, nx]);
      }
    }
  }

  return miro[n - 1][m - 1];
}

console.log(solution(5, 6,
  [
    [1,0,1,0,1,0],
    [1,1,1,1,1,1],
    [0,0,0,0,0,1],
    [1,1,1,1,1,1],
    [1,1,1,1,1,1],
  ]) === 10);
