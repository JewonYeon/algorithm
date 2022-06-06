/**
 * 링크
    - https://programmers.co.kr/learn/courses/30/lessons/12935
 * 문제
    - 정수를 저장한 배열, arr 에서 가장 작은 수를 제거한 배열을 리턴하는 함수, solution을 완성해주세요.
    - 단, 리턴하려는 배열이 빈 배열인 경우엔 배열에 -1을 채워 리턴하세요. 예를들어 arr이 [4,3,2,1]인 경우는 [4,3,2]를 리턴 하고, [10]면 [-1]을 리턴 합니다.
 * 제한 조건
    - arr은 길이 1 이상인 배열입니다.
    - 인덱스 i, j에 대해 i ≠ j이면 arr[i] ≠ arr[j] 입니다.
 * 예시
    입력
      1. [4,3,2,1]
      2. [10]
    출력
      1. [4,3,2]
      2. [-1]
 * 풀이
    1. 배열에서 가장 낮은 값을 찾는다. (처음 가장 작은 값을 Number.MAX_SAFE_INTEGER로 둔다.)
    2. 해당 값과 같은 요소를 전부 제거한다.
    3. 길이를 판단하여 0이면 [-1]을 리턴하고, 나머지는 그 배열을 리턴한다.
 * ETC
    - 굳이 for문을 돌리지 않아도 Math.min(...arr)로 구할 수 있었다!
*/

function solution(arr) {
  let min_number = Number.MAX_SAFE_INTEGER;

  for (let num of arr) {
    min_number = Math.min(min_number, num);
  }

  const answer = arr.filter(num => num > min_number);
  return answer.length ? answer : [-1];
}

function solution(arr) {
  let min_number = Math.min(...arr);
  const answer = arr.filter(num => num > min_number);
  return answer.length ? answer : [-1];
}

console.log(solution([4,3,2,1]));
console.log(solution([10]));