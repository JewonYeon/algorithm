/**
 * 링크
    - 
 * 문제
    - '큰 수의 법칙'은 일반적으로 통계 분야에서 다루어지는 내용이지만 동빈이는 본인만의 방식으로 다르게 사용하고 있다.
      동빈이의 큰 수의 법칙은 다양한 수로 이루어진 배열이 있을 때 주어진 수들을 M번 더하여 가장 큰 수를 만드는 법칙이다.
 * 제한 조건
    - 배열의 특정한 인덱스(번호)에 해당하는 수가 연속해서 K번을 초과하여 더해질 수 없는 것이 특징이다.
    - 다른 인덱스에 해당하는 수가 같은 경우에도 다른 것으로 간주한다.
 * 예시
    입력
      - N: 배열의 크기 (2 <= N <= 1000)
      - M: (1 <= M <= 10000)
      - K: (1 <= K <= 10000)
      - arr: 다양한 수로 이루어진 배열
      1. 5, 8, 3, [2, 4, 5, 4, 6]
    출력
      1. 46
 * 풀이
    Key: 결국 가장 큰 수와 두번째로 큰 수만 구하면 된다.
    1. arr를 정렬 후, 가장 큰수와 두번째로 큰 수를 구한다.
    2. 총 M번을 반복하는데, K번만큼 가장 큰 수를, 넘어가면 두번째 수를 더하는 것을 반복한다.
 * ETC
    - 
*/

function solution(N, M, K, arr) {
  const sort_arr = [...arr].sort((a, b) => b - a);
  const first = sort_arr[0];
  const second = sort_arr[1];

  let result = 0;
  while(true) {
    for (let i = 1; i <= K; i++) {
      if (M === 0) {
        break;
      }
  
      result += first;
      M -= 1;
    }

    if (M === 0) {
      break;
    }
    result += second;
    M -= 1;
  }

  return result;
}

function solution(N, M, K, arr) {
  const sort_arr = [...arr].sort((a, b) => b - a);
  const first = sort_arr[0];
  const second = sort_arr[1];

  const combine = K * first + second;

  return parseInt((M / (K + 1)), 10) * combine + (M % (K + 1)) * first;
}

console.log(solution(5, 8, 3, [2, 4, 5, 4, 6]));
