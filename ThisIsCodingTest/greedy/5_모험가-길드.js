/**
 * 링크
    -
 * 문제
    - 한 마을에 모험가가 N명 있습니다. 모험가 길드에서는 N명의 모험가를 대상으로 '공포도'를 측정했는데, '공포도'가 높은 모험가는 쉽게 공포를 느껴 위험 상황에서 제대로 대처할 능력이 떨어집니다.
      모험가 길드장인은 모험가 그룹을 안전하게 구성하고자 공포도가 X인 모험가는 반드시 X명 이상으로 구성한 모험가 그룹에 참여해야 여행을 떠날 수 있도록 규정했습니다.
      N명의 모험가에 대한 정보가 주어졌을 때, 최대 몇 개의 모험가 그룹을 만들 수 있는지 구하시오
 * 제한 조건
    -
 * 예시
    입력
      N: 모험가의 수 (1 <= N <= 100000)
      arr: 공포도 (각 요소는 N이하)
      1. 5, [2,3,1,2,2]
    출력
      1. 2
 * 풀이
    1. 공포도가 낮은 순대로 정렬한다.
    2. 그룹을 만들며 공포도가 높아진다면, 현재 그룹의 길이로 판단한다.
 * ETC
    -
*/

function solution(N, arr) {
  let answer = 0;

  let all_person_horror = [...arr].sort((a, b) => a - b);
  let current_group = [];

  for(let person_horror of all_person_horror) {
    current_group.push(person_horror);

    if (current_group.length === person_horror) {
      answer++;
      current_group = [];
    }
  }
  return answer;
}

function solution(N, arr) {
  let result = 0;
  let count = 0;

  for (let horror of arr) {
    count += 1;
    if (count >= horror) {
      result += 1;
      count = 0;
    }
  }
  return result;
}

console.log(solution(5, [2,3,1,2,2]));
