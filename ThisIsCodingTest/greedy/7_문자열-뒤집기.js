/**
 * 링크
    -
 * 문제
    - 0, 1로만 이루어진 문자열 S가 있다.
      문자열 S에 있는 모든 숫자를 전부 같게 만들려고 한다.
      S에서 연속된 하나 이상의 숫자를 잡고 모두 뒤집는다. 뒤집는 다는 뜻은 1을 0으로, 0을 1로 바꾸는 것을 의미한다.

      '0001100'이 주어질때
      1. 전체를 뒤집으면 '1110011'이 된다.
      2. 4~5까지 뒤집으면 '1111111'이 되어 두 번만에 모두 같은 숫자가 된다.

      3. 하지만 처음부터 4~5를 뒤집으면 '0000000'이 한 번에 된다.
      최소 횟수를 구하라
 * 제한 조건
    -
 * 예시
    입력
      1. '0001100'
    출력
      1. 1
 * 풀이
    1. 이어지는 0, 1의 수를 각각 구해서 둘중 작은값을 리턴한다?
 * ETC
    -
*/

function solution(S) {
  let dic = {
    '0': 0,
    '1': 0,
  }

  let current = S[0];
  dic[current]++;

  for (let s of S) {
    if (s !== current) {
      dic[s]++;
      current = s;
    }
  }

  return dic['0'] > dic['1'] ? dic['1'] : dic['0'];
}

console.log(solution('0001100') === 1);
