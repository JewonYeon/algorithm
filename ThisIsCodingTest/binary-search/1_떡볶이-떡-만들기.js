/**
 * 링크
    -
 * 문제
    - 여행 가신 부모님을 대신해서 떡집 일을 하기로 했다.
      떡볶이 떡의 길이가 일정하지 않다. 대신 한 봉지 안에 들어가는 떡의 총 길이는 절단기로 잘라서 맞춰준다.

      절단기에 높이 (H)를 지정하면 줄지어진 떡을 한 번에 절단한다. 높이가 H보다 긴 떡은 H위의 부분이 잘릴 것이고, 낮은 떡은 잘리지 않는다.
      손님이 왔을 때 요청한 총 길이가 M일 때 적어도 M만큼의 떡을 얻기 위해 절단기에 설정할 수 있는 높이의 최댓값을 구하는 프로그램을 구해라.
 * 제한 조건
    -
 * 예시
    입력
      N: 떡의 갯수
      M: 요청한 떡의 길이
      arr: 떡의 개별 높이 배열
      1. 4, 6, [19, 15, 10, 17]
    출력
      1. 15
 * 풀이
    1. 파라메트릭 서치
 * ETC
    -
*/

function solution(n, m, arr) {
  let start = 0;
  let end = Math.max(...arr);
  
  let result = 0;
  while(start <= end) {
    let total = 0;
    let mid = parseInt(((start + end)/ 2));
    for (let x of arr) {
      if (x > mid) {
        total += (x - mid);
      }
    }
    // 잘린 떡의 양이 모자를 경우 더 길게 자르기 -> end를 줄인다
    if (total < m) {
      end = mid - 1;
    } else {
    // 잘린 떡의 길이가 더 길 경우 짧게 자르기 -> start를 높인다.
      result = mid; // 최대한 덜 잘랐을 때가 정답이므로, 기록
      start = mid + 1;
    }
  }
  return result;
}

console.log(solution(4, 6, [19,15,10,17]) === 15);
